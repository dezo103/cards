// import { useState } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'
export type CheckboxProps = {
  checked?: boolean
  disabled?: boolean
  id?: string
  label?: string
  onChange: (checked: boolean) => void
  required?: boolean
}
export const Checkbox = (props: CheckboxProps) => {
  const { checked, disabled, id, label, onChange, required, ...rest } = props

  return (
    <form>
      <label className={!disabled ? s.label : `${s.label} ${s.disabledLabel}`} htmlFor={'c1'}>
        <div className={!disabled ? s.wrapper : `${s.wrapper} ${s.disabledWrapper}`}>
          <CheckboxRadix.Root
            checked={checked}
            className={s.CheckboxRoot}
            defaultChecked
            disabled={disabled}
            id={'c1'}
            onCheckedChange={onChange}
            {...rest}
          >
            <CheckboxRadix.Indicator className={s.CheckboxIndicator}>
              {checked ? <span className={s.span}>&#10004;</span> : <span></span>}
            </CheckboxRadix.Indicator>
          </CheckboxRadix.Root>
        </div>
        {label}
      </label>
    </form>
  )
}
