import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default function viteSsrBuildConfig(entryPoints: IEntryPoint[]) {
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
