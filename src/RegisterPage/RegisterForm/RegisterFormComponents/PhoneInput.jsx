import React from "react";
import ReactInputMask from "react-input-mask";
import { errorMessagePhoneInput } from "../../../_errors/errorMessages";
import validatePhone from "../../../_validator/validatePhone";
import cn from "classnames/dedupe";
import { Controller } from "react-hook-form";

export default ({ register, error, control }) => {
  return (
    <div className="form-group tel">
      <ReactInputMask
        ref={register({ required: true, validate: validatePhone })}
        mask="+7 (999) 999-99-99"
        name="tel"
        className={cn("form-group-input", { error: error })}
        placeholder="+7 (___) ___-__-__"
      />
      <div className="field-error">{error && errorMessagePhoneInput}</div>
    </div>
  );
};
