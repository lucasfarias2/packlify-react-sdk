import fs from 'fs';
import path from 'path';
import eslintIgnoreTemplate from '../files/eslintignore.js';

export default function createEslintIgnore(projectName: string) {
  const tgt = path.join(process.cwd(), projectName, 'eslintrcignore');

  fs.writeFileSync(tgt, eslintIgnoreTemplate());
}
