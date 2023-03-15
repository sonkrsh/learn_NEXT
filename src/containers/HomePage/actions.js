import {
  GET_CAR_COMPANY,
  GET_CAR_COMPANY_SUCCESS,
  GET_CAR_FUEL_SUCCESS,
} from "./constants";

export function getCarCompany(payload) {
  return {
    type: GET_CAR_COMPANY,
    payload,
  };
}
export function getCarCompanySuccess(payload) {
  return {
    type: GET_CAR_COMPANY_SUCCESS,
    payload,
  };
}

export function getCarFuelSuccess(payload) {
  return {
    type: GET_CAR_FUEL_SUCCESS,
    payload,
  };
}
