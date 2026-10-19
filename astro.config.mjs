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
  config.integrations.push(sitemap({filter: page => !/\/404(?:\.html|\/)?$/.test(page), serialize(item) { item.links=[{lang:'ms',url:SITE+'/'},{lang:'en',url:SITE+'/en/'},{lang:'zh-Hant',url:SITE+'/zh/'},{lang:'x-default',url:SITE+'/'}]; return item; }}));
}

export default defineConfig(config);
