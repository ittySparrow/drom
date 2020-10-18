import React from "react";
import _ from "lodash";
import { errorMessageDateInput } from "../../../_validator/errorMessages";
import CustomSelect from "./CustomSelect";
import { formatDate } from "../../../_utils/format";
import { useFormContext } from "react-hook-form";
import resetFields from "../../../_utils/resetFields";

export default ({ dates }) => {
  const { reset, getValues } = useFormContext();

  const resetTime = resetFields("date", { time: "" }, reset, getValues);

  const options = _.keys(dates).map((date) => ({
    key: date,
    value: formatDate(date),
  }));

  return (
    <CustomSelect
      options={options}
      name="date"
      placeholder={"Дата"}
      handleChange={resetTime}
      errorMessageInput={errorMessageDateInput}
    />
  );
};
