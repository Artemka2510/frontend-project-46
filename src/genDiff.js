import path from 'path';
import fs from 'fs';
import _ from 'lodash';

const genDiff = (path1, path2) => {
  const file1 = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), path1), 'utf-8'));
  const file2 = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), path2), 'utf-8'));
  const keys = _.union(Object.keys(file1), Object.keys(file2));
  const sortedKeys = _.sortBy(keys);
  const comparison = sortedKeys.flatMap((key) => {
    if (file1[key] !== undefined && file2[key] === undefined) {
      return `  ${'-'} ${key}: ${file1[key]}`;
    }
    if (file1[key] === undefined && file2[key] !== undefined) {
      return `  ${'+'} ${key}: ${file2[key]}`;
    }
    if (file1[key] !== undefined && file2[key] !== undefined) {
      if (file1[key] === file2[key]) {
        return `  ${key}: ${file1[key]}`;
      }
    } if (file1[key] !== file2[key]) {
      return [`  ${'-'} ${key}: ${file1[key]}`, `  ${'+'} ${key}: ${file2[key]}`];
    }
    return comparison;
  });
  const res = `${'{'}\n${comparison.join('\n')}\n${'}'}`;
  return res;
};

export default genDiff;
