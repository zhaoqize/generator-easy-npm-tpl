const execa = require('execa') 
const inquirer = require('inquirer')
const signale = require('signale');

function run (command, args) {
  if (!args) { [command, ...args] = command.split(/\s+/) }
  return execa(command, args, { cwd: this.context })
}

async function rollback () {
  
}

module.exports = () => {
  rollback().catch(err => {
    process.exit(1)
  })
}