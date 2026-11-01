import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://loady-site.vercel.app',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
