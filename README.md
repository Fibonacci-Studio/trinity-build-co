# Trinity Build Co. — Marketing Site

Commercial general contractor site for Trinity Build Co. (Phoenix, AZ), implemented from the
Claude Design handoff (`Trinity Build Co.dc.html` + component/page prototypes).

**Stack:** Astro 6 · Tailwind CSS 4 (tokens) · self-hosted Archivo variable font · Vercel
(static output + one serverless API route).

## Develop

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # production build to dist/
npm run preview    # serve the production build locally
```

## Structure

- `src/config.ts` — business facts (phone, emails, nav, footer columns). Edit once, applies everywhere.
- `src/layouts/Base.astro` — head/SEO/OG/JSON-LD schema, font, scroll-reveal.
- `src/components/` — Nav (top bar + sticky header + mobile menu), Footer (optional gold CTA band), PageHero, ImageBand, ContactForm, ContactRows.
- `src/pages/` — home, about, services, process, industries, why-trinity, portfolio, leadership, safety, careers, contact, 404.
- `src/pages/api/contact.ts` — proposal-request endpoint (validation, honeypot, rate limit).
- `src/assets/photos/` — source photography, optimized to responsive WebP at build time.

## Contact form delivery

The form works out of the box (validates and returns success). To deliver leads by email,
set these environment variables in Vercel:

- `RESEND_API_KEY` — Resend API key
- `CONTACT_TO_EMAIL` — where leads are sent
- `CONTACT_FROM_EMAIL` — optional verified sender (defaults to Resend onboarding sender)

## Placeholders to replace before hand-off

- Phone number `602.555.0145` and emails in `src/config.ts` (design used placeholder contact details).
- Leadership names/headshots in `src/pages/leadership.astro`.
- Portfolio project captions as real project photography arrives.
