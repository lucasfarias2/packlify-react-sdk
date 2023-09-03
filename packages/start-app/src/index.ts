#!/usr/bin/env node
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import readline from 'readline';
import url from 'url';
import createEslintIgnore from './helpers/create-eslintignore.js';
import createEslintRc from './helpers/create-eslintrc.js';
import createGitIgnore from './helpers/create-gitignore.js';
import createPackageJson from './helpers/create-package-json.js';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const projectNamePattern = /^(?:@(?:[a-z0-9-*~][a-z0-9-*._~]*)?\/)?[a-z0-9-~][a-z0-9-._~]*$/;

console.log(chalk.bold.hex('#0e7490')('Packlify: ') + chalk.bold.hex('#be123c')('start-app'));

const startApp = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(`Enter a ${chalk.bold('name')} for the project: `, projectName => {
    if (!projectNamePattern.test(projectName)) {
      console.log('Invalid project name! It should match the package.json naming conventions.');
      rl.close();
    }

    if (projectName) {
      if (!fs.existsSync(projectName)) {
        fs.mkdirSync(projectName);
      }

      createPackageJson(projectName);
      createEslintRc(projectName);
      createEslintIgnore(projectName);
      createGitIgnore(projectName);

      console.log(`Project ${projectName} has been created!`);
    } else {
      console.log('Please provide a valid project name!');
    }

    rl.close();
  });
};

startApp();
