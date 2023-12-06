import { readFileSync } from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const getExtension = (filename) => path.extname(filename);

const getName = (filename) => path.basename(filename);

const parser = (filename) => {
  const name = getName(filename);
  const extension = getExtension(filename);

  return extension !== '.json'
    ? yaml.load(readFileSync(filename, 'utf-8'))
    : JSON.parse(readFileSync(filename, 'utf-8'));
};
export default parser;
