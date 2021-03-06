import React, { useState } from 'react'
import cn from 'classnames/dedupe'
import { useFormContext } from 'react-hook-form'
import errorMessages from '../../../_validator/errorMessages'

export default function ({
  options,
  name,
  placeholder = '',
  handleClickOnDisabledEl = () => {},
  isDisabled = false,
  handleChange = () => {},
}) {
  const { setValue, getValues, register, errors } = useFormContext()

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const onOptionClicked = (value) => () => {
    const prevValue = getValues(name)
    setIsOpen(false)
    if (value !== prevValue) {
      setValue(name, value)
      handleChange(name)
    }
  }

  return (
    <>
      <div className={cn('form-group', name)}>
        <div className='dropdown-container' onClick={handleClickOnDisabledEl}>
          <input
            className={cn('dropdown-header form-group-input', {
              error: errors[name],
            })}
            name={name}
            ref={register({ required: true })}
            onClick={toggle}
            value={getValues[name]}
            onBlur={() => setIsOpen(false)}
            placeholder={placeholder}
            readOnly='readonly'
            disabled={isDisabled}
          />
          {isOpen && (
            <div className='dropdown'>
              <ul className='dropdown-content'>
                {options &&
                  options.map(({ key, value }) => (
                    <li
                      className='dropdown-element'
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
        <div className='field-error'>
          {(errors[name] && errorMessages[name]) || 'Unknown message'}
        </div>
      </div>
    </>
  )
}
