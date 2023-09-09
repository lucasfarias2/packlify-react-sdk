import fs from 'fs';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default function createPrettierConfig(projectName: string) {
  const tgt = path.join(process.cwd(), projectName, 'prettier.config.cjs');

  fs.copyFileSync(path.join(__dirname, '../../src/files', 'prettier.config.cjs'), tgt);
}
