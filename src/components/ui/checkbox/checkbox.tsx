import { useState } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'
export type CheckboxProps = {
  checked?: boolean
  disabled?: boolean
  label?: string
}
export const Checkbox = (props: CheckboxProps) => {
  const { checked, disabled, label, ...rest } = props

  const [checkedBox, setCheckedBox] = useState(checked)

  const onChangeCheckbox = () => {
    setCheckedBox(!checkedBox)
  }

  return (
    <form>
      <label className={!disabled ? s.label : `${s.label} ${s.disabledLabel}`} htmlFor={'c1'}>
        <div className={!disabled ? s.wrapper : `${s.wrapper} ${s.disabledWrapper}`}>
          <CheckboxRadix.Root
            checked={checkedBox}
            className={s.CheckboxRoot}
            defaultChecked
            disabled={disabled}
            id={'c1'}
            onCheckedChange={onChangeCheckbox}
            {...rest}
          >
            <CheckboxRadix.Indicator className={s.CheckboxIndicator}>
              {checkedBox ? <span className={s.span}>&#10004;</span> : <span></span>}
            </CheckboxRadix.Indicator>
          </CheckboxRadix.Root>
        </div>
        {label}
      </label>
    </form>
  )
}
