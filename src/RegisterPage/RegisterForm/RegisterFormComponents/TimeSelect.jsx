import React from 'react'
import _ from 'lodash'
import CustomSelect from './CustomSelect'
import { formatDate, formatTime } from '../../../_utils/format'
import { useFormContext } from 'react-hook-form'

export default ({ dates, date }) => {
  const { trigger } = useFormContext()

  const isDisabled = !date
  const handleClick = () => isDisabled && trigger('date')

  const correctDate = _.keys(dates).filter((d) => formatDate(d) === date)[0]

  const options =
    date &&
    _.keys(dates[correctDate]).map((time) => ({
      key: time,
      value: formatTime(time),
    }))

  return (
    <CustomSelect
      placeholder={'Время'}
      options={options}
      name='time'
      isDisabled={isDisabled}
      handleClickOnDisabledEl={handleClick}
    />
  )
}
