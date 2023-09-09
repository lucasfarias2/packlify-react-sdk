import viteConfig from '@packlify/config-build/vite-config-client.js';
import { defineConfig } from 'vite';

export default defineConfig({
  ...viteConfig([{ name: 'home', path: '/src/client/entries/home/home.html' }]),
});
