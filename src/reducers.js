import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import History from "./utils/history";

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(History),
    ...injectedReducers,
  });

  return rootReducer;
}
