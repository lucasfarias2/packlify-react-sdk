import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import type { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default function viteSsrBuildConfig(entryPoints: IEntryPoint[]): ReturnType<typeof defineConfig> {
  return {
    plugins: [react(), tsconfigPaths()],
    build: {
      outDir: './dist/react/ssr',
      emptyOutDir: true,
      ssr: true,
      sourcemap: true,
      rollupOptions: {
        input: {
          ...entryPoints.reduce((acc, entry) => {
            acc[entry.name.toLowerCase()] = resolve(process.cwd(), entry.path);
            return acc;
          }, {} as Record<string, string>),
        }
      },
    },
  };
}

interface IEntryPoint {
  name: string;
  path: string;
}
