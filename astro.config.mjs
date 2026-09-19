// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Canonical origin. Must match the CNAME file in public/ and the custom
  // domain configured in the repo's Pages settings, or generated absolute
  // URLs (sitemap, RSS, og:url) will point at the wrong host.
  site: 'https://www.babelstacks.com',

  // No `base` is set: an org Pages site with a custom domain is served from
  // the root. Setting one here would break every asset path.

  integrations: [react()],
});
