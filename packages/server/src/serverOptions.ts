import type { InlineConfig } from 'vite';

export default (root: string, hmrPort: number): InlineConfig => {
  return {
    root,
    logLevel: 'info',
    server: {
      middlewareMode: true,
      watch: {
        usePolling: true,
        interval: 100,
      },
      hmr: {
        port: hmrPort,
      },
    },
    appType: 'custom',
  };
};
