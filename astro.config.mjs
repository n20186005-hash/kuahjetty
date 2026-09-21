import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Domain produksi. `site` diperlukan untuk canonical, OG absolute URL dan sitemap.
const SITE = 'https://kuahjetty.com';

const config = {
  site: SITE,
  output: 'static',
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
};

if (config.site) {
  config.integrations.push(sitemap());
}

export default defineConfig(config);
