#!/usr/bin/env node
import chalk from 'chalk';
import { spawn } from 'child_process';

console.log(chalk.bold.hex('#0e7490')('[packlify] ') + chalk.bold.hex('#be123c')('production server'));

const checkFormat = () => {
  const command = spawn('node ./dist/src/index.js', {
    cwd: './',
    stdio: 'inherit',
    shell: true,
    env: { ...process.env, NODE_ENV: 'production' },
  });

  command.on('close', code => {
    if (code !== 0) {
      console.error(`server exited with code ${code}`);
      process.exit(1);
    }
  });
};

checkFormat();
