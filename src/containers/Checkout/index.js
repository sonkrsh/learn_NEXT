/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import makeSelectDetailPage from "containers/DetailPage/selectors";

import makeSelectCheckout from "./selectors";
import SideCart from "components/SideCart";

import { getLocalStorageData } from "containers/DetailPage/actions";
import { toNumber, toString, get, slice, join } from "lodash";

import { generateRecaptcha, sendOTP, verifyOTP } from "utils/firebase";
import Otp from "components/Otp";
import Message from "components/Message";

import CustomButton from "components/CustomButton";
import { userRegister } from "./actions";

export function Checkout(props) {
  const [isOTPContainerSeen, setisOTPContainerSeen] = useState(false);

  const {
    getLocalStorageData,
    handleUserRegister,
    detailPage: { cartData },
  } = props;

  useEffect(() => {
    getLocalStorageData([]);
  }, []);

  const handleSubmitOTP = async (otp) => {
    try {
      const value = await verifyOTP(otp);
      const combineNo = get(value, "user.phoneNumber");

      const contact_no = join(slice(combineNo, 3, 13), "");
      const country_code = join(slice(combineNo, 1, 3), "");

      handleUserRegister({ country_code, contact_no });
    } catch (error) {
      alert(error);
    }
  };

  const handleContinue = async (e) => {
    const event = document.getElementById("phone_no");
    const pattern = /^\d{10}$/;
    const phone_no = toNumber(event["value"]);
    if (!pattern.test(phone_no)) {
      alert("enter correct No");
      return false;
    }

    try {
      const OTPresult = await sendOTP(phone_no);
      setisOTPContainerSeen(true);
    } catch (error) {
      alert(error);
    }
  };

  const handleUnmountRoot = () => {
    setisOTPContainerSeen(false);
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
                  onChange={handleUnmountRoot}
                />
              </div>
              <div className="col-sm-6">
                <CustomButton
                  label="Continue"
                  onClickHandler={handleContinue}
                />
              </div>
            </div>
          </div>

          <div id="otp_container">
            {isOTPContainerSeen && (
              <Otp
                number={toString(document.getElementById("phone_no")["value"])}
                handleSubmitOTP={handleSubmitOTP}
              />
            )}
          </div>
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
    handleUserRegister: (evt) => dispatch(userRegister(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Checkout);
