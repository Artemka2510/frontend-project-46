import { Command } from 'commander';
const program = new Command();

program
    .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
 

const genDiff = (file1, file2) => {
  console.log(file1);
  console.log(file2);
};



  program.parse();