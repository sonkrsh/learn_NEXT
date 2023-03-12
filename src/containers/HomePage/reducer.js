import produce from "immer";
import { GET_CAR_COMPANY_SUCCESS } from "./constants";
import { HYDRATE } from "next-redux-wrapper";

export const initialState = {
  cardata: [],
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case HYDRATE:
        if (action.payload.homePage) {
          draft.cardata = action.payload.homePage.cardata;
        }
        break;
      case GET_CAR_COMPANY_SUCCESS:
        draft.cardata = action.payload;
        break;
    }
  });

export default homePageReducer;
