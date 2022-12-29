/*
 *
 * One reducer
 *
 */

import produce from "immer";
import { DEFAULT_ACTION } from "./constants";

export const initialState = {
  data: 0,
};

/* eslint-disable default-case, no-param-reassign */
const oneReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEFAULT_ACTION:
      console.log("==>>", state.data);
      return Object.assign({}, state, {
        data: state.data + 1,
      });
    default:
      return state;
  }
};

export default oneReducer;
