import { ComponentPropsWithoutRef } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdownMenu.module.scss'

type Props = ComponentPropsWithoutRef<typeof DropdownMenu.Item>
export const DropdownItem = ({ className, ...rest }: Props) => {
  return <DropdownMenu.Item className={s.DropdownMenuItem} {...rest} />
}
