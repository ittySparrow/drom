import React, { useState } from "react";
import cn from "classnames/dedupe";

export default function ({
  options,
  register,
  name,
  placeholder,
  error = false,
  errorMessageInput,
  getValues,
  setValue,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const onOptionClicked = (value) => () => {
    setValue(name, value);
    setIsOpen(false);
  };

  return (
    <>
      <div className={cn("form-group", name)}>
        <div className="dropdown-container">
          <input
            className={cn("dropdown-header form-group-input", { error: error })}
            name={name}
            ref={register({ required: true })}
            onClick={toggle}
            value={getValues[name]}
            onBlur={() => setIsOpen(false)}
            placeholder={placeholder}
            readOnly="readonly"
          />
          {isOpen && (
            <div className="dropdown">
              <ul className="dropdown-content">
                {options &&
                  options.map(({ key, value }) => (
                    <li
                      className="dropdown-element"
                      onMouseDown={onOptionClicked(value)}
                      key={key}
                    >
                      {value}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
        <div className="field-error">{error && errorMessageInput}</div>
      </div>
    </>
  );
}
