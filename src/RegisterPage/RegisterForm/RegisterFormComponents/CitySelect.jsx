import React from "react";
import { useFormContext } from "react-hook-form";
import resetFields from "../../../_utils/resetFields";
import CustomSelect from "./CustomSelect";

export default ({ cities }) => {
  const { reset, getValues } = useFormContext();

  const resetDateAndTime = resetFields(
    "city",
    { date: "", time: "" },
    reset,
    getValues
  );

  const options = cities.map(({ id, name }) => ({ key: id, value: name }));

  return (
    <CustomSelect
      options={options}
      name="city"
      handleChange={resetDateAndTime}
    />
  );
};
