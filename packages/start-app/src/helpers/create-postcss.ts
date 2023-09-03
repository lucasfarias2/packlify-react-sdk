import fs from 'fs';
import path from 'path';
import postCssTemplate from '../files/postcss.js';

export default function createPostcssConfig(projectName: string) {
  const tgt = path.join(process.cwd(), projectName, 'postcss.config.cjs');

  fs.writeFileSync(tgt, postCssTemplate());
}
