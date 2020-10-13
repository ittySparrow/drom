import React from "react";
import _ from "lodash";
import { errorMessageDateInput } from "../../../_errors/errorMessages";
import formatDate from "../../../_helpers/format/formatDate";
import CustomSelect from "../../../_components/CustomSelect";

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
