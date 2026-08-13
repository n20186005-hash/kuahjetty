# Jeti Kuah Langkawi — laman panduan satu halaman

Laman panduan Bahasa Melayu untuk Jeti Kuah (Kuah Jetty), Langkawi. Dibina dengan Astro, Tailwind CSS dan TypeScript, kemudian dikerah sebagai Static Assets di Cloudflare Workers.

## Versi dipin

- Astro 7.2.1
- Tailwind CSS 4.3.3 + `@tailwindcss/vite` 4.3.3
- TypeScript 6.0.3
- `@astrojs/check` 0.9.10
- `@astrojs/sitemap` 3.7.3
- Wrangler 4.120.0
- pnpm 11.21.0
- Node.js 24.18.0 LTS

Semua versi dalam `package.json` menggunakan nombor tepat, bukan julat terapung.

## Pembangunan

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Domain / site

Domain produksi hanya perlu diisi pada satu tempat: medan `site` dalam `astro.config.mjs`.

Sebelum domain ditetapkan, `site` kekal `undefined`. Dalam keadaan ini:

- binaan masih berjaya;
- canonical mutlak dan `og:url` tidak dikeluarkan;
- imej Open Graph menggunakan laluan relatif;
- URL mutlak dalam JSON-LD tidak ditambah;
- integrasi sitemap tidak diaktifkan.

Selepas domain sebenar diisi pada medan `site`, bina semula. `@astrojs/sitemap` akan menjana sitemap secara automatik berdasarkan nilai tersebut.

## Cloudflare Workers

Konfigurasi `wrangler.jsonc` menggunakan Workers Static Assets dan menunjuk ke `./dist`.

```bash
pnpm deploy
```

Tiada pangkalan data, log masuk atau CMS digunakan.

## Foto

Semua foto paparan disimpan secara tempatan di `public/images/`. Kredit dan lesen dinyatakan pada footer laman.
