/**
 *
 * CustomCard
 *
 */

import React, { memo, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CustomImage from "components/CustomImage";
import localForage from "localforage";
import { get, isEmpty, map, find, isEqual } from "lodash";
import Message from "components/Message";

function CustomCard({ data }) {
  const [open, setOpen] = React.useState(false);
  const [isFound, setisFound] = useState(false);

  const addToCart = async () => {
    const previousData = await localForage.getItem("automobileCrunch");
    let combineData = null;
    if (!isEmpty(previousData)) {
      combineData = {
        products_uuid: [
          data.products_uuid,
          ...get(previousData, "products_uuid"),
        ],
      };
    } else {
      combineData = {
        products_uuid: [data.products_uuid],
      };
    }

    await localForage.setItem("automobileCrunch", combineData);

    setOpen(true);
  };

  const isInLocalStorage = async (currentId) => {
    const s = await localForage.getItem("automobileCrunch");

    let isFind =
      find(s?.products_uuid, (item) => isEqual(currentId, item)) || false;

    return setisFound(!!isFind);
  };

  useEffect(() => {
    isInLocalStorage(get(data, "products_uuid"));
  }, [open]);

  return (
    <div className="container-fluid mb-2">
      {open && <Message>Added To Cart</Message>}
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
              <Button disabled={isFound} onClick={addToCart} variant="outlined">
                Add To Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CustomCard.propTypes = {};

export default memo(CustomCard);
