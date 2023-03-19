import {
  GET_TAGS,
  GET_TAGS_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
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
