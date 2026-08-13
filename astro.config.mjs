import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Isi domain produksi pada `site` di bawah sahaja selepas domain dipilih.
// Biarkan undefined sebelum itu; binaan kekal sah dan sitemap tidak dijana.
const config = {
  site: undefined,
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
