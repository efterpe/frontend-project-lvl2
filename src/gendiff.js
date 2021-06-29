/* eslint-disable no-console */
import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import process from 'process';

const getData = (filepath) => {
  const fullpath = path.resolve(process.cwd(), filepath);
  return fs.readFileSync(fullpath, 'utf-8');
};

const getDiff = (filepath1, filepath2) => {
  const file1 = getData(filepath1);
  const file2 = getData(filepath2);
  console.log(file1, file2);
};
export default getDiff;

// console.log(fs.readFileSync(path.resolve(process.cwd(), '../file1.json'), 'utf-8'));
// console.log(JSON.parse(fs.readFileSync(path.resolve(process.cwd(), '../file2.json'), 'utf-8')));
