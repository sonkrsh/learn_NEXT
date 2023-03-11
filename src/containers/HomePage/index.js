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
    onclickHandler,
    homePage: { data, servervalue },
  } = props;

  return (
    <div>
      {/* {data}
      <br></br>
      {servervalue}
      <button onClick={() => onclickHandler("click")}>click</button> */}
      <LandingPageFirstSection />
    </div>
  );
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onclickHandler: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onclickHandler: (evt) => dispatch(defaultAction(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(HomePage);
