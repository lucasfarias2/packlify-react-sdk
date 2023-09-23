#!/usr/bin/env node

import chalk from 'chalk';
import { spawn } from 'child_process';

console.log(chalk.bold.hex('#0e7490')('Packlify: ') + chalk.bold.hex('#be123c')('format-write'));

const format = () => {
  const command = spawn('npx prettier --write "src/**/*.{js,jsx,ts,tsx}"', {
    cwd: './',
    stdio: 'inherit',
    shell: true,
  });

  command.on('close', code => {
    if (code !== 0) {
      console.error(`packlify-format-write with code ${code}`);
      process.exit(1);
    }
  });
};

format();
