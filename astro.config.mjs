// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://trinity-build-co.vercel.app',
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
