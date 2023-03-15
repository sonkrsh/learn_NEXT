import { call, put, takeLatest } from "redux-saga/effects";
import { GET_CAR_COMPANY } from "./constants";
import request from "utils/request";
import { get } from "lodash";
import { getCarCompanySuccess, getCarFuelSuccess } from "./actions";

function* getCarCompany({ payload }) {
  try {
    const options = {
      url: "/admin/carCompany",
      method: "get",
    };
    const response = yield call(request, options);

    const options2 = {
      url: "/admin/carFuel",
      method: "get",
    };
    const response2 = yield call(request, options2);

    yield put(getCarCompanySuccess(get(response, "data.data")));
    yield put(getCarFuelSuccess(get(response2, "data.data")));
  } catch (error) {
    console.log("---error", error);
  }
}
export default function* homePageSaga() {
  yield takeLatest(GET_CAR_COMPANY, getCarCompany);
}
