import produce from "immer";
import { DEFAULT_ACTION, DEFAULT_ACTION_SUCCESS } from "./constants";

export const initialState = {
  data: "",
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case DEFAULT_ACTION_SUCCESS:
        draft.data = action.payload;
        break;
      case DEFAULT_ACTION:
        break;
    }
  });

export default homePageReducer;
