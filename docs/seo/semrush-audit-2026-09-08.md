# Trinity Semrush correction — 2026-09-08

## Scope and baseline

Prepared from the verified live production source `504438ee4ab1f9d2fe325d9b4bd5da84a1663211`, deployment `dpl_Anu6BkjuiRYMXTftxvxtxkeak7qk` (Vercel READY; exact Git metadata checked). The owner's dirty main checkout is untouched.

Semrush project **31133981**, snapshot **6a9facb07c1d6ac0bf112a13**: health 94/100, 31 crawled URLs. The supplied report identified 26 pages with issue45 (LocalBusiness missing address), 21 with issue112 (low text/HTML), Contact and Portfolio with issue117 (low word count), missing llms.txt (137), and one slashless-root sitemap orphan (207). These are baseline findings, not a new crawl of this candidate.

## Changes

- `src/layouts/Base.astro`: keeps the company identity, ROC license, contact, logo, service area, website and page graph; uses truthful `Organization` until the company approves a legitimate street address. `src/config.ts` explicitly forbids inventing an address. Google's [LocalBusiness documentation](https://developers.google.com/search/docs/appearance/structured-data/local-business) requires an address for that rich-result type, while its [Organization guidance](https://developers.google.com/search/docs/appearance/structured-data/organization) permits the applicable company properties. LocalBusiness eligibility remains dependent on a real approved location.
- `astro.config.mjs`: externalizes shared styles using Astro's [supported stylesheet option](https://docs.astro.build/en/reference/configuration-reference/#buildinlinestylesheets). This adds first-visit CSS requests but enables cache reuse on full page navigation and removes repeated style content from HTML; existing fingerprinted immutable caching remains. No dependency or font change.
- The generated sitemap now uses exactly `https://trinitybuildco.com/`, matching canonical metadata and home links. All other URLs remain slashless. The installed sitemap3.7 implementation strips the root slash after its documented serialize hook, so a narrowly scoped post-sitemap build hook corrects that exact `<loc>` and requires exactly one root. All26 actual built canonical pages and internal links are checked.
- Contact gains a concise project brief checklist, service links and preparation guidance **below the existing form grid**. Portfolio explains the already-published Scottsdale church renovation and distinguishes named completed work from capability examples. No new client, outcome, address, service, or delivery claim is invented.
- `public/llms.txt` is a factual index to existing public pages. It is not a promise of indexing, ranking or AI placement.
- The email API, contact form handler, Hermaion capture module and CSP are unchanged. No inquiry, email or hosted-data write was performed for this work.

## Verification

- `npm run build`: passes.
- `node --experimental-strip-types --test tests/hermaion-capture.test.mjs`: all23 existing tests pass, including email-success ordering, denied/failed submission suppression, privacy fields, capture-origin scope and opt-in pageviews.
- `node --test tests/seo-output.test.mjs`: all29 built-output tests pass (run after build). Checks all26 canonical/sitemap identities, honest graphs, CSS/image assets, internal links, one main heading, unchanged form presence and factual llms links.
- The first candidate used an unavailable font subpath; the build caught it and the original import was restored. The first generated-output test run caught the sitemap plugin's post-serialize slash removal; the final exact-root hook fixes it. Neither failure was filtered out.
- Local browser checks: Home, Contact and Portfolio render; Contact and Portfolio checked at390px and desktop widths, no horizontal overflow or framework overlay. Contact controls remain present; project imagery loads. No form was submitted. Static local hosting lacks Vercel's platform-only Speed Insights endpoint; its expected missing-script diagnostic is not a production application failure.
- `git diff --check`: passes.

Read-only production HTML measurements versus the local production build (bytes; Vercel may inject additional production markup):

| Page | Live baseline HTML | Candidate HTML | Candidate text/HTML | Visible words |
| --- | ---: | ---: | ---: | ---: |
| Home | 90,838 | 47,763 | 13.27% | 831 |
| Contact | 48,778 | 23,201 | 12.25% | 407 |
| Portfolio | 52,276 | 26,601 | 10.96% | 393 |

All26 candidate pages have measured text/HTML above10%, with script/style text excluded. This is a reproducible local measure, not Semrush's unpublished parsing algorithm or a guaranteed search benefit. Re-crawl and live canonical/CSS/capture verification remain deployment follow-up; no audit was restarted and no account plan, subscription or paid operation was changed.
