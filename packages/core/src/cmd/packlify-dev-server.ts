#!/usr/bin/env node
import chalk from 'chalk';
import { spawn } from 'child_process';

console.log(chalk.bold.hex('#0e7490')('[packlify] ') + chalk.bold.hex('#be123c')('dev server'));

const checkFormat = () => {
  const command = spawn('npx nodemon ./src/index.ts', {
    cwd: './',
    stdio: 'inherit',
    shell: true,
    env: { ...process.env, NODE_ENV: 'development' },
  });

  command.on('close', code => {
    if (code !== 0) {
      console.error(`dev server exited with code ${code}`);
      process.exit(1);
    }
  });
};

checkFormat();
