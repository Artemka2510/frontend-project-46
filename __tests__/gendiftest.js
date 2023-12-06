import { test, expect } from '@jest/globals';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/genDiff.js';
import resultJSON from '../__fixtures__/resultJSON.js';
import resultYAML from '../__fixtures__/resultYAML.js';
import resultYML from '../__fixtures__/resultYML.js';

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);

const getExpectedPath = (filename) => path.join(dirName, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getExpectedPath(filename), 'utf-8');

test('json', () => {
  expect(genDiff('./__fixtures__/file1-1.json', './__fixtures__/file1-2.json')).toBe(resultJSON);
});
test('yml', () => {
  expect(genDiff('./__fixtures__/file1.yml', './__fixtures__/file2.yml')).toBe(resultYML);
});
test('yaml', () => {
  expect(genDiff('./__fixtures__/file1.yaml', './__fixtures__/file2.yaml')).toBe(resultYAML);
});
test('json2', () => {
  const expectedFile1 = readFile('resultJSON2.txt');
  expect(genDiff('./__fixtures__/file2-1.json', './__fixtures__/file2-2.json')).toBe(expectedFile1);
});
test('plain', () => {
  const expectedFile2 = readFile('resultPlainYML.txt');
  expect(genDiff('./__fixtures__/file2-1.json', './__fixtures__/file2-2.json', 'plain')).toBe(expectedFile2);
});
test('gendiif(json)', () => {
  const expectedFile3 = readFile('resultJson.txt');
  expect(genDiff('./__fixtures__/file2-1.json', './__fixtures__/file2-2.json', 'json')).toBe(expectedFile3);
});
