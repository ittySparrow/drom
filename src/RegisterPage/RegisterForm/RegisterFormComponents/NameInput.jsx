import React from "react";
import { errorMessageNameInput } from "../../../_errors/errorMessages";
import cn from "classnames/dedupe";
import { useFormContext } from "react-hook-form";

export default () => {
  const { register, errors } = useFormContext();

  return (
    <div className="form-group name">
      <input
        ref={register({ required: true })}
        name="name"
        className={cn("form-group-input", { error: errors.name })}
        placeholder="Ваше имя"
      />
      <div className="field-error">{errors.name && errorMessageNameInput}</div>
    </div>
  );
};
