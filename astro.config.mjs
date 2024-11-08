// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';

import solidJs from '@astrojs/solid-js';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), solidJs(), sitemap()],
  output: 'server',
  adapter: cloudflare()
});