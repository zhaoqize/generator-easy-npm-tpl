'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the striking ${chalk.red('generator-easy-npm-tpl')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'Please input project name (easy-project):',
        default: 'easy-project'
      },
      {
        type: 'input',
        name: 'projectDesc',
        message: 'Please input project description:',
        default: 'a easy-project'
      },
      {
        type: 'input',
        name: 'projectMain',
        message: 'Main file (app.js):',
        default: 'app.js'
      },
      {
        type: 'input',
        name: 'projectAuthor',
        message: 'Author (qize):',
        default: 'qize'
      },
      {
        type: 'list',
        name: 'projectLicense',
        message: 'Please choose license:',
        choices: ['MIT', 'ISC', 'Apache-2.0', 'AGPL-3.0']
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
  }

  install() {
    this.installDependencies();
  }
};
