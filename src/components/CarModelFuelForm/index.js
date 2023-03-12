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

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
];

const defaultProps = {
  options: top100Films,
  getOptionLabel: (option) => option.title,
};
console.log("---form");
function CarModelFuelForm() {
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
                onSelect={handleChange("car")}
                {...defaultProps}
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
                  onSelect={handleChange("model")}
                  {...defaultProps}
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
