import fs from 'fs';
import path from 'path';
import tsconfigServerTemplate from '../files/tsconfig.server.js';

export default function createTsconfigServer(projectName: string) {
  const tgt = path.join(process.cwd(), projectName, 'tsconfig.server.json');

  fs.writeFileSync(tgt, tsconfigServerTemplate());
}
