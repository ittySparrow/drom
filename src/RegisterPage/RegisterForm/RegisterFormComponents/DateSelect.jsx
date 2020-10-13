import React from "react";
import _ from "lodash";
import { errorMessageDateInput } from "../../../_errors/errorMessages";
import formatDate from "../../../_helpers/format/formatDate";
import CustomSelect from "../../../_components/CustomSelect";

export default ({ register, error, dates, getValues, setValue }) => {
  const options = () => {
    return _.keys(dates).map((date) => ({
      key: date,
      value: formatDate(date),
    }));
  };

  return (
    <CustomSelect
      register={register}
      getValues={getValues}
      setValue={setValue}
      options={options()}
      name="date"
      placeholder={"Дата"}
      error={error}
      errorMessageInput={errorMessageDateInput}
    />
  );
};
