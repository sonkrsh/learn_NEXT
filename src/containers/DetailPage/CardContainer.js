import CustomCard from "components/CustomCard";
import React, { memo } from "react";
import { map } from "lodash";
import SideCart from "components/SideCart";

const CardContainer = ({ data }) => {
  return (
    <div className="row">
      <div className="col-sm-12 col-lg-8 col-xl-8">
        {map(data, (item, index) => (
          <CustomCard key={index} data={item} />
        ))}
      </div>
      <div className="d-none d-lg-block col-sm-0 col-lg-4 col-xl-4">
        <SideCart perticularCar={data?.[0]} />
      </div>
    </div>
  );
};

export default memo(CardContainer);
