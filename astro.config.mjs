// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://trinitybuildco.com',
  trailingSlash: 'never',
  build: {
    // The complete page stylesheet is small. Inlining it removes a render-blocking
    // request on first visits, which is more valuable here than cross-page caching.
    inlineStylesheets: 'always',
  },
  // Dev-only: honor the port assigned by tooling (e.g. preview harness); 4321 otherwise.
  server: { port: process.env.PORT ? Number(process.env.PORT) : 4321 },
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
