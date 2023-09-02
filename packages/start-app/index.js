#!/usr/bin/env node
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import readline from 'readline';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

console.log(chalk.bold.hex('#0e7490')('Packlify: ') + chalk.bold.hex('#be123c')('start-app'));

const startApp = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Name for the project? ', projectName => {
    if (projectName) {
      if (!fs.existsSync(projectName)) {
        fs.mkdirSync(projectName);
      }

      createPackageJson(projectName);
      createEslintConfig(projectName);
      createIndexFile(projectName);

      console.log(`Project ${projectName} has been created!`);
    } else {
      console.log('Please provide a valid project name!');
    }
    rl.close();
  });
};

const createPackageJson = projectName => {
  const packageJsonContent = {
    name: projectName,
    version: '1.0.0',
    type: 'module',
    main: 'index.js',
    scripts: {
      format: 'packlify-format-write',
      'format:check': 'packlify-format-check',
      lint: 'packlify-lint',
    },
    license: 'MIT',
    devDependencies: {
      '@packlify/config-format': '0.0.13-alpha.0',
      'eslint-config-packlify': '0.0.4',
    },
  };

  fs.writeFileSync(`./${projectName}/package.json`, JSON.stringify(packageJsonContent, null, 2));
};

const createEslintConfig = projectName => {
  const src = path.join(__dirname, './files/.eslintrc.cjs');
  const tgt = path.join(process.cwd(), projectName, '.eslintrc.cjs');

  fs.copyFileSync(src, tgt);
};

const createIndexFile = projectName => {
  const src = path.join(__dirname, './files/index.js');
  const tgt = path.join(process.cwd(), projectName, 'index.js');

  fs.copyFileSync(src, tgt);
};

startApp();
