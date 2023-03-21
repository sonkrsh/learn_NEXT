/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import makeSelectHomePage from "./selectors";
import CarModelFuelForm from "components/CarModelFuelForm";
import Typography from "@mui/material/Typography";
export function HomePage(props) {
  const {
    homePage: { cardata, fuelData },
  } = props;

  return (
    <div className="LandingPageFirstSection_style">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-7">
            <Typography
              style={{ fontWeight: 900, color: "white" }}
              fontSize={{
                lg: 45,
                md: 28,
                sm: 28,
                xs: 28,
              }}
            >
              Rev up your car's style and functionality
            </Typography>
            <Typography
              style={{
                color: "white",
              }}
              fontSize={{
                lg: 25,
                md: 16,
                sm: 16,
                xs: 16,
              }}
            >
              with our wide selection of high-quality accessories - all
              available at the click of a button!
            </Typography>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-5">
            <CarModelFuelForm cardata={cardata} fuelData={fuelData} />
          </div>
        </div>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(HomePage);
