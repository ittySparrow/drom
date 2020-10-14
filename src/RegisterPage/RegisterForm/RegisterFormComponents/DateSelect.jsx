import React from "react";
import _ from "lodash";
import { errorMessageDateInput } from "../../../_validator/errorMessages";
import CustomSelect from "./CustomSelect";
import { formatDate } from "../../../_utils/format";

export default ({ dates }) => {
  const options = () => {
    return _.keys(dates).map((date) => ({
      key: date,
      value: formatDate(date),
    }));
  };

  return (
    <CustomSelect
      options={options()}
      name="date"
      placeholder={"Дата"}
      errorMessageInput={errorMessageDateInput}
    />
  );
};
