import fs from 'fs';
import path from 'path';
import envExampleTemplate from '../files/env-example.js';

export default function createEnvExample(projectName: string) {
  const tgt = path.join(process.cwd(), projectName, '.env.example');

  fs.writeFileSync(tgt, envExampleTemplate());
}
