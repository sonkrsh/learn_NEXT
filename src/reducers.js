import { combineReducers } from "redux";
import count from "src/pages/reducer";

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    one: count,
    ...injectedReducers,
  });

  return rootReducer;
}
