#!/usr/bin/env node
import program from 'commander';

program.version('0.1.0');
program.arguments('<filepath1> <filepath2>');
program.option('-f, --format [type]', ' output format');
program.description('Compares two configuration files and shows a difference.');

program.parse();
