import node from '@astrojs/node';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  output: 'server',
  integrations: [react(), sitemap(), tailwind({ nesting: true }), icon()],
  adapter: node({
    mode: 'standalone',
  }),
  vite: {
    define: {
      'import.meta.vitest': 'undefined',
    },
  },
});
