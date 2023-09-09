import fs from 'fs';
import path from 'path';
import readmeTemplate from '../files/readme.js';

export default function createReadme(projectName: string) {
  const tgt = path.join(process.cwd(), projectName, 'README.md');

  fs.writeFileSync(tgt, readmeTemplate(projectName));
}
