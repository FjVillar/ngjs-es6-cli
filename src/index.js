#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import fs from 'fs';

import modulePathValidate from './modulePathValidation';
import getQuestions from './questions';
import getBoilerplates from './boilerplates';

// const CLI = require('clui');

clear();
console.log(chalk.blue(figlet.textSync('NgJs-CLI', { horizontalLayout: 'full' })));


const userArgument = process.argv[2];


const filePathValid = modulePathValidate(userArgument);

const questions = getQuestions(filePathValid);

// console.log(`filePathValid: ${JSON.stringify(filePathValid)}`);
// console.log(`questions: ${JSON.stringify(questions)}`);
// If the user has enter arguments it only recieve one questions to the inquirer

inquirer.prompt(questions).then((result) => {
  // console.log(result);
  const moduleName = result.moduleName ? result.moduleName : filePathValid.moduleName;

  // console.log(`fullPath: ${filePathValid.filePath}${moduleName}`);
  console.log(moduleName);
  const boilerPlates = getBoilerplates(result.additionalFiles, moduleName);
  console.log(boilerPlates);

  fs.mkdir(`${filePathValid.filePath}${moduleName}`, (createFolderError) => {
    if (createFolderError) {
      // WIP handleError()
    }
    boilerPlates.forEach((boilerplate) => {
      fs.writeFile(`${filePathValid.filePath}${moduleName}/${moduleName}${boilerplate.typeText}`, boilerplate.text, (createModuleError) => {
        if (createModuleError) {
          // WIP handleError()
        }
      });
    });
  });
}).catch((error) => {
  console.log(error);
});

