export default function tsconfigServerTemplate() {
  return JSON.stringify(
    {
      compilerOptions: {
        baseUrl: './',
        outDir: './dist',
        esModuleInterop: true,
        moduleResolution: 'node',
        module: 'ES2022',
        target: 'ES2022',
        isolatedModules: true,
        skipLibCheck: true,
        paths: {
          '@/*': ['src/*'],
          '@/components/*': ['src/shared/components/*'],
        },
      },
      include: ['**/*.ts', '.env'],
      exclude: ['node_modules', 'dist'],
      'ts-node': {
        esm: true,
        swc: true,
        require: ['tsconfig-paths/register', 'dotenv/config'],
      },
    },
    null,
    2
  );
}
