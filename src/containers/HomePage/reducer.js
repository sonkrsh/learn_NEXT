import produce from "immer";
import { DEFAULT_ACTION, DEFAULT_ACTION_SUCCESS } from "./constants";
import { HYDRATE } from "next-redux-wrapper";

export const initialState = {
  data: "",
  servervalue: 0,
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case HYDRATE:
        console.log("---action", action);
        if (action.payload.homePage) {
          draft.data = action.payload.homePage.data;
          draft.servervalue = action.payload.homePage.servervalue;
        }
        break;
      case DEFAULT_ACTION_SUCCESS:
        draft.data = action.payload;
        draft.servervalue = action.payload2;
        break;
      case DEFAULT_ACTION:
        break;
    }
  });

export default homePageReducer;
