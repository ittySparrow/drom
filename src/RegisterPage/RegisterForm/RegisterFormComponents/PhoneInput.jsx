import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { errorMessagePhoneInput } from "../../../_validator/errorMessages";
import { validatePhone } from "../../../_validator/validatePhone";
import cn from "classnames/dedupe";

export default () => {
  const { errors, control, getValues } = useFormContext();

  return (
    <div className="form-group tel">
      <Controller
        render={({ onChange, onBlur }) => (
          <IMaskInput
            mask={"{+7 }{(}000{) }000{-}00{-}00"}
            unmask={false}
            onBlur={onBlur}
            onAccept={onChange}
            className={cn("form-group-input", { error: errors.tel })}
            placeholder="+7 (___) ___-__-__"
            value={getValues("tel")}
          />
        )}
        control={control}
        rules={{ required: true, validate: validatePhone }}
        name="tel"
        defaultValue=""
      />
      <div className="field-error">{errors.tel && errorMessagePhoneInput}</div>
    </div>
  );
};
