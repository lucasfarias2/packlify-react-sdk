import type { ViteDevServer } from 'vite';

declare global {
  namespace Express {
    interface Request {
      device?: IDevice;
    }

    interface Response {
      renderView: (pageName: string, props?: unknown) => void;
      loadQueryKeys: (queryKeys: string[]) => Response;
      queries: Record<string, unknown>;
      isProd?: boolean;
      vite: ViteDevServer;
    }
  }

  export interface IDevice {
    type?: TDeviceType;
  }

  type TDeviceType = 'mobile' | 'desktop';

  export type IWindow = typeof window & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    __PRELOADED_STATE__: any;
  };

  export interface IComponent {
    children?: React.ReactNode;
    className?: string;
    device?: IDevice;
  }
}
