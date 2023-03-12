import * as Yup from "yup";

const phoneRegExp = /^[0-9]+$/;

export const carModelFuelFormSchema = Yup.object().shape({
  car: Yup.string().required("car is required"),
  model: Yup.string().required("model is required"),
  fuel: Yup.string().required("model is required"),
});
