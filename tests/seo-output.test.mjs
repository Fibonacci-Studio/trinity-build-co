import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { test } from 'node:test';

// These checks inspect the real production build, not a copy of template logic.
// Run npm run build first. No request or email is sent by this suite.
const output = resolve('.vercel/output/static');
const origin = 'https://trinitybuildco.com';
const sitemap = await readFile(resolve(output, 'sitemap-0.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const pageFile = (url) => resolve(output, `.${new URL(url).pathname}`, 'index.html');
const pages = new Map(await Promise.all(urls.map(async (url) => [url, await readFile(pageFile(url), 'utf8')])));

test('all 26 public pages keep one canonical sitemap identity, including the linked root', () => {
  assert.equal(urls.length, 26);
  assert.equal(new Set(urls).size, 26);
  assert.ok(urls.includes(`${origin}/`));
  assert.ok(!urls.includes(origin));
  assert.ok(!urls.some((url) => /(?:404|api\/)/.test(url)));
  for (const [url, html] of pages) {
    assert.equal(new URL(url).origin, origin);
    assert.equal(url, new URL(url).href);
    if (new URL(url).pathname !== '/') assert.ok(!url.endsWith('/'));
    assert.equal(html.match(/<link rel="canonical" href="([^"]+)"/)?.[1], url);
    assert.ok(!html.includes('content="noindex'));
    assert.ok(html.includes('href="/"'), `${url}: home navigation exists`);
  }
});

for (const [url, html] of pages) {
  test(`${new URL(url).pathname}: honest organization graph, usable assets, and internal links`, async () => {
    const json = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
    assert.ok(json, 'JSON-LD remains present');
    const graph = JSON.parse(json)['@graph'];
    const organization = graph[0];
    assert.equal(organization['@type'], 'Organization');
    assert.equal(organization['@id'], `${origin}/#organization`);
    assert.equal(organization.legalName, 'Trinity Build Co LLC');
    assert.equal(organization.identifier.value, '365726');
    assert.ok(organization.telephone && organization.email && organization.logo);
    assert.ok(!('address' in organization), 'no unapproved address is invented');
    assert.ok(!graph.some((entry) => ['LocalBusiness', 'GeneralContractor'].includes(entry['@type'])));
    assert.equal(graph.find((entry) => entry['@type'] === 'WebPage').url, url);
    assert.ok(!/<style(?:\s|>)/.test(html), 'shared styles stay in cacheable files');
    const styles = [...html.matchAll(/<link rel="stylesheet" href="([^"]+)"/g)];
    assert.ok(styles.length > 0);
    for (const [, href] of styles) {
      assert.match(href, /^\/_astro\/[^/]+\.css$/);
      await access(resolve(output, `.${href}`));
    }
    for (const [, src] of html.matchAll(/<img\b[^>]*src="([^"]+)"/g)) {
      assert.ok(src.startsWith('/_astro/'), 'project imagery remains local');
      await access(resolve(output, `.${src}`));
    }
    for (const [, href] of html.matchAll(/<a\b[^>]*href="([^"#]+)[^"]*"/g)) {
      if (!href.startsWith('/') || href.startsWith('//')) continue;
      assert.ok(pages.has(new URL(href, origin).href), `${url}: internal page ${href} exists in sitemap`);
    }
    assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1);
    assert.match(html, /<main id="main-content"/);
  });
}

test('Contact guidance and Portfolio distinguish practical planning from verified project evidence', () => {
  const contact = pages.get(`${origin}/contact`);
  const portfolio = pages.get(`${origin}/portfolio`);
  assert.match(contact, /What to include in your inquiry/);
  assert.match(contact, /confidential plans or sensitive/);
  assert.match(contact, /<form\b/);
  assert.match(portfolio, /rather than a list/);
  assert.match(portfolio, /Inside the Scottsdale renovation/);
  assert.match(portfolio, /Completed 2024/);
});

test('llms index is a factual list of published pages with no fabricated location', async () => {
  const text = await readFile(resolve(output, 'llms.txt'), 'utf8');
  assert.match(text, /^# Trinity Build Co\./);
  assert.match(text, /No street address is currently published/);
  const links = [...text.matchAll(/\]\((https:\/\/[^)]+)\)/g)].map((match) => match[1]);
  assert.ok(links.length >= 10);
  for (const url of links) assert.ok(pages.has(url) || url === `${origin}/sitemap-index.xml`, url);
});
