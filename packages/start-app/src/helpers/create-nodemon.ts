import fs from 'fs';
import path from 'path';
import nodemonTemplate from '../files/nodemon.js';

export default function createNodemon(projectName: string) {
  const tgt = path.join(process.cwd(), projectName, 'nodemon.json');

  fs.writeFileSync(tgt, nodemonTemplate());
}
