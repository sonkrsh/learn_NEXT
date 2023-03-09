import { all } from "redux-saga/effects";
import page1Saga from "../src/pages/page1/saga";
import page2Saga from "../src/pages/page2/saga";
// SAGA_IMPORT

function* rootSaga() {
  yield all([
    page1Saga(),
    page2Saga(),
    // ADD_REDUCER
  ]);
}

export default rootSaga;
