import fs from 'fs';
import path from 'path';
import tailwindTemplate from '../files/tailwind.js';

export default function createTailwindConfig(projectName: string) {
  const tgt = path.join(process.cwd(), projectName, 'tailwind.config.cjs');

  fs.writeFileSync(tgt, tailwindTemplate());
}
