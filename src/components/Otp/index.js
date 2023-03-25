/**
 *
 * Otp
 *
 */

import React, { memo, useEffect, useRef } from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Otp({ number, handleSubmitOTP }) {
  const inputNodesContainer = useRef(null);
  const OTPInput = () => {
    const inputs = document.querySelectorAll("#otp > *[id]");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("keydown", (event) => {
        if (event.key === "Backspace") {
          inputs[i].value = "";
          if (i !== 0) inputs[i - 1].focus();
        } else {
          if (i === inputs.length - 1 && inputs[i].value !== "") {
            return true;
          } else if (event.keyCode > 47 && event.keyCode < 58) {
            inputs[i].value = event.key;
            if (i !== inputs.length - 1) inputs[i + 1].focus();
            event.preventDefault();
          } else if (event.keyCode > 64 && event.keyCode < 91) {
            inputs[i].value = String.fromCharCode(event.keyCode);
            if (i !== inputs.length - 1) inputs[i + 1].focus();
            event.preventDefault();
          }
        }
      });
    }
  };
  useEffect(() => {
    OTPInput();
  }, []);

  return (
    <div
      id="otp_container_nested"
      className="container height-100 d-flex justify-content-center align-items-center"
    >
      <div className="position-relative">
        <div className="card p-2 text-center">
          <h6>Please enter the one time password to verify your account</h6>
          <div>
            <span>A code has been sent to</span>
            <small>{`*******${number[number.length - 2]}${
              number[number.length - 1]
            }`}</small>
          </div>
          <div
            id="otp"
            ref={inputNodesContainer}
            className="inputs d-flex flex-row justify-content-center mt-2"
          >
            <input
              className="m-2 text-center form-control rounded"
              type="text"
              id="first"
              maxLength="1"
            />
            <input
              className="m-2 text-center form-control rounded"
              type="text"
              id="second"
              maxLength="1"
            />
            <input
              className="m-2 text-center form-control rounded"
              type="text"
              id="third"
              maxLength="1"
            />
            <input
              className="m-2 text-center form-control rounded"
              type="text"
              id="fourth"
              maxLength="1"
            />
            <input
              className="m-2 text-center form-control rounded"
              type="text"
              id="fifth"
              maxLength="1"
            />
            <input
              className="m-2 text-center form-control rounded"
              type="text"
              id="sixth"
              maxLength="1"
            />
          </div>
          <div className="mt-4">
            <button
              className="btn btn-danger px-4 validate"
              onClick={() => {
                let otp = "";
                const allNode =
                  inputNodesContainer.current.querySelectorAll("*[id]");
                for (let i = 0; i < allNode.length; i++) {
                  const element = allNode[i].value;
                  otp += element;
                }

                handleSubmitOTP(otp);
              }}
            >
              Validate
            </button>
          </div>
        </div>
        <div className="card-2">
          <div className="content d-flex justify-content-center align-items-center">
            <span>Didn't get the code</span>
            <a href="#" className="text-decoration-none ms-3">
              Resend(1/3)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Otp.propTypes = {};

export default memo(Otp);
