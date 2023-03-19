/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import makeSelectHomePage from "./selectors";
import Grid from "@mui/material/Grid";
import CarModelFuelForm from "components/CarModelFuelForm";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
export function HomePage(props) {
  const {
    homePage: { cardata, fuelData },
  } = props;

  console.log("---homePage cardata", cardata);
  console.log("---homePage fuelData", fuelData);

  return (
    <div className="LandingPageFirstSection_style">
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={8}>
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
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <CarModelFuelForm cardata={cardata} fuelData={fuelData} />
          </Grid>
        </Grid>
      </Container>
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
