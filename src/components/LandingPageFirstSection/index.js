/* eslint-disable jsx-a11y/alt-text */

import React, { memo } from "react";
import CustomImage from "components/CustomImage";
import LandingPageFirstSectionStyle from "./LandingPageFirstSectionStyle.module.scss";

function LandingPageFirstSection() {
  return (
    <>
      <CustomImage />
      <div className={LandingPageFirstSectionStyle.content}>hello</div>
    </>
  );
}

LandingPageFirstSection.propTypes = {};

export default memo(LandingPageFirstSection);
