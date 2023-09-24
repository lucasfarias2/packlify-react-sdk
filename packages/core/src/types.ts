/* eslint-disable @typescript-eslint/no-namespace */
import type { ViteDevServer } from 'vite';
import type { Express, Response as ExpressResponse } from 'express';

declare global {
  namespace Express {
    interface Request {
      device?: IDevice;
    }

    interface Response {
      renderView: (pageName: string, props?: unknown) => void;
      isProd?: boolean;
      vite: ViteDevServer;
    }
  }
}

export type TDeviceType = 'mobile' | 'desktop';

export type IWindow = typeof window & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  __PRELOADED_STATE__: any;
};

export interface IComponent {
  children?: React.ReactNode;
  className?: string;
  device?: IDevice;
}

export interface IDevice {
  type?: TDeviceType;
}

export type PacklifyServer = Express;
export type PacklifyServerResponse = ExpressResponse;
export type PacklifyServerRequest = Express.Request;
