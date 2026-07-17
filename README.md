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

## Brand package

`brand/` holds the client's approved brand materials for reference and future collateral:
the executive design brief ([brand/executive-brief.md](brand/executive-brief.md) — text conversion of the
original RTF, plus the designed one-pager PNG), the brand identity board
(`brand/brand-board.png` — logo system, palette hexes, applications), and the full-resolution
logo set (`brand/logo/`, including the HD transparent primary used in the footer). Site colors
in `src/styles/global.css` match the board exactly: matte black `#0D0D0D`, warm gold `#C8A15A`,
charcoal `#2B2B2B`, concrete gray `#A6A6A6`.

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

## Content status

- Contact details in `src/config.ts` are the client's real ones (shared with Trinity Homes AZ):
  602.708.9986 · info@trinityhomesaz.com · 15455 N Greenway Hayden Loop, Ste C19, Scottsdale, AZ 85260.
  Careers mail routes to the same inbox until a dedicated address exists.
- Leadership features Slade Gibson (President & CEO) with his real headshot; additional team
  headshots from trinityhomesaz.com are staged in `src/assets/people/` if more profiles are added.
- Five Phoenix-specific branded visuals for multi-family, apartments, mixed-use, offices, and
  commercial campuses are integrated across the homepage, Industries, and Portfolio pages.
- Portfolio photography is labeled as representative imagery until completed commercial project
  photography is available.
