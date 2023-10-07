#!/usr/bin/env node
import chalk from 'chalk';
import fs from 'fs';
import readline from 'readline';
import createPackageJson from './helpers/create-package-json.js';
import createReadme from './helpers/create-readme.js';
import copyFiles from './helpers/copy-files.js';

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
        createReadme(projectName);
        copyFiles(projectName);
      } catch (err) {
        console.log('Error generating project:', err);
        rl.close();
      }

      console.log(`Project ${projectName} has been created!`);
      console.log(`Please run ${chalk.bold('cd ' + projectName)} to enter the project directory.`);
      console.log(`Then run ${chalk.bold('npm install')} to install the dependencies.`);
      console.log(`Finally run ${chalk.bold('npm run dev')} to start the development server.`);
      console.log('Happy coding!');
    } else {
      console.log('Please provide a valid project name!');
    }

    rl.close();
  });
};

startApp();
