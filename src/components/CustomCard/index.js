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
import { get, map } from "lodash";

const card = (data) => (
  <>
    <Container
      maxWidth="xl"
      style={{
        padding: "1rem 1rem",
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
          <CustomImage
            url="https://gomechprod.blob.core.windows.net/gm-retail-app/service-new-images/Basic%20Service%20Package%20sq.jpg"
            width={160}
            height={150}
            is_shown_in_mobile={true}
            alt=""
            style={{
              borderRadius: "4px",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
          <h3>{get(data, "carService.name")}</h3>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {map(get(data, "carService.points"), (item, key) => (
              <li
                key={key}
                style={{
                  width: "50%",
                }}
              >
                {get(item, "name")}
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>Rs. {get(data, "price")}</div>
        <Button variant="outlined">Add To Cart</Button>
      </CardActions>
    </Container>
  </>
);

function CustomCard({ data }) {
  return (
    <Card
      style={{
        marginBottom: "1rem",
      }}
      variant="outlined"
    >
      {card(data)}
    </Card>
  );
}

CustomCard.propTypes = {};

export default memo(CustomCard);
