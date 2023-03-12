import { call, put, takeLatest } from "redux-saga/effects";
import { GET_CAR_COMPANY } from "./constants";
import request from "utils/request";
import { get } from "lodash";
import { getCarCompanySuccess } from "./actions";

function* getCarCompany({ payload }) {
  try {
    const options = {
      url: "/admin/carCompany",
      method: "get",
    };
    const response = yield call(request, options);

    yield put(getCarCompanySuccess(get(response, "data.data")));
  } catch (error) {
    console.log("---error", error);
  }
}
export default function* homePageSaga() {
  yield takeLatest(GET_CAR_COMPANY, getCarCompany);
}
