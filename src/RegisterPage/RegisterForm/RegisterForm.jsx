import React from "react";
import Address from "./RegisterFormComponents/Address";
import NameInput from "./RegisterFormComponents/NameInput";
import PhoneInput from "./RegisterFormComponents/PhoneInput";
import CitySelect from "./RegisterFormComponents/CitySelect";
import DateSelect from "./RegisterFormComponents/DateSelect";
import TimeSelect from "./RegisterFormComponents/TimeSelect";
import cn from "classnames/dedupe";

export default ({
  register,
  onSubmit,
  handleSubmit,
  cities,
  dates,
  errors,
  isValid,
  isSubmitting,
  handleDateChange,
  setValue,
  getValues,
}) => {
  return (
    <form
      className={cn("form", { isSubmitting: isSubmitting })}
      onSubmit={handleSubmit(onSubmit)}
    >
      <CitySelect
        register={register}
        cities={cities}
        getValues={getValues}
        setValue={setValue}
      />
      {getValues("city") && (
        <Address cities={cities} city={getValues("city")} />
      )}
      <DateSelect
        register={register}
        error={errors.date}
        handleDateChange={handleDateChange}
        dates={dates}
        getValues={getValues}
        setValue={setValue}
      />
      <TimeSelect
        register={register}
        error={errors.time}
        dates={dates}
        date={getValues("date")}
        getValues={getValues}
        setValue={setValue}
      />
      <PhoneInput
        register={register}
        error={errors.tel}
        getValues={getValues}
      />
      <NameInput register={register} error={errors.name} />
      <button className="submit-button" disabled={!isValid}>
        Записаться
      </button>
    </form>
  );
};
