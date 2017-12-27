import getComponentBoilerPlate from './boilerplates/component';
import getModuleBoilerPlate from './boilerplates/module';
import getDataSrvBoilerPlate from './boilerplates/dataSrv';
import getStateBoilerPlate from './boilerplates/state';

const getBoilerPlates = (additionalFiles, moduleName) => {
  console.log(additionalFiles.length);

  const boilerPlates = [];

  // Fixed files: these two files are always created
  boilerPlates.push(getModuleBoilerPlate(moduleName));
  boilerPlates.push(getComponentBoilerPlate(moduleName));

  additionalFiles.forEach(elem => {
    switch(elem){
      case 'dataSrv':
        boilerPlates.push(getDataSrvBoilerPlate(moduleName));
        break;
      case 'state':
        boilerPlates.push(getStateBoilerPlate(moduleName));
        break;
      default: 
        break;
    }
  });

  return boilerPlates;
};
// additionalFiles.forEach((value) => {
//   console.log(value);
// });


export default getBoilerPlates;
