
import additionalFilesQuestion from './questions/additionalFiles';
import moduleNameQuestion from './questions/moduleName';


const getQuestions = (filePathValid) => {
  const questions = [];

  if (filePathValid.exists === false) {
    questions.push(moduleNameQuestion);
  }
  questions.push(additionalFilesQuestion);
  return questions;
};

export default getQuestions;
