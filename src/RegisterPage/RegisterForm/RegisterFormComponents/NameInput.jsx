import React from "react";
import { errorMessageNameInput } from "../../../_errors/errorMessages";
import cn from "classnames/dedupe";

export default ({ register, error }) => {
  return (
    <div className="form-group name">
      <input
        ref={register({ required: true })}
        name="name"
        className={cn("form-group-input", { error: error })}
        placeholder="Ваше имя"
      />
      <div className="field-error">{error && errorMessageNameInput}</div>
    </div>
  );
};
