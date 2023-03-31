import { take, call, put, select, takeLatest } from "redux-saga/effects";

import request from "utils/request";
import { get } from "lodash";
import { USER_REGISTER } from "./constants";
import showSnackbar from "utils/showSnackbar";
import Message from "components/Message";

function* handleUserExistsOrNot({ payload }) {
  try {
    const options = {
      url: "/admin/register-web",
      method: "post",
      data: payload,
    };

    const value = yield call(request, options);

    showSnackbar("Success");
  } catch (error) {}
}
export default function* checkoutSaga() {
  yield takeLatest(USER_REGISTER, handleUserExistsOrNot);
}
