import React from 'react'

import * as S from './styles'
import { InputProps } from './types'

export default function Input({
  label,
  id,
  className,
  value,
  onChange,
  maxLength,
  ...rest
}: InputProps) {
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
