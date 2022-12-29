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
const oneReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        draft.data += 1;
        break;
    }
  });

export default oneReducer;
