import genDiff from '../src/genDiff.js';
import resultJSON from '../__fixtures__/resultJSON.js';
import asd from '../__fixtures__/resultYAML.js';
//import resultYML from '../__fixtures__/resultYML.js';
import { test, expect } from '@jest/globals';


test('json', () => {
  expect(genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json')).toBe(resultJSON);
});
test('yaml', () => {
  expect(genDiff('./__fixtures__/file1.yaml', './__fixtures__/file2.yaml')).toBe(resultJSON);
});
test('yml', () => {
  expect(genDiff('./__fixtures__/file1.yml', './__fixtures__/file2.yml')).toBe(resultJSON);
});

