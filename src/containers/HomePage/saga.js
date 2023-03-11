import { take, call, put, select, takeLatest } from "redux-saga/effects";
import { DEFAULT_ACTION } from "./constants";
import request from "utils/request";
import { defaultActionSucess } from "./actions";
function* handleClick({ payload }) {
  try {
    console.log("----payload saga", payload);
    const guess = Math.random();
    yield put(defaultActionSucess("ccall from saga" + guess, 1));
  } catch (error) {}
}
export default function* homePageSaga() {
  yield takeLatest(DEFAULT_ACTION, handleClick);
}
