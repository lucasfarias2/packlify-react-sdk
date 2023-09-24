import fs from 'fs';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default function createNvmrc(projectName: string) {
  const tgt = path.join(process.cwd(), projectName, '.nvmrc');

  fs.copyFileSync(path.join(__dirname, '../../src/files', '.nvmrc'), tgt);
}
