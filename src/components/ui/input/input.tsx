import { CSSProperties, ReactNode } from 'react'

import s from './input.module.scss'

export type InputProps = {
  // children?: ReactNode
  className?: string
  error?: string
  label?: string
  placeholder?: string
  styles?: CSSProperties
}

export const Input = (props: InputProps) => {
  const { className, error, label, styles, ...rest } = props

  return (
    <label>
      {label}
      <input className={`${s.input} ${className}`} style={styles} type={'text'} {...rest} />
      <p className={s.errorMessage}>{error}</p>
    </label>
  )
}
