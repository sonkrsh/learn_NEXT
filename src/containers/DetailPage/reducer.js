import produce from "immer";
import { GET_TAGS_SUCCESS, GET_PRODUCTS_SUCCESS } from "./constants";
import { HYDRATE } from "next-redux-wrapper";

export const initialState = {
  tags: [],
  products: [],
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
    }
  });

export default detailPageReducer;
