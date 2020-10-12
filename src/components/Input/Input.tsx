import React from 'react'

import { IInputPrimaryProps } from './types'
import * as S from './styles'
export default function InputPrimary({
  label,
  id,
  className,
  value,
  onChange,
  maxLength,
  ...rest
}: IInputPrimaryProps) {
  return (
    <S.Input className={className}>
      <input
        {...rest}
        id={id}
        required
        onChange={onChange}
        value={value}
        maxLength={maxLength}
      />
      <label htmlFor={id}>{label}</label>
    </S.Input>
  )
}
