// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Canonical origin. Must match public/CNAME and the custom domain in the
  // repo's Pages settings, or generated absolute URLs (canonical, og:url,
  // sitemap) point at the wrong host.
  site: 'https://www.babelstacks.com',

  // English-only for now, but routed through i18n from the start so adding
  // Chinese later is a new content directory rather than a rewrite.
  // `prefixDefaultLocale: false` keeps English at / instead of /en/, so no
  // existing URL changes when a second locale arrives.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [react()],
});
