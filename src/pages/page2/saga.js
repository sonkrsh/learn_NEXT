import { takeLatest, put } from "redux-saga/effects";
import { HANDLE_API } from "./constants";
import { handleApiSuccess } from "./actions";
import { handleRoute } from "pages/actions";

function* handleApi({ payload }) {
  try {
    const res = yield fetch("http://localhost:4000/products");
    const data = yield res.json();

    yield put(handleRoute("page2"));
    yield put(handleApiSuccess(data));
  } catch (error) {}
}
export default function* page2Saga() {
  yield takeLatest(HANDLE_API, handleApi);
}
