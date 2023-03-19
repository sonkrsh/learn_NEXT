import { all } from "redux-saga/effects";
import homePageSaga from "containers/HomePage/saga";
import detailPageSaga from "containers/DetailPage/saga";
// SAGA_IMPORT

function* rootSaga() {
  yield all([
    homePageSaga(),
    detailPageSaga(),
    // ADD_SAGA
  ]);
}

export default rootSaga;
