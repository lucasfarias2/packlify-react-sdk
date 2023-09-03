import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default function viteBuildConfig(entryPoints: IEntryPoint[]) {
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
            acc[entry.name.toLowerCase()] = entry.path;
            return acc;
          }, {} as Record<string, string>),
        },
      },
    },
    test: {
      environment: 'happy-dom',
      setupFiles: ['./src/config/setupVitest.ts'],
    },
  };
}

interface IEntryPoint {
  name: string;
  path: string;
}
