import produce from "immer";
import { HANDLE_ROUTE } from "./constants";

export const initialState = {
  route: "",
};

const page1Reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case HANDLE_ROUTE:
        draft.route = action.payload;
        break;
    }
  });

export default page1Reducer;
