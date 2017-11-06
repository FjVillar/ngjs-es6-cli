const getBoilerplate = (moduleName) => {
  const boilerplate =
    `import ${moduleName}Component from './${moduleName}.component';

const module = angular.module('${moduleName}')
    .component('${moduleName}', ${moduleName}Component).name;

export default module;

`;

  return {
    text: boilerplate,
    typeText: '.module.js',
  };
};

export default getBoilerplate;
