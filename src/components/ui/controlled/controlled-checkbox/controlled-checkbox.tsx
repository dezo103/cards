import { UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '../../checkbox'

export type ControlledCheckboxProps = UseControllerProps<any> &
  Omit<CheckboxProps, 'id' | 'onChange' | 'value'>

export const ControlledCheckbox = ({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...checkboxProps
}: ControlledCheckboxProps) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <Checkbox
      {...{
        checked: value,
        id: name,
        onChange,
        ...checkboxProps,
      }}
    />
  )
}
