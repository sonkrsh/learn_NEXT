import {
  GET_TAGS,
  GET_TAGS_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  ADD_TO_CART,
  GET_LOCAL_STORAGE_DATA,
  GET_LOCAL_STORAGE_DATA_SUCCESS,
} from "./constants";

export function getTags(payload) {
  return {
    type: GET_TAGS,
    payload,
  };
}
export function getTagsSuccess(payload) {
  return {
    type: GET_TAGS_SUCCESS,
    payload,
  };
}
export function getProducts(payload) {
  return {
    type: GET_PRODUCTS,
    payload,
  };
}
export function getProductsSuccess(payload) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload,
  };
}

export function addToCart(payload) {
  return {
    type: ADD_TO_CART,
    payload,
  };
}
export function getLocalStorageData(payload) {
  return {
    type: GET_LOCAL_STORAGE_DATA,
    payload,
  };
}
export function getLocalStorageDataSuccess(payload) {
  return {
    type: GET_LOCAL_STORAGE_DATA_SUCCESS,
    payload,
  };
}
