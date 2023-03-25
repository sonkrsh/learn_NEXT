/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import makeSelectDetailPage from "containers/DetailPage/selectors";

import makeSelectCheckout from "./selectors";
import SideCart from "components/SideCart";

import { useRouter } from "next/router";

import { getLocalStorageData } from "containers/DetailPage/actions";
import { isEmpty, toNumber, toString, get } from "lodash";

import { generateRecaptcha, sendOTP, verifyOTP } from "utils/firebase";
import TextField from "@mui/material/TextField";
import Otp from "components/Otp";

export function Checkout(props) {
  const router = useRouter();

  const {
    getLocalStorageData,

    detailPage: { cartData },
  } = props;

  useEffect(() => {
    getLocalStorageData([]);
  }, []);

  const handleSubmitOTP = (otp) => {
    console.log("----", otp);
    verifyOTP(otp);
  };

  const handleContinue = async (e) => {
    const event = document.getElementById("phone_no");
    const pattern = /^\d{10}$/;
    const phone_no = toNumber(event["value"]);
    if (!pattern.test(phone_no)) {
      alert("enter correct No");
      return false;
    }

    const isExists = document.getElementById("otp_container_nested");

    if (!isExists) {
      try {
        const OTPresult = await sendOTP(phone_no);
        createRoot(document.getElementById("otp_container")).render(
          <Otp number={toString(phone_no)} handleSubmitOTP={handleSubmitOTP} />
        );
      } catch (error) {
        alert(error);
      }
    }
  };

  useEffect(() => {
    generateRecaptcha();
  }, []);

  return (
    <div className="row">
      <div className="col-sm-12 col-lg-8 col-xl-8">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6">
                <input
                  type="number"
                  className="form-control"
                  id="phone_no"
                  placeholder="Enter Number"
                />
              </div>
              <div className="col-sm-6">
                <button
                  id="recaptcha-container"
                  onClick={handleContinue}
                  type="submit"
                  className="btn btn-primary"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
          <div id="otp_container"></div>
        </div>
      </div>

      <div className="d-none d-lg-block col-sm-0 col-lg-4 col-xl-4">
        <SideCart cartData={cartData} />
      </div>
    </div>
  );
}

Checkout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  getLocalStorageData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  checkout: makeSelectCheckout(),
  detailPage: makeSelectDetailPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getLocalStorageData: (evt) => dispatch(getLocalStorageData(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Checkout);
