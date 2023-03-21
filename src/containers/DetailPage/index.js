/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import makeSelectDetailPage from "./selectors";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { get, isEqual, map, filter } from "lodash";
import Box from "@mui/material/Box";
import CardContainer from "./CardContainer";

export function DetailPage(props) {
  const {
    detailPage: { tags, products },
  } = props;

  const [value, setvalue] = useState(0);
  const handleChange = (event, newValue) => {
    setvalue(newValue);
  };

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  };

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const filterProducts = (tagName) => {
    return filter(products, (item) =>
      isEqual(get(item, "carService.servicesTag.name"), tagName)
    );
  };
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          variant="scrollable"
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {map(tags, (item, index) => (
            <Tab
              key={index}
              label={get(item, "name", "")}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      {map(tags, (item, index) => (
        <TabPanel key={index} value={value} index={index}>
          <CardContainer data={filterProducts(get(item, "name", ""))} />
        </TabPanel>
      ))}
    </>
  );
}

DetailPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  detailPage: makeSelectDetailPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(DetailPage);
