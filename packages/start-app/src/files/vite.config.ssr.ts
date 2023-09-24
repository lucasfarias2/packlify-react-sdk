import { viteConfigSsr } from '@packlify/config-build';
import { defineConfig } from 'vite';

export default defineConfig({
  ...viteConfigSsr([
    {
      name: 'home',
      path: '/src/server/entries/home.tsx',
    },
  ]),
});
