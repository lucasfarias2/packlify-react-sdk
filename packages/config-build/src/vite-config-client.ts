import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import path from 'path';
import url from 'url';
import type { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default function viteBuildConfig(entryPoints: IEntryPoint[]): ReturnType<typeof defineConfig> {
  return {
    plugins: [react(), tsconfigPaths()],
    build: {
      outDir: './dist/react',
      minify: true,
      sourcemap: true,
      emptyOutDir: true,
      rollupOptions: {
        // plugins: [analyze()],
        input: {
          ...entryPoints.reduce((acc, entry) => {
            acc[entry.name.toLowerCase()] = resolve(__dirname, entry.path);
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
