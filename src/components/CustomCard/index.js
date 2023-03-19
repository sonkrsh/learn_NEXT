/**
 *
 * CustomCard
 *
 */

import React, { memo } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CarModelFuelForm from "components/CarModelFuelForm";
import Container from "@mui/material/Container";
import CustomImage from "components/CustomImage";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <>
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
          <CustomImage
            url="https://gomechprod.blob.core.windows.net/gm-retail-app/service-new-images/Basic%20Service%20Package%20sq.jpg"
            width={150}
            height={130}
            alt=""
            style={{
              borderRadius: "1rem",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
          <h1>as</h1>
        </Grid>
      </Grid>
    </Container>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </>
);

function CustomCard() {
  return <Card variant="outlined">{card}</Card>;
}

CustomCard.propTypes = {};

export default memo(CustomCard);
