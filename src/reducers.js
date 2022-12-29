import { combineReducers } from "redux";
import count from "pages/reducer";
// REDUCER_IMPORT

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    one: count,
    // ADD_REDUCER
    ...injectedReducers,
  });

  return rootReducer;
}
