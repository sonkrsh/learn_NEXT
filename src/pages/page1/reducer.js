import produce from "immer";
import { HANDLE_DEMO_URL, HANDLE_DEMO_URL_SUCCESS } from "./constants";

export const initialState = {
  demoValue: 0,
  arrayValue: [],
};

/* eslint-disable default-case, no-param-reassign */
const page1Reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case HANDLE_DEMO_URL_SUCCESS:
        draft.demoValue += 1;
        draft.arrayValue = action.payload;
        break;
    }
  });

export default page1Reducer;
