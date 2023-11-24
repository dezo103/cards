import { CSSProperties, ChangeEvent, useState } from 'react'

import s from './input.module.scss'

import eye from '../../../assets/images/eye-outline.svg'
import search from '../../../assets/images/search-outline.svg'

export type InputProps = {
  className?: string
  disabled?: boolean
  error?: string
  isPassword?: boolean
  label?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  styles?: CSSProperties
  type: 'email' | 'number' | 'password' | 'search' | 'text'
  value?: number | string
}

export const Input = (props: InputProps) => {
  const { className, disabled, error, isPassword, label, onChange, styles, type, value, ...rest } =
    props

  const [localType, setLocalType] = useState(type)
  const toggleVisibility = () => {
    setLocalType(localType === 'password' ? 'text' : 'password')
  }

  return (
    <label>
      {label}
      <div className={s.inputWrapper}>
        {type === 'search' && <img alt={'search'} className={s.searchIcon} src={search} />}
        {type === 'password' && (
          <img alt={'eye'} className={s.eyeIcon} onClick={toggleVisibility} src={eye} />
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
