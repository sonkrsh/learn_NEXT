/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import createReducer from "reducers";

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
      const nextState = {
        ...state,
        ...action.payload,
      };
      // if (state.count.count) nextState.count.count = state.count.count // preserve count value on client side navigation
      return nextState;
    } else {
      return createReducer()(state, action);
    }
  };

  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(...enhancers)
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  // if (module.hot) {
  //   module.hot.accept("./reducers", () => {
  //     store.replaceReducer(createReducer(store.injectedReducers));
  //   });
  // }

  return store;
}

export const wrapper = createWrapper(configureStore, {
  serializeState: (state) => JSON.stringify(state),
  deserializeState: (state) => JSON.parse(state),
});
