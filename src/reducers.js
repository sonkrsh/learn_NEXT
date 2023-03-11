import { combineReducers } from "redux";
import homePage from "containers/HomePage/reducer";
// REDUCER_IMPORT

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    homePage,
    // ADD_REDUCER

    ...injectedReducers,
  });

  return rootReducer;
}
