/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

import DetailPage from "containers/DetailPage/Loadable";

const page = () => {
  return (
    <>
      <DetailPage />
    </>
  );
};

export async function getServerSideProps(context) {
  console.log("--context", context.query);
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default page;
