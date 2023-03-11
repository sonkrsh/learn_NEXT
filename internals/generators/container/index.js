/**
 * Container Generator
 */

const componentExists = require("../utils/componentExists");

module.exports = {
  description: "Add a container component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Form",
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? "A component or container with this name already exists"
            : true;
        }

        return "The name is required";
      },
    },

    {
      type: "confirm",
      name: "wantActionsAndReducer",
      default: true,
      message:
        "Do you want an actions/constants/selectors/reducer tuple for this container?",
    },
    {
      type: "confirm",
      name: "wantSaga",
      default: true,
      message: "Do you want sagas for asynchronous flows? (e.g. fetching data)",
    },
    {
      type: "confirm",
      name: "wantLoadable",
      default: true,
      message: "Do you want to load resources asynchronously?",
    },
  ],
  actions: (data) => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: "add",
        path: "../../src/containers/{{camelCase name}}/index.page.js",
        templateFile: "./container/index.js.hbs",
        abortOnFail: true,
      },
    ];

    if (data.wantActionsAndReducer) {
      // Actions
      actions.push({
        type: "add",
        path: "../../src/containers/{{properCase name}}/actions.js",
        templateFile: "./container/actions.js.hbs",
        abortOnFail: true,
      });
      // Constants
      actions.push({
        type: "add",
        path: "../../src/containers/{{properCase name}}/constants.js",
        templateFile: "./container/constants.js.hbs",
        abortOnFail: true,
      });

      // Selectors
      actions.push({
        type: "add",
        path: "../../src/containers/{{properCase name}}/selectors.js",
        templateFile: "./container/selectors.js.hbs",
        abortOnFail: true,
      });

      // Reducer
      actions.push({
        type: "add",
        path: "../../src/containers/{{properCase name}}/reducer.js",
        templateFile: "./container/reducer.js.hbs",
        abortOnFail: true,
      });

      actions.push({
        type: "modify",
        pattern: /(\/\/ ADD_REDUCER)/g,
        path: "../../src/reducers.js",
        templateFile: "./container/addreducer.hbs",
      });
      actions.push({
        type: "modify",
        pattern: /(\/\/ REDUCER_IMPORT)/g,
        path: "../../src/reducers.js",
        templateFile: "./container/reducerimport.hbs",
      });
    }

    // Sagas
    if (data.wantSaga) {
      actions.push({
        type: "add",
        path: "../../src/containers/{{properCase name}}/saga.js",
        templateFile: "./container/saga.js.hbs",
        abortOnFail: true,
      });
      actions.push({
        type: "modify",
        pattern: /(\/\/ ADD_SAGA)/g,
        path: "../../src/sagas.js",
        templateFile: "./container/addsaga.hbs",
      });
      actions.push({
        type: "modify",
        pattern: /(\/\/ SAGA_IMPORT)/g,
        path: "../../src/sagas.js",
        templateFile: "./container/sagaimport.hbs",
      });
    }

    if (data.wantLoadable) {
      actions.push({
        type: "add",
        path: "../../src/containers/{{properCase name}}/Loadable.js",
        templateFile: "./component/loadable.js.hbs",
        abortOnFail: true,
      });
    }

    actions.push({
      type: "prettify",
      path: "/containers/",
    });

    return actions;
  },
};
