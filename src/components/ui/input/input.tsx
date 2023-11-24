import { CSSProperties, ChangeEvent, ReactNode } from 'react'

import s from './input.module.scss'

export type InputProps = {
  // children?: ReactNode
  className?: string
  disabled?: boolean
  error?: string
  isPassword?: boolean
  label?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  styles?: CSSProperties
  type: 'email' | 'number' | 'password' | 'text'
  value?: number | string
}

export const Input = (props: InputProps) => {
  const { className, disabled, error, isPassword, label, onChange, styles, type, value, ...rest } =
    props

  return (
    <label>
      {label}
      <input
        className={`${s.input} ${className}`}
        disabled={disabled}
        style={styles}
        type={type}
        {...rest}
      />
      <p className={s.errorMessage}>{error}</p>
    </label>
  )
}
