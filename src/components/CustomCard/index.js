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

function CustomCard({ data }) {
  return (
    <div className="container-fluid mb-2">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="d-none d-sm-block col-sm-2 col-lg-2 col-xl-2">
              <CustomImage
                url="https://gomechprod.blob.core.windows.net/gm-retail-app/service-new-images/Basic%20Service%20Package%20sq.jpg"
                width={160}
                height={150}
                alt=""
                style={{
                  borderRadius: "4px",
                  width: "100%",
                }}
              />
            </div>
            <div className="col-sm-10 col-lg-10 col-xl-10">
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
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2 col-lg-2 col-xl-2">
              <h4>Rs. {get(data, "price")}</h4>
            </div>

            <div className="col-sm-10 col-lg-10 col-xl-10 d-flex flex-row-reverse">
              <Button variant="outlined">Add To Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CustomCard.propTypes = {};

export default memo(CustomCard);
