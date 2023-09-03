import fs from 'fs';
import path from 'path';
import gitIgnoreTemplate from '../files/eslintignore.js';

export default function createGitIgnore(projectName: string) {
  const tgt = path.join(process.cwd(), projectName, '.gitignore');

  fs.writeFileSync(tgt, gitIgnoreTemplate());
}
