// @ts-check
import { defineConfig } from 'astro/config';
import { readFile, readdir, writeFile } from 'node:fs/promises';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

const site = 'https://trinitybuildco.com/';

/** @returns {import('astro').AstroIntegration} */
function canonicalSitemapRoot() {
  return {
    name: 'trinity-canonical-sitemap-root',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        // @astrojs/sitemap 3.7 strips the root slash AFTER serialize() when
        // trailingSlash is 'never'. Normalize only that exact <loc> value;
        // the URL parser, canonical links and home navigation all use '/'.
        const canonical = `<loc>${site}</loc>`;
        const slashless = `<loc>${site.slice(0, -1)}</loc>`;
        let roots = 0;
        for (const name of (await readdir(dir)).filter((name) => /^sitemap-\d+\.xml$/.test(name))) {
          const file = new URL(name, dir);
          const original = await readFile(file, 'utf8');
          const normalized = original.replaceAll(slashless, canonical);
          roots += normalized.split(canonical).length - 1;
          if (normalized !== original) await writeFile(file, normalized);
        }
        if (roots !== 1) throw new Error('Expected exactly one canonical home URL in the sitemap');
      },
    },
  };
}

export default defineConfig({
  site,
  trailingSlash: 'never',
  build: {
    // Shared styles are cacheable across full page navigations instead of being
    // duplicated in every HTML document. Fingerprinted assets stay immutable.
    inlineStylesheets: 'never',
  },
  // Dev-only: honor the port assigned by tooling (e.g. preview harness); 4321 otherwise.
  server: { port: process.env.PORT ? Number(process.env.PORT) : 4321 },
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [sitemap(), canonicalSitemapRoot()],
  vite: {
    plugins: [tailwindcss()],
  },
});
