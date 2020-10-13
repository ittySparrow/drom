import React from "react";
import _ from "lodash";
import { errorMessageTimeInput } from "../../../_errors/errorMessages";
import formatDate from "../../../_helpers/format/formatDate";
import formatTime from "../../../_helpers/format/formatTime";
import CustomSelect from "../../../_components/CustomSelect";

export default ({ register, error, dates, getValues, setValue }) => {
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
      register={register}
      name="time"
      error={error}
      setValue={setValue}
      errorMessageInput={errorMessageTimeInput}
      getValues={getValues}
    />
  );
};
