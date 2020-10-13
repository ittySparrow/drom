import React from "react";
import CustomSelect from "../../../_components/CustomSelect";

export default ({ cities }) => {
  const options = cities.map(({ id, name }) => ({ key: id, value: name }));

  return <CustomSelect options={options} name="city" />;
};
