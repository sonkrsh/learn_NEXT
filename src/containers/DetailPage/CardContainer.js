import CustomCard from "components/CustomCard";
import React, { memo } from "react";
import { map } from "lodash";
import SideCart from "components/SideCart";

const CardContainer = ({ data, handleAddToCart, cartData }) => {
  return (
    <div className="row">
      <div className="col-sm-12 col-lg-8 col-xl-8">
        {map(data, (item, index) => (
          <CustomCard
            key={index}
            data={item}
            handleAddToCart={handleAddToCart}
            cartData={cartData}
          />
        ))}
      </div>
      <div className="d-none d-lg-block col-sm-0 col-lg-4 col-xl-4">
        <SideCart data={data} cartData={cartData} />
      </div>
    </div>
  );
};

export default memo(CardContainer);
