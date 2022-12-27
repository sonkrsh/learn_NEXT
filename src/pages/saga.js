import { take, call, put, select, takeLatest } from "redux-saga/effects";
import { DEFAULT_ACTION } from "./constants";
// Individual exports for testing

function* handleCreateCorporate() {
  console.log("saga cacll");
}
export default function* oneSaga() {
  yield takeLatest(DEFAULT_ACTION, handleCreateCorporate);
}
