import { all } from "redux-saga/effects";
import page1Saga from "../src/pages/page1/saga";

function* rootSaga() {
  yield all([page1Saga()]);
}

export default rootSaga;
