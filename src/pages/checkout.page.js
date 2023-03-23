import React from "react";
import Checkout from "containers/Checkout/Loadable";
import { END } from "redux-saga";
import { wrapper } from "configureStore";
import { getCarCompany } from "containers/HomePage/actions";

const CheckoutPage = () => {
  return <Checkout />;
};

export default CheckoutPage;
