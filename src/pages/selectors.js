import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the one state domain
 */

const selectOneDomain = (state) => state.one || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by One
 */

const makeSelectOne = () => {
  console.log("Calll");
  return createSelector(selectOneDomain, (substate) => substate);
};

export default makeSelectOne;
export { selectOneDomain };
