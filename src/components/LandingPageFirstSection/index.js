/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */

import React, { memo } from "react";
import CustomImage from "components/CustomImage";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CarModelFuelForm from "components/CarModelFuelForm";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function LandingPageFirstSection() {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          background:
            "linear-gradient(180.2deg, rgb(30, 33, 48) 6.8%, rgb(74, 98, 110) 131%)",
        }}
        className="LandingPageFirstSection_style"
      >
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
            <CarModelFuelForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

LandingPageFirstSection.propTypes = {};

export default memo(LandingPageFirstSection);
