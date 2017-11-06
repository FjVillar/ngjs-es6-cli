import getComponentBoilerPlate from './boilerplates/component';
import getModuleBoilerPlate from './boilerplates/module';

const getBoilerPlates = (additionalFiles, moduleName) => {
  console.log(additionalFiles);

  // To-Do actually module boilerplate its more dinamic than compontent boilerplate
  //  in the near future we have to handle that now its just scoped to component and module
  const moduleBoilerplate = getModuleBoilerPlate(moduleName);
  const componentBoilerplate = getComponentBoilerPlate(moduleName);

  return [
    moduleBoilerplate,
    componentBoilerplate,
  ];
};
// additionalFiles.forEach((value) => {
//   console.log(value);
// });


export default getBoilerPlates;
