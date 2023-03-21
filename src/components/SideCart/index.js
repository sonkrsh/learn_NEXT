/**
 *
 * SideCart
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import CustomImage from "components/CustomImage";
import { get } from "lodash";

function SideCart({ perticularCar }) {
  const computeName = (key) => {
    return get(perticularCar, key, "");
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
        </div>
      </div>
    </div>
  );
}

SideCart.propTypes = {};

export default memo(SideCart);
