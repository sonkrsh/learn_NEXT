/**
 *
 * Header
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import variables from "./Header.module.scss";

function Header() {
  return <h1 className={variables.text}>Header</h1>;
}

Header.propTypes = {};

export default Header;
