import produce from "immer";
import {
  GET_TAGS_SUCCESS,
  GET_PRODUCTS_SUCCESS,
  ADD_TO_CART,
  GET_LOCAL_STORAGE_DATA,
  GET_LOCAL_STORAGE_DATA_SUCCESS,
} from "./constants";
import { HYDRATE } from "next-redux-wrapper";
import localForage from "localforage";
import { isEmpty } from "lodash";
import { getLocalStorageData } from "./actions";

export const initialState = {
  tags: [],
  products: [],
  cartData: [],
};

/* eslint-disable default-case, no-param-reassign */
const detailPageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case HYDRATE:
        if (action.payload.detailPage) {
          draft.tags = action.payload.detailPage.tags;
          draft.products = action.payload.detailPage.products;
        }
        break;

      case GET_TAGS_SUCCESS:
        draft.tags = action.payload;
        break;
      case GET_PRODUCTS_SUCCESS:
        draft.products = action.payload;
        break;
      case ADD_TO_CART:
        if (isEmpty(state.cartData)) {
          localForage.setItem("products", action.payload);
          draft.cartData = action.payload;
        } else {
          localForage.setItem("products", [
            ...state.cartData,
            ...action.payload,
          ]);
          draft.cartData = [...state.cartData, ...action.payload];
        }
        getLocalStorageData();
        break;
      case GET_LOCAL_STORAGE_DATA_SUCCESS:
        draft.cartData = action.payload;
        break;
    }
  });

export default detailPageReducer;
