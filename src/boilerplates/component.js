const getBoilerplate = (moduleName) => {
  const boilerplate =
    `
const ${moduleName}Component = {
    bindings: {},
    template: \`\`,
    controller: class ${moduleName}Ctrl {
    }
}

export default ${moduleName}Component;
`;
  return {
    text: boilerplate,
    typeText: '.component.js',
  };
};

export default getBoilerplate;
