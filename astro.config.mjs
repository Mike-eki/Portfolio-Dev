// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // TODO: Update `site` (and optionally `base`) to match your GitHub Pages URL
  site: 'https://mike-eki.github.io',
});
