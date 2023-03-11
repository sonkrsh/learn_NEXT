import { all } from "redux-saga/effects";
import homePageSaga from "containers/HomePage/saga";
// SAGA_IMPORT

function* rootSaga() {
  yield all([
    homePageSaga(),
    // ADD_SAGA
  ]);
}

export default rootSaga;
