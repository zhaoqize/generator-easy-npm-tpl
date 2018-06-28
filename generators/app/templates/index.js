#!/usr/bin/env node

const program = require('commander');

program
  .version(require('../package').version)
  .usage('<command> [options]')

program
  .command('')
  .description(' solution')
  .action(() => {
      require('../lib/main.js')();
  });

program.parse(process.argv);