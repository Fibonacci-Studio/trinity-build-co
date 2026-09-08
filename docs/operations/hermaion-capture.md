# Trinity Hermaion capture integration

The release baseline is Vercel production deployment `dpl_4d8TTuagH822spCEnwQ1jc4ZGhLD`, project `prj_uw9ORiDHcJf3Ul0YsfimIpIhYHjw`, on `https://trinitybuildco.com`. Its metadata identifies CLI deployment from `ae44357` with `gitDirty=1`. On 2026-09-08, all 85 deployed application, public asset and build-configuration file SHA1 values matched the current local site. The isolated preparation branch snapshots those already-live sources as `ba3d875`; this is not a new content release. The original checkout and its uncommitted work remain untouched.

The capture change modifies only three existing application/configuration files: `ContactForm.astro`, `Base.astro` and the exact CSP `connect-src` list. The new helper uses the public Next routes on `https://hermaion.vercel.app`. It never uses a backend shared secret, user session, Supabase credential or database URL. The existing `/api/contact` endpoint and its Resend delivery logic are byte-for-byte unchanged.

## Production configuration

Preserve all existing email-delivery settings. Add the distinct Trinity public ingestion key as `PUBLIC_HERMAION_SITE_KEY`. This key is intentionally public and limited to site ingestion; keep its plaintext out of operational logs. Its allowed site origin must be `https://trinitybuildco.com`, which must also be allowed by the Hermaion public edge. Both settings are compiled by Astro at build time.

`PUBLIC_HERMAION_TRACK_PAGEVIEWS` defaults to disabled. Set it to `true` to record one reduced pageview per full document load: canonical pathname, referrer origin, and a random token held only in per-tab sessionStorage. Query strings, fragments, document titles, UTM values and inquiry fields are excluded from these pageviews. Browsers that block storage still work. This site uses full document navigation; no history interception or automatic form observer is added.

Capture is disabled outside the exact canonical production site, including deployment previews and localhost. Only the approved synthetic offline test harness bypasses this by serving the local built files under a fully intercepted canonical URL; it never forwards requests.

## Inquiry semantics

A form must first pass existing browser validity and backend validation, receive an HTTP success plus `ok: true`, and not be marked `ignored` by the honeypot. Only then is the bounded Hermaion call made. The closed field list is name, company, email, phone, project type and message. The helper strips query/fragment attribution and sends only the referrer origin. Hidden fields, honeypots, credentials and file objects are excluded or rejected.

Existing email delivery remains the success condition. Capture is best effort after that delivery: a blocked browser, network error or three-second deadline can prevent CRM capture without undoing a delivered email. There is no automatic retry that could duplicate a lead. If the contact endpoint rejects or lacks email configuration, the existing error remains visible and no lead is captured. This integration does not create or send any additional customer email.

## Verification and rollout

- `node --experimental-strip-types --test tests/hermaion-capture.test.mjs`: 23 passed, including negative payload/origin/honeypot/delivery cases, timeout, explicit pageview opt-in, reduced metadata and blocked storage.
- Strict TypeScript check of the new helper passed.
- `npm ci --ignore-scripts` and `npm run build` passed with the production-scoped public key and reduced pageviews enabled in the isolated build environment. Dependencies and lockfile remain the verified deployed versions. Their existing audit findings were not changed in this bounded integration.
- Chromium exercised the actual production-built page and bundles under the reviewed CSP with **all network requests intercepted**. Invalid input, simulated email failure, honeypot success, normal success and simulated capture failure passed. Zero real email requests and zero live capture writes were made.
- Of the 85 verified deployed source files, the other 82 remain byte-identical. The original contact endpoint remains identical. No hosted client deployment was performed during preparation.

The coordinator must first confirm Hermaion's public origin allowlist, exact site key, production frontend and exclusive lead-worker handover. Rebuild with the approved production public settings and deploy only from this isolated snapshot after source review. Use GET/OPTIONS, source/asset inspection and mocked form endpoints to verify without emailing customers. Any live inquiry test that invokes the existing contact endpoint requires separate explicit authorization because it delivers email.

Rollback is the recorded Vercel production deployment above. It restores both the pre-capture scripts and CSP. No client or Hermaion database rollback is required for this additive website patch. Retained real leads and legitimate pageviews are not deleted on rollback.
