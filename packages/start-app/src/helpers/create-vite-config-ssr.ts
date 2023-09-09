import fs from 'fs';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default function createViteConfigSsr(projectName: string) {
  const tgt = path.join(process.cwd(), projectName, 'vite.config.ssr.ts');

  fs.copyFileSync(path.join(__dirname, '../../src/files', 'vite.config.ssr.ts'), tgt);
}
