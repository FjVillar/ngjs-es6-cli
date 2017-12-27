const getBoilerplate = moduleName => {
    const boilerplate = `
class States {
    constructor($stateProvider) {
        "ngInject";

        $stateProvider
            .state("root.${moduleName}", {
                url: "/${moduleName}",
                views: {
                    "layout@": {
                        component: "cms${moduleName}"
                    }
                }
            });
    }
}

export default States;
`;

    return {
        text: boilerplate,
        typeText: ".state.js"
    };
};

export default getBoilerplate;