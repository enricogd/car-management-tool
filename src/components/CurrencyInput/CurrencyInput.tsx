import React from 'react'

import * as S from './styles'
import { CurrencyInputProps } from './types'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

export default function CurrencyInput({
  label,
  id,
  className,
  value,
  onChange,
  maxLength,
  ...rest
}: CurrencyInputProps) {
  const defaultMaskOptions = {
    prefix: 'R$',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2, // how many digits allowed after the decimal
    integerLimit: 10, // limit length of integer numbers
    allowNegative: false,
    allowLeadingZeroes: false,
  }

  const currencyMask = createNumberMask(defaultMaskOptions)

  return (
    <S.Input className={className}>
      <MaskedInput
        {...rest}
        mask={currencyMask}
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
