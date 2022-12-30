import { take, call, put, select, takeLatest } from "redux-saga/effects";
import { HANDLE_DEMO_URL } from "./constants";
import { handleDemoUrlSuccess } from "./actions";
import { handleRoute } from "pages/actions";
// import request from "../../utils/request";
// import axios from "axios";

function* handleDemo({ payload }) {
  try {
    const res = yield fetch("http://localhost:4000/products");
    // const res2 = yield fetch("http://localhost:8080/v1/admin/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   credentials: "include",
    //   body: JSON.stringify({
    //     email: "newZF@gmail.com",
    //     password: "hello",
    //   }),
    // });
    const data = yield res.json();
    // const data2 = yield res2.json();
    // console.log("===>>>aaa", data2);

    yield put(handleRoute("page1"));
    yield put(handleDemoUrlSuccess(data));
  } catch (error) {}
}

export default function* page1Saga() {
  yield takeLatest(HANDLE_DEMO_URL, handleDemo);
}
