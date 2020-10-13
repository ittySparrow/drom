import React from "react";
import { IMaskInput } from "react-imask";
import { errorMessagePhoneInput } from "../../../_errors/errorMessages";
import { validatePhone } from "../../../_validator/validatePhone";
import cn from "classnames/dedupe";

export default ({ register, error, getValues }) => {
  return (
    <div className="form-group tel">
      <IMaskInput
        mask={"{+7 }{(}000{) }000{-}00{-}00"}
        inputRef={register({ required: true, validate: validatePhone })}
        unmask={false}
        name="tel"
        className={cn("form-group-input", { error: error })}
        placeholder="+7 (___) ___-__-__"
      />
      <div className="field-error">{error && errorMessagePhoneInput}</div>
    </div>
  );
};
