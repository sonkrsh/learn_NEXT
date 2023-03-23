/**
 *
 * SideCart
 *
 */

import React, { memo, useRef, useEffect } from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import CustomImage from "components/CustomImage";
import { get, isEqual, map } from "lodash";
import { useRouter } from "next/router";

function SideCart({ data, cartData }) {
  const history = useRouter();
  const globalTotal = useRef(0);

  const computeName = (key) => {
    return get(cartData, key, "");
  };

  const handleCheckout = () => {
    history.push("/checkout");
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
          {map(cartData, (item, key) => {
            globalTotal.current += get(item, "price", 0);
            return (
              <div key={key} className="card mt-2">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5>{get(item, "carService.name")}</h5>
                    <p>{get(item, "price")}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="d-flex  justify-content-end ">
            <p>Total:- {globalTotal.current}</p>
          </div>

          <div className="row">
            <button
              onClick={handleCheckout}
              type="button"
              className="btn btn-success"
            >
              checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

SideCart.propTypes = {};

export default memo(SideCart);
