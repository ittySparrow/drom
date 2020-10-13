import React from "react";
import CustomSelect from "../../../_components/CustomSelect";

export default ({ cities, register, getValues, setValue }) => {
  const options = cities.map(({ id, name }) => ({ key: id, value: name }));

  return (
    <CustomSelect
      register={register}
      getValues={getValues}
      setValue={setValue}
      options={options}
      name="city"
    />
  );
};
