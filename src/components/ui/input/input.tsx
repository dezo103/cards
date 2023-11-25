import { CSSProperties, ChangeEvent, useState } from 'react'

import { EyeIcon } from '@/assets/images/eyeIcon'
import { SearchIcon } from '@/assets/images/searchIcon'

import s from './input.module.scss'

export type InputProps = {
  className?: string
  disabled?: boolean
  error?: string
  isPassword?: boolean
  label?: string
  name?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  styles?: CSSProperties
  type: 'email' | 'number' | 'password' | 'search' | 'text'
  value?: number | string
}

export const Input = (props: InputProps) => {
  const {
    className,
    disabled,
    error,
    isPassword,
    label,
    name,
    onChange,
    styles,
    type,
    value,
    ...rest
  } = props

  const [localType, setLocalType] = useState(type)
  const toggleVisibility = () => {
    setLocalType(localType === 'password' ? 'text' : 'password')
  }

  return (
    <label>
      {label}
      <div className={s.inputWrapper}>
        {type === 'search' && (
          <div className={s.searchIcon}>
            <SearchIcon />
          </div>
        )}
        {type === 'password' && (
          <div className={s.eyeIcon} onClick={toggleVisibility}>
            <EyeIcon />
          </div>
        )}
        <input
          className={`${s.input} ${className} ${error && s.error} 
          ${type === 'search' && s.searchInput}
          ${type === 'password' && s.passwordInput}`}
          disabled={disabled}
          style={styles}
          type={localType || type}
          {...rest}
        />
      </div>
      <p className={s.errorMessage}>{error}</p>
    </label>
  )
}
