/* eslint-disable no-console */
import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import process from 'process';

const getData = (filepath) => {
  const fullpath = path.resolve(process.cwd(), filepath);
  return fs.readFileSync(fullpath, 'utf-8');
};
const parseFile = (file) => {
  const result = JSON.parse(file);
  return result;
};

const getDiff = (filepath1, filepath2) => {
  const file1 = parseFile(getData(filepath1));
  const file2 = parseFile(getData(filepath2));
  const result = {};

  for (const key of file1) {
    if (_.has(file2, key)) {
      if (file1[key] === file2[key]) {
        result.push(file1[key]);
      } else {
        result.push(`-${file1[key]}`);
      }
    }
  }
  for (const key of file2) {
    if (!(_.has(file1, key))) {
      result.push(`+${file2[key]}`);
  }
  return result;
};

export default getDiff;

// console.log(fs.readFileSync(path.resolve(process.cwd(), '../file1.json'), 'utf-8'));
// console.log(JSON.parse(fs.readFileSync(path.resolve(process.cwd(), '../file2.json'), 'utf-8')));
