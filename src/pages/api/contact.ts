import type { APIRoute } from 'astro';

// Proposal-request endpoint. Validates + rate-limits every submission, then
// delivers the lead via Resend when RESEND_API_KEY and CONTACT_TO_EMAIL are
// configured. Without those env vars it logs the lead and still returns
// success so the site works end-to-end from day one.

export const prerender = false;

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

const isValidEmail = (value: string) => /.+@.+\..+/.test(value);

// Best-effort in-memory rate limit (per warm instance).
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();
const isRateLimited = (ip: string): boolean => {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_LIMIT;
};

const PROJECT_TYPES: Record<string, string> = {
  'ground-up': 'Ground-Up Construction',
  ti: 'Tenant Improvement',
  'design-build': 'Design-Build',
  cm: 'Construction Management',
  precon: 'Preconstruction Services',
  other: 'Other',
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export const GET: APIRoute = async () => json({ ok: false, error: 'Method not allowed.' }, 405);

export const POST: APIRoute = async ({ request }) => {
  try {
    const origin = request.headers.get('origin');
    if (origin) {
      try {
        if (new URL(origin).host !== new URL(request.url).host) {
          return json({ ok: false, error: 'Invalid request origin.' }, 403);
        }
      } catch {
        return json({ ok: false, error: 'Invalid request origin.' }, 403);
      }
    }

    const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
    if (isRateLimited(ip)) {
      return json(
        { ok: false, error: "You've sent a few requests in a row. Please wait a few minutes and try again." },
        429
      );
    }

    const contentType = request.headers.get('content-type') || '';
    const data = contentType.includes('application/json')
      ? await request.json()
      : Object.fromEntries(await request.formData());

    const name = String(data.name || '').trim();
    const company = String(data.company || '').trim();
    const email = String(data.email || '').trim();
    const phone = String(data.phone || '').trim();
    const type = String(data.type || '').trim();
    const message = String(data.message || '').trim();
    const botField = String(data['bot-field'] || '').trim();

    if (botField) return json({ ok: true }); // honeypot tripped — pretend success
    if (!name || !email) return json({ ok: false, error: 'Please fill in your name and email.' }, 400);
    if (!isValidEmail(email)) return json({ ok: false, error: 'Please enter a valid email address.' }, 400);
    if (type && !(type in PROJECT_TYPES)) return json({ ok: false, error: 'Invalid project type.' }, 400);

    const tooLong = [
      name.length > 100,
      company.length > 120,
      email.length > 160,
      phone.length > 40,
      message.length > 4000,
    ].some(Boolean);
    if (tooLong) return json({ ok: false, error: 'One or more fields are too long.' }, 400);

    const apiKey = import.meta.env.RESEND_API_KEY;
    const toEmail = import.meta.env.CONTACT_TO_EMAIL;

    if (apiKey && toEmail) {
      const { Resend } = await import('resend');
      const resend = new Resend(apiKey);
      const rows = [
        ['Name', name],
        ['Company', company || '—'],
        ['Email', email],
        ['Phone', phone || '—'],
        ['Project type', PROJECT_TYPES[type] || '—'],
        ['Message', message || '—'],
      ]
        .map(
          ([label, value]) =>
            `<tr><td style="padding:6px 16px 6px 0;color:#6b6862;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;vertical-align:top">${label}</td><td style="padding:6px 0;font-size:15px;color:#0d0d0d;white-space:pre-wrap">${escapeHtml(String(value))}</td></tr>`
        )
        .join('');

      const { error } = await resend.emails.send({
        from: import.meta.env.CONTACT_FROM_EMAIL || 'Trinity Build Co. <onboarding@resend.dev>',
        to: [toEmail],
        replyTo: email,
        subject: `Proposal request — ${name}${company ? ` (${company})` : ''}`,
        html: `<h2 style="font-size:16px;letter-spacing:0.08em;text-transform:uppercase">New proposal request</h2><table>${rows}</table>`,
      });
      if (error) {
        console.error('Resend error', error);
        return json({ ok: false, error: 'Something went wrong sending your request.' }, 500);
      }
    } else {
      console.log('[contact] lead received (email delivery not configured):', {
        name,
        company,
        email,
        phone,
        type,
      });
    }

    return json({ ok: true });
  } catch (error) {
    console.error('Contact form error', error);
    return json({ ok: false, error: 'Something went wrong sending your request.' }, 500);
  }
};
