import { HANDLE_DEMO_URL, HANDLE_DEMO_URL_SUCCESS } from "./constants";

export function handleDemoUrl(payload) {
  console.log("Acction");
  return {
    type: HANDLE_DEMO_URL,
    payload,
  };
}

export function handleDemoUrlSuccess(payload) {
  return {
    type: HANDLE_DEMO_URL_SUCCESS,
    payload,
  };
}
