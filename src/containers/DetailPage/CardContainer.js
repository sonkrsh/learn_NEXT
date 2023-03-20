import CustomCard from "components/CustomCard";
import React, { memo } from "react";
import { map } from "lodash";

const CardContainer = ({ data }) => {
  return (
    <div>
      {map(data, (item, index) => (
        <CustomCard key={index} data={item} />
      ))}
    </div>
  );
};

export default memo(CardContainer);
