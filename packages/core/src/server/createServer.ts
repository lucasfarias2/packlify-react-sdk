import express from 'express';
import type { ViteDevServer } from 'vite';
import getServerOptions from '../config/serverOptions.js';
import deviceMiddleware from '../server/middleware/device.js';
import renderViewMiddleware from '../server/middleware/renderView.js';

export async function createServer({ hmrPort }: { hmrPort?: number }): Promise<express.Express> {
  const app = express();
  const isProd = process.env.NODE_ENV === 'production';
  const root = process.cwd();
  let vite: ViteDevServer;

  app.use(renderViewMiddleware);
  app.use(deviceMiddleware);

  if (isProd) {
    app.use((await import('compression')).default());
    app.use('/assets', express.static('dist/react/assets'));
  } else {
    vite = await (await import('vite')).createServer(getServerOptions(root, hmrPort || 3001));
    app.use(vite.middlewares);
    app.use((req, res, next) => {
      res.vite = vite;
      next();
    });
  }

  return app;
}
