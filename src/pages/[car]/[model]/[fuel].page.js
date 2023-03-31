/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { getTags, getProducts } from "containers/DetailPage/actions";
import { END } from "redux-saga";
import { get } from "lodash";
import { wrapper } from "configureStore";
import DetailPage from "containers/DetailPage/Loadable";

const page = () => {
  return (
    <>
      <DetailPage />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    console.log("---cacll");
    await store.dispatch(getTags());
    await store.dispatch(getProducts(get(context, "query")));
    await store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);

export default page;
