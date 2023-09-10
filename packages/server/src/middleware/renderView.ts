import type { NextFunction, Request, Response } from 'express';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'path';
import serialize from 'serialize-javascript';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const resolve = (p: string) => path.resolve(__dirname, p);
const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';

const renderViewMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.renderView = async (pageName, props) => {
    try {
      const url = req.originalUrl;

      const htmlFromFile = fs.readFileSync(
        resolve(
          isProd
            ? `../../../react/src/client/entries/${pageName}/${pageName}.html`
            : `../../../src/client/entries/${pageName}/${pageName}.html`
        ),
        'utf-8'
      );

      let render, html;

      if (isProd) {
        html = htmlFromFile;
        render = (await import(resolve(`../../../react/ssr/${pageName}.js`))).render;
      } else {
        html = await res.vite.transformIndexHtml(url, htmlFromFile);
        render = (await res.vite.ssrLoadModule(`/src/server/entries/${pageName}.tsx`)).render;
      }

      const serializedData = serialize(props, { isJSON: true });

      const renderedToString: string = render(url, props);

      const finalHtml = html
        .replace(`<!--app-html-->`, renderedToString)
        .replace('// preloaded-state', `window.__PRELOADED_STATE__ = ${serializedData}`);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(finalHtml);
    } catch (e) {
      const error = e as Error;
      if (isDev) {
        res.vite.ssrFixStacktrace(error);
      }
      console.log(error.stack);
      res.status(500).end(error.stack);
    }
  };

  next();
};

export default renderViewMiddleware;
