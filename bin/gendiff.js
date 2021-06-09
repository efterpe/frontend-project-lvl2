#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import program from 'commander';
import genDiff from '../src/gendiff.js';

program.version('0.1.0');
program.arguments('<filepath1> <filepath2>');
program.option('-f, --format [type]', ' output format');
program.description('Compares two configuration files and shows a difference.');
program.action((filepath1, filepath2) => console.log(genDiff(filepath1, filepath2)));

program.parse();
