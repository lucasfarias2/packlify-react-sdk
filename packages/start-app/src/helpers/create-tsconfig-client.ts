import fs from 'fs';
import path from 'path';
import tsconfigClientTemplate from '../files/tsconfig.client.js';

export default function createTsconfigClient(projectName: string) {
  const tgt = path.join(process.cwd(), projectName, 'tsconfig.client.json');

  fs.writeFileSync(tgt, tsconfigClientTemplate());
}
