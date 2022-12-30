/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import pick from "lodash/pick";
import createReducer from "reducers";
import rootSaga from "./sagas";

export default function configureStore(initialState = {}, history) {
  let composeEnhancers = compose;
  const reduxSagaMonitorOptions = {};

  if (process.env.NODE_ENV !== "production" && typeof window === "object") {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  const reducer = (state, action) => {
    if (action.type === HYDRATE) {
      let nextState = null;
      if (action.payload) {
        const currentRoute = pick(action.payload, [action.payload.route.route]);
        nextState = {
          ...state,
          ...currentRoute,
        };
      } else {
        nextState = {
          ...state,
          ...action.payload,
        };
      }

      // if (state.count.count) nextState.count.count = state.count.count // preserve count value on client side navigation
      return nextState;
    } else {
      return createReducer()(state, action);
    }
  };
  const store = createStore(reducer, composeEnhancers(...enhancers));
  store.sagaTask = sagaMiddleware.run(rootSaga);

  // Extensions
  // store.runSaga = sagaMiddleware.run;
  // store.injectedReducers = {}; // Reducer registry
  // store.injectedSagas = {}; // Saga registry

  // if (module.hot) {
  //   module.hot.accept("./reducers", () => {
  //     store.replaceReducer(createReducer(store.injectedReducers));
  //   });
  // }

  return store;
}

export const wrapper = createWrapper(configureStore, {
  // serializeState: (state) => JSON.stringify(state),
  // deserializeState: (state) => typeof state != "object" && JSON.parse(state),
});
