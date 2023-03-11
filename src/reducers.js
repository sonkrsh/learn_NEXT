import { combineReducers } from "redux";
// REDUCER_IMPORT

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    // ADD_REDUCER
    ...injectedReducers,
  });

  return rootReducer;
}
