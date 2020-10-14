import React from "react";
import _ from "lodash";
import { useFormContext } from "react-hook-form";
import { errorMessageTimeInput } from "../../../_validator/errorMessages";
import CustomSelect from "./CustomSelect";
import { formatDate, formatTime } from "../../../_utils/format";

export default ({ dates }) => {
  const { getValues } = useFormContext();

  const date = getValues("date");
  const correctDate = _.keys(dates).filter((d) => formatDate(d) === date)[0];
  const options =
    date &&
    _.keys(dates[correctDate]).map((time) => ({
      key: time,
      value: formatTime(time),
    }));

  return (
    <CustomSelect
      placeholder={"Время"}
      options={options}
      name="time"
      errorMessageInput={errorMessageTimeInput}
    />
  );
};
