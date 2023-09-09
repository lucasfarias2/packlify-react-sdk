import viteConfigSsr from '@packlify/config-build/vite-config-ssr.js';
import { defineConfig } from 'vite';

export default defineConfig({
  ...viteConfigSsr([
    {
      name: 'home',
      path: '/src/server/entries/home.tsx',
    },
  ]),
});
