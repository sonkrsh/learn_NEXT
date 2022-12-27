/*
 *
 * One reducer
 *
 */
import produce from "immer";
import { DEFAULT_ACTION } from "./constants";

export const initialState = {
  data: [],
};

/* eslint-disable default-case, no-param-reassign */
const oneReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        draft.data = [{ name: "sourab" }];
        console.log("reducer ccall");
        break;
    }
  });

export default oneReducer;
