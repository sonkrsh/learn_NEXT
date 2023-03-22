/**
 *
 * Message
 *
 */

import React, { memo, useState, useEffect } from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const Message = ({ variant, time, children }) => {
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, time || 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {alert && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            zIndex: 1,
          }}
          className={`alert ${variant || "alert-primary"}`}
          role="alert"
        >
          {children}
        </div>
      )}
    </>
  );
};

Message.propTypes = {};

export default memo(Message);
