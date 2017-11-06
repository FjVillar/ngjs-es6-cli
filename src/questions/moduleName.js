import modulePathValidate from '../modulePathValidation';

const moduleNameQuestion = {
  name: 'moduleName',
  type: 'input',
  message: 'Enter your new module name or a valid path+modulename',
  validate: (value) => {
    const filePathValid = modulePathValidate(value);
    console.log(`filePathValid: ${JSON.stringify(filePathValid)}`);
    if (filePathValid.exists === true || filePathValid.filePath === './') {
      return true;
    }
    return 'Please enter a valid module name';
  },
};

export default moduleNameQuestion;
