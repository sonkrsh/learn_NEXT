import produce from "immer";
import { GET_CAR_COMPANY_SUCCESS, GET_CAR_FUEL_SUCCESS } from "./constants";
import { HYDRATE } from "next-redux-wrapper";

export const initialState = {
  cardata: [],
  fuelData: [],
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case HYDRATE:
        if (action.payload.homePage) {
          draft.cardata = action.payload.homePage.cardata;
          draft.fuelData = action.payload.homePage.fuelData;
        }

        break;
      case GET_CAR_COMPANY_SUCCESS:
        draft.cardata = action.payload;
        break;
      case GET_CAR_FUEL_SUCCESS:
        draft.fuelData = action.payload;
        break;
    }
  });

export default homePageReducer;
