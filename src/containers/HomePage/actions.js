import { DEFAULT_ACTION, DEFAULT_ACTION_SUCCESS } from "./constants";

export function defaultAction(payload) {
  return {
    type: DEFAULT_ACTION,
    payload,
  };
}
export function defaultActionSucess(payload, payload2) {
  return {
    type: DEFAULT_ACTION_SUCCESS,
    payload,
    payload2,
  };
}
