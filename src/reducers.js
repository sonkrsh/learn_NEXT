import { combineReducers } from "redux";
import route from "pages/reducer";
import homePage from "containers/HomePage/reducer";
import detailPage from "containers/DetailPage/reducer";
import checkout from "containers/Checkout/reducer";
// REDUCER_IMPORT

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    route,
    homePage,
    detailPage,
    checkout,
    // ADD_REDUCER

    ...injectedReducers,
  });

  return rootReducer;
}
