#!/usr/bin/env node
import chalk from 'chalk';
import { spawn } from 'child_process';

console.log(chalk.bold.hex('#0e7490')('[packlify] ') + chalk.bold.hex('#be123c')('vite build ssr'));

const checkFormat = () => {
  const command = spawn('npx vite build --config ./vite.config.ssr.ts', {
    cwd: './',
    stdio: 'inherit',
    shell: true,
  });

  command.on('close', code => {
    if (code !== 0) {
      console.error(`format-check exited with code ${code}`);
      process.exit(1);
    }
  });
};

checkFormat();
