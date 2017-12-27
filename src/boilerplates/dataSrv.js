const getBoilerplate = (moduleName) => {
    const boilerplate =
      `
class ${moduleName}DataSrv {
    constructor($http) {
        'ngInject';

        this.$http = $http;
    }
}

export default PortfolioPackCodeStepDataSrv;
  `;
    return {
      text: boilerplate,
      typeText: '.dataSrv.js',
    };
  };
  
export default getBoilerplate;
  