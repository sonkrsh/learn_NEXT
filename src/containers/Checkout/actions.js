import {
  DEFAULT_ACTION,
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
} from "./constants";

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function userRegister(payload) {
  return {
    type: USER_REGISTER,
    payload,
  };
}
export function userRegisterSuccess(payload) {
  return {
    type: USER_REGISTER_SUCCESS,
    payload,
  };
}
