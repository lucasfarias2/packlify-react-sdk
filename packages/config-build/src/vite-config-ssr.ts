import react from '@vitejs/plugin-react-swc';
import path from 'path';
import url from 'url';
import type { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default function viteSsrBuildConfig(entryPoints: IEntryPoint[]): ReturnType<typeof defineConfig> {
  return {
    plugins: [react(), tsconfigPaths()],
    logLevel: 'silent',
    build: {
      outDir: './dist/react/ssr',
      emptyOutDir: true,
      ssr: true,
      sourcemap: true,
      rollupOptions: {
        input: {
          ...entryPoints.reduce((acc, entry) => {
            acc[entry.name.toLowerCase()] = path.resolve(__dirname, entry.path);
            return acc;
          }, {} as Record<string, string>),
        },
      },
    },
  };
}

interface IEntryPoint {
  name: string;
  path: string;
}
