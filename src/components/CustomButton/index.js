/**
 *
 * CustomButton
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function CustomButton({ variant, label, onClickHandler, loading }) {
  return (
    <>
      <button
        id="recaptcha-container"
        onClick={onClickHandler}
        type="submit"
        className={variant || "btn btn-primary"}
      >
        {loading && (
          <span
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
        )}
        {label || "BUTTON"}
      </button>
    </>
  );
}

CustomButton.propTypes = {};

export default memo(CustomButton);
