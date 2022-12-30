import { HANDLE_ROUTE } from "./constants";

export function handleRoute(payload) {
  return {
    type: HANDLE_ROUTE,
    payload,
  };
}
