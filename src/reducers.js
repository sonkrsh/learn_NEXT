import { combineReducers } from "redux";
import page1 from "pages/page1/reducer";
// REDUCER_IMPORT

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    page1,
    // ADD_REDUCER
    ...injectedReducers,
  });

  return rootReducer;
}
