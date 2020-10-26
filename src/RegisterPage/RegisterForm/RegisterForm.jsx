import React from "react";
import { useFormContext } from "react-hook-form";
import cn from "classnames/dedupe";
import Address from "./RegisterFormComponents/Address";
import NameInput from "./RegisterFormComponents/NameInput";
import PhoneInput from "./RegisterFormComponents/PhoneInput";
import CitySelect from "./RegisterFormComponents/CitySelect";
import DateSelect from "./RegisterFormComponents/DateSelect";
import TimeSelect from "./RegisterFormComponents/TimeSelect";

export default ({ onSubmit, cities, dates, showDates }) => {
  const { handleSubmit, getValues, formState } = useFormContext();
  return (
    <form
      className={cn("form", { isSubmitting: formState.isSubmitting })}
      onSubmit={handleSubmit(onSubmit)}
    >
      <CitySelect cities={cities} />
      <Address cities={cities} />
      <DateSelect dates={dates} showDates={showDates} />
      <TimeSelect dates={dates} date={getValues("date")} />
      <PhoneInput />
      <NameInput />
      <button className="submit-button" disabled={!formState.isValid}>
        Записаться
      </button>
    </form>
  );
};
