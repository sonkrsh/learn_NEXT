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
import { find, get, isEmpty, isEqual } from "lodash";
import { useRouter } from "next/router";

function CarModelFuelForm({ cardata, fuelData }) {
  const router = useRouter();

  const carProps = {
    options: cardata,
    getOptionLabel: (option) => option.name,
  };

  const fuelProps = {
    options: fuelData,
    getOptionLabel: (option) => option.name,
  };

  const filterModel = (carValue) => {
    const data = find(cardata, (item) =>
      isEqual(item?.carCompany_uuid, carValue)
    );
    return data.carModels;
  };

  const onSave = (e) => {
    router.push(`/${e.car.name}/${e.model.name}/${e.fuel.name}`);
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
                onChange={(e, v) => {
                  setFieldValue("car", {
                    name: get(v, "name", ""),
                    id: get(v, "carCompany_uuid", ""),
                  });
                  setFieldValue("model", {
                    name: "",
                    id: "",
                  });
                }}
                inputValue={get(values, "car.name", "")}
                {...carProps}
                renderInput={(params) => {
                  return (
                    <TextField
                      {...params}
                      error={!isEmpty(errors.car?.id)}
                      label={
                        get(values, "car.name")
                          ? "Selected Car"
                          : "Please Select car"
                      }
                    />
                  );
                }}
              />

              {values.car?.name && (
                <Autocomplete
                  disablePortal
                  options={filterModel(values.car?.id)}
                  getOptionLabel={(option) => option.name || ""}
                  onChange={(e, v) => {
                    setFieldValue("model", {
                      name: get(v, "name", ""),
                      id: get(v, "carModel_uuid", ""),
                    });
                    setFieldValue("fuel", {
                      name: "",
                      id: "",
                    });
                  }}
                  inputValue={get(values, "model.name", "")}
                  // value={values.model?.id || ""}
                  renderInput={(params) => {
                    return (
                      <TextField
                        {...params}
                        error={!isEmpty(errors.model?.id)}
                        label={
                          get(values, "model.name")
                            ? "Seleted Model"
                            : "Please Select Model"
                        }
                      />
                    );
                  }}
                />
              )}

              {values.model?.name && values.car?.name && (
                <Autocomplete
                  disablePortal
                  onChange={(e, v) => {
                    setFieldValue("fuel", {
                      name: get(v, "name", ""),
                      id: get(v, "carFuel_uuid", ""),
                    });
                  }}
                  {...fuelProps}
                  inputValue={values.fuel?.name}
                  renderInput={(params) => {
                    return (
                      <TextField
                        {...params}
                        error={!isEmpty(errors.fuel?.id)}
                        label={
                          get(values, "fuel.name")
                            ? "Selected Fuel"
                            : "Please Select Fuel"
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
