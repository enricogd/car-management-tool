import { InputHTMLAttributes } from 'react'

export interface IInputPrimaryProps
	extends InputHTMLAttributes<HTMLInputElement> {
	id: string
	label: string
}
