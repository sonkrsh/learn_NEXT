import { take, call, put, select, takeLatest } from "redux-saga/effects";
import { GET_TAGS, GET_PRODUCTS } from "./constants";
import request from "utils/request";
import { get } from "lodash";
import { handleRoute } from "pages/actions";

import { getTagsSuccess, getProductsSuccess } from "./actions";

function* getTags({ payload }) {
  try {
    const options = {
      url: "/admin/servicesTag",
      method: "get",
    };
    const response = yield call(request, options);

    yield put(handleRoute("detailPage"));
    yield put(getTagsSuccess(get(response, "data.data")));
  } catch (error) {}
}

function* getProducts({ payload }) {
  try {
    const options = {
      url: `/admin/filter-products/${get(payload, "car")}/${get(
        payload,
        "model"
      )}/${get(payload, "fuel")}/delhi`,
      method: "get",
    };
    const response = yield call(request, options);

    yield put(handleRoute("detailPage"));
    yield put(getProductsSuccess(get(response, "data.data")));
  } catch (error) {}
}

export default function* detailPageSaga() {
  yield takeLatest(GET_TAGS, getTags);
  yield takeLatest(GET_PRODUCTS, getProducts);
}
