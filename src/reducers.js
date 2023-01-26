import { combineReducers } from "redux";
import route from "pages/reducer";
import page1 from "pages/page1/reducer";
import page2 from "pages/page2/reducer";
// REDUCER_IMPORT

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    route,
    // page1,
    // page2,
    // ADD_REDUCER
    ...injectedReducers,
  });

  return rootReducer;
}
