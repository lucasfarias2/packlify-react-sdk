import express from 'express';
import type { ViteDevServer } from 'vite';
import deviceMiddleware from './middleware/device.js';
import renderViewMiddleware from './middleware/renderView.js';
import getServerOptions from './serverOptions.js';

export async function createPacklifyServer(): Promise<express.Express> {
  const app = express();
  const hmrPort = 3001;
  const isProd = process.env.NODE_ENV === 'production';
  const root = process.cwd();
  let vite: ViteDevServer;

  app.use(renderViewMiddleware);
  app.use(deviceMiddleware);

  if (isProd) {
    app.use((await import('compression')).default());
    app.use('/assets', express.static('dist/react/assets'));
  } else {
    vite = await (await import('vite')).createServer(getServerOptions(root, hmrPort));
    app.use(vite.middlewares);
    app.use((req, res, next) => {
      res.vite = vite;
      next();
    });
  }

  return app;
}
