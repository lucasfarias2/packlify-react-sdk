import fs from 'fs';
import path from 'path';
import prettierIgnoreTemplate from '../files/prettierignore.js';

export default function createPrettierIgnore(projectName: string) {
  const tgt = path.join(process.cwd(), projectName, '.prettierignore');

  fs.writeFileSync(tgt, prettierIgnoreTemplate());
}
