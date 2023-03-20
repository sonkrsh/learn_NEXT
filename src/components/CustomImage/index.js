/* eslint-disable jsx-a11y/alt-text */
/**
 *
 * CustomImage
 *
 */

import React, { memo } from "react";
import Image from "next/image";

function CustomImage({ url, width, height, alt, style, is_shown_in_mobile }) {
  return (
    <Image
      src={
        url ||
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
      }
      layout={!width && "fill"}
      width={width && width}
      height={height && height}
      quality={40}
      alt={alt || "__Test_"}
      // placeholder="blur"
      className={is_shown_in_mobile ? "" : "img_not_shown_in_mobile"}
      priority
      style={style}
    />
  );
}

CustomImage.propTypes = {};

export default memo(CustomImage);
