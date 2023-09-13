import path from 'path';
import fs, { readFileSync } from 'fs';
import _ from 'lodash';

const resolvePath = (filePath) => (filePath.includes('__fixtures__')
  ? path.resolve(process.cwd(), filePath)
  : path.resolve(process.cwd(), `__fixtures__/${filePath}`));

const genDiff = (path1, path2) => {
  const path11 = resolvePath(path1);
  const path22 = resolvePath(path2);
  const file1 = readFileSync(path11, 'utf-8');
  const file2 = readFileSync(path22, 'utf-8');
  const data1 = JSON.parse(file1);
  const data2 = JSON.parse(file2);
  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedKeys = _.sortBy(keys);
  const comparison = sortedKeys.flatMap((key) => {
    if (data1[key] !== undefined && data2[key] === undefined) {
      return `  ${'-'} ${key}: ${data1[key]}`;
    }
    if (data1[key] === undefined && data2[key] !== undefined) {
      return `  ${'+'} ${key}: ${data2[key]}`;
    }
    if (data1[key] !== undefined && data2[key] !== undefined) {
      if (data1[key] === data2[key]) {
        return `  ${key}: ${data1[key]}`;
      }
    } if (data1[key] !== data2[key]) {
      return [`  ${'-'} ${key}: ${data1[key]}`, `  ${'+'} ${key}: ${data2[key]}`];
    }
    return comparison;
  });
  const res = `${'{'}\n${comparison.join('\n')}\n${'}'}`;
  return res.toString();
};

export default genDiff;
