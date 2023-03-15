/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { defaultAction } from "./actions";
import makeSelectHomePage from "./selectors";
import LandingPageFirstSection from "components/LandingPageFirstSection";
export function HomePage(props) {
  const {
    homePage: { cardata },
  } = props;


  return (
    <div>
      {/* {data}
      <br></br>
      {servervalue}
      <button onClick={() => onclickHandler("click")}>click</button> */}
      <LandingPageFirstSection cardata={cardata} />
    </div>
  );
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(HomePage);
