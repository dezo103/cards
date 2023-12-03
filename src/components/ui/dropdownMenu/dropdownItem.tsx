import { ComponentPropsWithoutRef } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropdownMenu.module.scss'

type Props = ComponentPropsWithoutRef<typeof DropdownMenu.Item>
export const DropdownItem = ({ className, ...rest }: Props) => {
  return <DropdownMenu.Item className={clsx(s.DropdownMenuItem, s.CustomItem)} {...rest} />
}
