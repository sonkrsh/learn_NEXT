/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { wrapper } from "configureStore";
import { defaultAction } from "./actions";
import makeSelectHomePage from "./selectors";

export function HomePage(props) {
  const {
    onclickHandler,
    homePage: { data },
  } = props;
  console.log("---data", data);
  return (
    <div>
      <button onClick={() => onclickHandler("click")}>click</button>
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
