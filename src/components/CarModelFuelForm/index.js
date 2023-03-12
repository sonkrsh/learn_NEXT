/**
 *
 * CarModelFuelForm
 *
 */

import React, { memo } from "react";
import { Formik } from "formik";
import { carModelFuelFormSchema } from "utils/validationSchema";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { find, isEqual } from "lodash";

function CarModelFuelForm({ cardata }) {
  const carProps = {
    options: cardata,
    getOptionLabel: (option) => option.name,
  };

  const filterModel = (carValue) => {
    const data = find(cardata, (item) =>
      isEqual(item?.carCompany_uuid, carValue)
    );
    return data.carModels;
  };

  const onSave = (e) => {
    console.log("---value", e);
  };
  return (
    <Card variant="outlined" className={"cardModelFuelForm_style"}>
      <Stack spacing={1} sx={{ width: "100%" }}>
        <Formik
          initialValues={{}}
          validationSchema={carModelFuelFormSchema}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={onSave}
        >
          {({
            values,
            errors,
            handleSubmit,
            setFieldValue,
            handleChange,
            touched,
          }) => (
            <>
              <Autocomplete
                disablePortal
                onChange={(e, v) => setFieldValue("car", v.carCompany_uuid)}
                value={values.car}
                {...carProps}
                renderInput={(params) => {
                  return (
                    <TextField
                      {...params}
                      error={!!errors.car}
                      label={values.car ? "Selected Car" : "Please Select car"}
                    />
                  );
                }}
              />

              {values.car && (
                <Autocomplete
                  disablePortal
                  options={filterModel(values.car)}
                  getOptionLabel={(option) => option.name}
                  onSelect={handleChange("model")}
                  renderInput={(params) => {
                    return (
                      <TextField
                        {...params}
                        error={!!errors.model}
                        label={
                          values.model ? "Seleted Model" : "Please Select Model"
                        }
                      />
                    );
                  }}
                />
              )}

              {values.model && values.car && (
                <Autocomplete
                  disablePortal
                  onSelect={handleChange("fuel")}
                  {...defaultProps}
                  renderInput={(params) => {
                    return (
                      <TextField
                        {...params}
                        error={!!errors.fuel}
                        label={
                          values.fuel ? "Selected Fuel" : "Please Select Fuel"
                        }
                      />
                    );
                  }}
                />
              )}

              <Button onClick={handleSubmit} variant="outlined">
                Search
              </Button>
            </>
          )}
        </Formik>
      </Stack>
    </Card>
  );
}

CarModelFuelForm.propTypes = {};

export default memo(CarModelFuelForm);
