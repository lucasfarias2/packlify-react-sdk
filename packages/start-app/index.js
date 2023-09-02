#!/usr/bin/env node
import chalk from 'chalk';
import readline from 'readline';

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

      fs.writeFileSync(`${projectName}/tuvieja.js`, 'console.log("asd");');
      
      console.log(`Project ${projectName} has been created!`);
    } else {
      console.log('Please provide a valid project name!');
    }
    rl.close();
  });
};

startApp();
