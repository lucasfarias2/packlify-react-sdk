import fs from 'fs';
import path from 'path';
import eslintTemplate from '../files/eslintrc.js';

export default function createEslintRc(projectName: string) {
  const tgt = path.join(process.cwd(), projectName, '.eslintrc.cjs');

  fs.writeFileSync(tgt, eslintTemplate());
}
