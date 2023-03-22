import { take, call, put, select, takeLatest } from "redux-saga/effects";
import { GET_TAGS, GET_PRODUCTS, GET_LOCAL_STORAGE_DATA } from "./constants";
import request from "utils/request";
import { get } from "lodash";
import { handleRoute } from "pages/actions";
import localForage from "localforage";

import {
  getTagsSuccess,
  getProductsSuccess,
  getLocalStorageDataSuccess,
} from "./actions";

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

function* getLocalStorageData({ payload }) {
  try {
    const previousData = yield localForage.getItem("products");
    yield put(getLocalStorageDataSuccess(previousData));
  } catch (error) {}
}

export default function* detailPageSaga() {
  yield takeLatest(GET_TAGS, getTags);
  yield takeLatest(GET_PRODUCTS, getProducts);
  yield takeLatest(GET_LOCAL_STORAGE_DATA, getLocalStorageData);
}
