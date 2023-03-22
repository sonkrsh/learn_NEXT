/**
 *
 * SideCart
 *
 */

import React, { memo, useRef } from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import CustomImage from "components/CustomImage";
import { get, isEqual, map } from "lodash";

function SideCart({ data, cartData }) {
  const globalTotal = useRef(0);

  const computeName = (key) => {
    return get(data?.[0], key, "");
  };

  const filterData = () => {
    const filterData = [];
    let total = 0;
    for (let i = 0; i < cartData?.length; i++) {
      for (let j = 0; j < data?.length; j++) {
        if (isEqual(get(data[j], "products_uuid"), cartData[i])) {
          total += get(data[j], "price");
          filterData.push(data[j]);
        }
      }
    }

    globalTotal.current = total;

    return filterData;
  };

  return (
    <div className="container-fluid mb-2">
      <div className="card">
        <div className="card-body">
          <div className="row d-flex justify-content-center ">
            <div className="d-none d-sm-block col-sm-6 col-lg-6 col-xl-6">
              <CustomImage
                url="https://gomechprod.blob.core.windows.net/gm-retail-app/service-new-images/Basic%20Service%20Package%20sq.jpg"
                width={200}
                height={150}
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <p>{`${computeName("carCompany.name")} ${computeName(
              "carModel.name"
            )} ${computeName("carFuel.name")}`}</p>
          </div>
          {map(filterData(), (item) => (
            <div className="card mt-2">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5>{get(item, "carService.name")}</h5>
                  <p>{get(item, "price")}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex  justify-content-end ">
            <p>Total:- {globalTotal.current}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

SideCart.propTypes = {};

export default memo(SideCart);
