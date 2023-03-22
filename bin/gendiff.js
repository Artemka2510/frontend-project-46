import { Command } from 'commander';
import { readFileSync } from 'node:fs';


const program = new Command();

program
    .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format <type>', 'output format')
  //.arguments('<filepath1> <filepath2>')
 
program.parse();


const data = readFileSync(file1.json);
console.log(data)