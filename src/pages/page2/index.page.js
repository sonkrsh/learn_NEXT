/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { END } from "redux-saga";
import { compose } from "redux";
import { wrapper } from "configureStore";
import { handleApi } from "./actions";
import { useInjectReducer } from "../../utils/injectReducer";
import reducer from "./reducer";

import makeSelectpage2 from "./selectors";
import makeSelectpage1 from "../page1/selectors";
import { useRouter } from "next/router";
import Link from "next/link";

export function page2(props) {
  console.log("page 2 call", props);
  // useInjectReducer({ key: "page2", reducer });

  const router = useRouter();
  const {
    handleApiG,
    page2: { data },
    page1: { arrayValue },
  } = props;

  const handleClickNew = (e, path) => {
    e.preventDefault();

    if (path === "/page1") {
      console.log("I clicked on the About Page");
      // then you can:
      router.push(path);
    }
  };
  useEffect(() => {
    // handleApiG();
  }, []);

  return (
    <>
      <div>
        {data.map((item) => (
          <h3 key={item.name}>{item.name}</h3>
        ))}
        <button onClick={(e) => handleClickNew(e, "/page1")}>
          Go to Page1
        </button>
      </div>
      <h2>page 1 data</h2>
      {arrayValue.map((item) => (
        <h3 key={item.name}>{item.name}</h3>
      ))}
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store, s) => async (eee) => {
    useInjectReducer({ key: "page2", reducer, store });
    await store.dispatch(handleApi());
    await store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);

page2.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  page2: makeSelectpage2(),
  page1: makeSelectpage1(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleApiG: (evt) => dispatch(handleApi()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(page2);
