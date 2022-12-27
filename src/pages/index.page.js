/* eslint-disable react-hooks/rules-of-hooks */
import React, { memo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// import { addToCart } from "../redux/action";

import { useInjectSaga } from "../utils/injectSaga";
import { useInjectReducer } from "../utils/injectReducer";
import reducer from "./reducer";
import { compose } from "redux";
import makeSelectOne from "./selectors";
import { useRouter } from "next/router";

import saga from "./saga";
import { defaultAction } from "./actions";
function index(props) {
  const { newGame } = props;

  useInjectReducer({ key: "one", reducer });
  useInjectSaga({ key: "one", saga });
  console.log("call propps", props);

  const product = {
    name: "i Phone",
    category: "mobile",
    price: 10000,
    color: "red",
  };
  return (
    <div className="App">
      <h1>hello</h1>
      <button
        onClick={() => {
          newGame();
          // props.router.push("/mine");
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  one: makeSelectOne(),
});

function mapDispatchToProps(dispatch) {
  return {
    newGame: (evt) => dispatch(defaultAction()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(index);
