import { take, call, put, select, takeLatest } from "redux-saga/effects";
import { HANDLE_DEMO_URL } from "./constants";
import { handleDemoUrlSuccess } from "./actions";
// import request from "../../utils/request";
// import axios from "axios";

function* handleDemo({ payload }) {
  try {
    const res = yield fetch("https://jsonplaceholder.typicode.com/users");
    const data = yield res.json();

    yield put(handleDemoUrlSuccess(data));
  } catch (error) {}
}

export default function* page1Saga() {
  yield takeLatest(HANDLE_DEMO_URL, handleDemo);
}
