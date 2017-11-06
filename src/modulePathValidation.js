import fs from 'fs';

const modulePathValidation = (modulePath) => {
  const modulePathSanitize = modulePath && modulePath.indexOf('/') === 0 ? modulePath.substring(1) : modulePath;

  let folders = [];
  // Split the folders to check if it's a path or only a new module
  if (modulePathSanitize !== undefined) {
    folders = modulePathSanitize.split('/');
  }
  // we delete the last one
  const moduleName = folders[folders.length - 1];

  folders.pop();

  if (folders.length > 0) {
    const foldersWithoutLast = folders.join('/');

    if (fs.existsSync(foldersWithoutLast)) {
      return {
        filePath: `./${foldersWithoutLast}/`,
        moduleName,
        exists: true,
      };
    }
    return {
      filePath: `./${foldersWithoutLast}/`,
      moduleName,
      exists: false,
    };
  }
  return {
    filePath: './',
    exists: false,
  };
};

export default modulePathValidation;
