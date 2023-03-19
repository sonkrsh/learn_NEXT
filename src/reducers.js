import { combineReducers } from "redux";
import route from "pages/reducer";
import homePage from "containers/HomePage/reducer";
import detailPage from "containers/DetailPage/reducer";
// REDUCER_IMPORT

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    route,
    homePage,
    detailPage,
    // ADD_REDUCER

    ...injectedReducers,
  });

  return rootReducer;
}
