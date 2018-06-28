'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');
const commandExists = require('command-exists');

module.exports = class extends Generator {
  initializing() {}

  prompting() {
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
        name: 'commander',
        message: 'How to run:',
        default: 'easy <commander>'
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
    let {
      projectName,
      projectDesc,
      projectAuthor,
      projectLicense,
      commander
    } = this.props;
    mkdirp.sync(`${projectName}`);
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath(`${projectName}/package.json`),
      {
        projectName: projectName,
        projectDesc: projectDesc,
        projectAuthor: projectAuthor,
        projectLicense: projectLicense
      }
    );
    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath(`${projectName}/README.md`),
      {
        projectName: projectName,
        commander: commander
      }
    );
    this.fs.copy(
      this.templatePath('_.gitignore'),
      this.destinationPath(`${projectName}/.gitignore`)
    );
    this.fs.copy(
      this.templatePath('index.js'),
      this.destinationPath(`${projectName}/bin/index.js`)
    );
    this.fs.copy(
      this.templatePath('main.js'),
      this.destinationPath(`${projectName}/lib/main.js`)
    );
  }

  install() {
    const hasYarn = commandExists('yarn');
    this.installDependencies({
      npm: !hasYarn,
      bower: false,
      yarn: hasYarn,
      skipMessage: false
    });
  }

  end() {
    console.log('Everything is ready!');
  }
};
