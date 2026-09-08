import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { captureDeliveredInquiry, captureReducedPageview } from '../src/lib/hermaion-capture.ts';

const payload = { name: 'Approved Fixture', email: 'fixture@example.test', company: 'Fixture', phone: '', type: 'ti', message: 'Offline test only', 'bot-field': '' };
const delivery = { httpOk: true, ok: true };
const context = {
  siteKey: 'synthetic-public-site-key',
  pageUrl: 'https://trinitybuildco.com/contact?email=private@example.test#private',
  referrer: 'https://search.example.test/results?secret=private#private',
};
function recorder(status = 200) {
  const calls = [];
  return { calls, request: async (...args) => { calls.push(args); return new Response('{}', { status }); } };
}

test('a delivered legitimate inquiry captures only approved fields to the canonical Next endpoint', async () => {
  const mock = recorder();
  assert.equal(await captureDeliveredInquiry({ ...payload, password: 'never-forward', token: 'never-forward', hidden: 'never-forward' }, delivery, context, mock.request), true);
  assert.equal(mock.calls.length, 1);
  const [url, options] = mock.calls[0];
  assert.equal(url, 'https://hermaion.vercel.app/api/public/ingest');
  assert.equal(options.headers['X-Hermaion-Key'], context.siteKey);
  assert.equal(options.credentials, 'omit');
  assert.equal(options.redirect, 'error');
  assert.equal(options.referrerPolicy, 'no-referrer');
  assert.equal(options.keepalive, true);
  assert.deepEqual(JSON.parse(options.body), {
    name: payload.name, email: payload.email, company: payload.company, phone: '', type: 'ti', message: payload.message,
    _page_url: 'https://trinitybuildco.com/contact', _referrer: 'https://search.example.test',
  });
});

for (const [label, patch] of [
  ['email delivery failed', { httpOk: false }],
  ['unconfigured email delivery', { httpOk: false, ok: false }],
  ['application denial', { ok: false }],
  ['missing success', { ok: undefined }],
  ['honeypot success', { ignored: true }],
]) test(`${label} never sends a capture`, async () => {
  const mock = recorder();
  assert.equal(await captureDeliveredInquiry(payload, { ...delivery, ...patch }, context, mock.request), false);
  assert.equal(mock.calls.length, 0);
});

for (const [label, patch] of [
  ['honeypot filled', { 'bot-field': 'spam' }],
  ['missing name', { name: '' }],
  ['invalid email', { email: 'bad' }],
  ['unknown project type', { type: 'spam' }],
  ['oversized message', { message: 'a'.repeat(4001) }],
  ['non-text field', { phone: {} }],
]) test(`${label} fails closed even with a success response`, async () => {
  const mock = recorder();
  assert.equal(await captureDeliveredInquiry({ ...payload, ...patch }, delivery, context, mock.request), false);
  assert.equal(mock.calls.length, 0);
});

for (const [label, patch] of [
  ['missing key', { siteKey: undefined }],
  ['newline in key', { siteKey: 'invalid\npublic-key' }],
  ['preview host', { pageUrl: 'https://trinity-preview.vercel.app/contact' }],
  ['lookalike host', { pageUrl: 'https://trinitybuildco.com.attacker.test/contact' }],
  ['HTTP host', { pageUrl: 'http://trinitybuildco.com/contact' }],
  ['userinfo in page URL', { pageUrl: 'https://user:pass@trinitybuildco.com/contact' }],
]) test(`${label} does not write any capture data`, async () => {
  const mock = recorder();
  assert.equal(await captureDeliveredInquiry(payload, delivery, { ...context, ...patch }, mock.request), false);
  assert.equal(await captureReducedPageview({ ...context, ...patch }, { enabled: true }, mock.request), false);
  assert.equal(mock.calls.length, 0);
});

test('capture HTTP errors, network rejection and timeout resolve harmlessly after email success', async () => {
  for (const status of [401, 403, 429, 500]) {
    assert.equal(await captureDeliveredInquiry(payload, delivery, context, recorder(status).request), false);
  }
  assert.equal(await captureDeliveredInquiry(payload, delivery, context, async () => { throw Error('private upstream diagnostic'); }), false);
  const started = Date.now();
  assert.equal(await captureDeliveredInquiry(payload, delivery, context, async (_url, options) => new Promise((_resolve, reject) => {
    options.signal.addEventListener('abort', () => reject(Error('deadline')), { once: true });
  })), false);
  assert.ok(Date.now() - started >= 2900);
  assert.ok(Date.now() - started < 5000);
});

test('reduced pageviews are opt-in and omit query, fragment, title, UTM and inquiry data', async () => {
  const mock = recorder();
  assert.equal(await captureReducedPageview(context, { enabled: false }, mock.request), false);
  assert.equal(mock.calls.length, 0);
  const values = new Map();
  const storage = { getItem: (key) => values.get(key) ?? null, setItem: (key, value) => values.set(key, value) };
  const random = { getRandomValues: (array) => { array.fill(7); return array; } };
  assert.equal(await captureReducedPageview(context, { enabled: true, storage, random }, mock.request), true);
  assert.equal(await captureReducedPageview({ ...context, pageUrl: 'https://trinitybuildco.com/services' }, { enabled: true, storage, random }, mock.request), true);
  const first = JSON.parse(mock.calls[0][1].body);
  assert.equal(mock.calls[0][0], 'https://hermaion.vercel.app/api/public/track-pageview');
  assert.deepEqual(first, { url: 'https://trinitybuildco.com/contact', path: '/contact', referer: 'https://search.example.test', session_token: '07'.repeat(16) });
  assert.equal(JSON.parse(mock.calls[1][1].body).session_token, first.session_token);
});

test('disabled storage still allows a reduced pageview without a persistent token', async () => {
  const mock = recorder();
  assert.equal(await captureReducedPageview(context, { enabled: true, storage: { getItem() { throw Error('blocked'); }, setItem() { throw Error('blocked'); } } }, mock.request), true);
  assert.equal('session_token' in JSON.parse(mock.calls[0][1].body), false);
});

test('malformed or credential-bearing referrers are dropped and untrusted stored tokens are replaced', async () => {
  for (const referrer of ['not a URL', 'https://user:pass@search.example.test/path', 'javascript:alert(1)']) {
    const mock = recorder();
    await captureReducedPageview({ ...context, referrer }, { enabled: true, storage: { getItem: () => 'visitor@example.test', setItem() {} }, random: { getRandomValues: (array) => { array.fill(1); return array; } } }, mock.request);
    const body = JSON.parse(mock.calls[0][1].body);
    assert.equal(body.referer, '');
    assert.equal(body.session_token, '01'.repeat(16));
  }
});

test('the form hook follows email success and honeypot checks; CSP permits only the capture origin addition', async () => {
  const form = await readFile(new URL('../src/components/ContactForm.astro', import.meta.url), 'utf8');
  assert.ok(form.indexOf('if (!res.ok || !out.ok) throw') < form.indexOf('void captureDeliveredInquiry('));
  assert.ok(form.indexOf('if (!out.ignored) {') < form.indexOf('void captureDeliveredInquiry('));
  assert.ok(form.indexOf('form.reportValidity()') < form.indexOf('fetch(endpoint'));
  const config = JSON.parse(await readFile(new URL('../vercel.json', import.meta.url), 'utf8'));
  const csp = config.headers[0].headers.find(({ key }) => key === 'Content-Security-Policy').value;
  assert.equal(csp.split('; ').find((x) => x.startsWith('connect-src ')), "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com https://hermaion.vercel.app");
  assert.equal(csp.split('; ').find((x) => x.startsWith('form-action ')), "form-action 'self'");
});
