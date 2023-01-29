import produce from "immer";
import { HANDLE_API_SUCCESSS } from "./constants";
import { HYDRATE } from "next-redux-wrapper";
export const initialState = {
  data: [],
};

/* eslint-disable default-case, no-param-reassign */
const page2Reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case HANDLE_API_SUCCESSS:
        draft.data = action.payload;
        break;
    }
  });

export default page2Reducer;
