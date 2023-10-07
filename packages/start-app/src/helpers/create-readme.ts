import fs from 'fs';
import path from 'path';

export default function createReadme(projectName: string) {
  const tgt = path.join(process.cwd(), projectName, 'README.md');

  fs.writeFileSync(
    tgt,
    `# ${projectName}
  - App generated with [packlify-web](https://github.com/shopinpack/packlify-web)'s start-app.
  `
  );
}
