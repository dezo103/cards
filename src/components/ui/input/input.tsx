import { CSSProperties, ChangeEvent, forwardRef, useState } from 'react'

import { EyeIcon } from '@/assets/images/eyeIcon'
import { SearchIcon } from '@/assets/images/searchIcon'

import s from './input.module.scss'

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

export const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
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
          ref={ref}
          style={styles}
          type={localType || type}
          {...rest}
        />
      </div>
      <p className={s.errorMessage}>{error}</p>
    </label>
  )
})
