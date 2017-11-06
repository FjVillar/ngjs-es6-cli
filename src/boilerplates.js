import getModuleBoilerPlate from './boilerplates/module';

const getBoilerPlates = (additionalFiles, moduleName) => {
  console.log(additionalFiles);

  return { moduleBoilerplate: getModuleBoilerPlate(moduleName) };
  // additionalFiles.forEach((value) => {
  //   console.log(value);
  // });
}

export default getBoilerPlates;