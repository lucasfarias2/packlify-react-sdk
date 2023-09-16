import fs from 'fs';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default function createViteEnv(projectName: string) {
  const tgt = path.join(process.cwd(), projectName, 'vite-env.d.ts');

  fs.copyFileSync(path.join(__dirname, '../../src/files', 'vite-env.d.ts'), tgt);
}
