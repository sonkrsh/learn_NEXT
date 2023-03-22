import CustomCard from "components/CustomCard";
import React, { memo } from "react";
import { map } from "lodash";

const CardContainer = ({ data, handleAddToCart, cartData }) => {
  return (
    <div className="row">
      {map(data, (item, index) => (
        <CustomCard
          key={index}
          data={item}
          handleAddToCart={handleAddToCart}
          cartData={cartData}
        />
      ))}
    </div>
  );
};

export default memo(CardContainer);
