/* eslint-disable jsx-a11y/alt-text */
/**
 *
 * CustomImage
 *
 */

import React, { memo } from "react";
import Image from "next/image";

function CustomImage() {
  return (
    <Image
      src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
      layout="fill"
      // width={100}
      // height={100}
      quality={40}
      // placeholder="blur"
      className="img_not_shown_in_mobile"
      priority
    />
  );
}

CustomImage.propTypes = {};

export default memo(CustomImage);
