import React from "react";
import HomePage from "containers/HomePage/Loadable";
import { END } from "redux-saga";
import { wrapper } from "configureStore";
import { defaultAction } from "containers/HomePage/actions";

const index = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(defaultAction());
  await store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default index;
