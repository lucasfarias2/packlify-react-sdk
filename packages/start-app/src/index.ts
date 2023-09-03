#!/usr/bin/env node
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import readline from 'readline';
import url from 'url';
import createEslintIgnore from './helpers/create-eslintignore.js';
import createEslintRc from './helpers/create-eslintrc.js';
import createGitIgnore from './helpers/create-gitignore.js';
import createNodemon from './helpers/create-nodemon.js';
import createPackageJson from './helpers/create-package-json.js';
import createPostcssConfig from './helpers/create-postcss.js';
import createPrettierIgnore from './helpers/create-prettierignore.js';
import createTailwindConfig from './helpers/create-tailwind.js';
import createTsconfigClient from './helpers/create-tsconfig-client.js';
import createTsconfigServer from './helpers/create-tsconfig-server.js';

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

      try {
        createPackageJson(projectName);
        createEslintRc(projectName);
        createEslintIgnore(projectName);
        createGitIgnore(projectName);
        createTailwindConfig(projectName);
        createNodemon(projectName);
        createPostcssConfig(projectName);
        createTsconfigClient(projectName);
        createTsconfigServer(projectName);
        createPrettierIgnore(projectName);
      } catch (err) {
        console.log('Error generating project:', err);
        rl.close();
      }

      console.log(`Project ${projectName} has been created!`);
    } else {
      console.log('Please provide a valid project name!');
    }

    rl.close();
  });
};

startApp();
