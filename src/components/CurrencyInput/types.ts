import { InputHTMLAttributes } from 'react'

export interface CurrencyInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
}
