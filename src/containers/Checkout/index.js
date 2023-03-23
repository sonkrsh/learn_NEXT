/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import makeSelectDetailPage from "containers/DetailPage/selectors";

import makeSelectCheckout from "./selectors";
import SideCart from "components/SideCart";

import { useRouter } from "next/router";

import { getLocalStorageData } from "containers/DetailPage/actions";
import { isEmpty } from "lodash";

export function Checkout(props) {
  const router = useRouter();

  const {
    getLocalStorageData,

    detailPage: { cartData },
  } = props;

  useEffect(() => {
    getLocalStorageData([]);
  }, []);

  return (
    <div className="row">
      <div className="col-sm-12 col-lg-8 col-xl-8">
        <h1>hello</h1>
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
