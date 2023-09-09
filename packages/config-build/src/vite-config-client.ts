import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import type { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

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
