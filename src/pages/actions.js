/*
 *
 * One actions
 *
 */

import { DEFAULT_ACTION, DEFAULT_ACTION_UPDATE } from "./constants";

export function defaultAction() {
  console.log("call action");
  return {
    type: DEFAULT_ACTION,
  };
}

export function defaultActionUpdate() {
  console.log("call action update");
  return {
    type: DEFAULT_ACTION_UPDATE,
  };
}
