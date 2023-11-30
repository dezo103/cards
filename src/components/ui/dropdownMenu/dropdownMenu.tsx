import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropdownMenu.module.scss'

type Props = {
  trigger?: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownMenu.Root>

export const DropdownCustomMenu = ({ children, trigger, ...rest }: Props) => {
  return (
    <DropdownMenu.Root {...rest}>
      <DropdownMenu.Trigger asChild>
        <button className={clsx(s.IconButton, s.button)}>{trigger}</button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.DropdownMenuContent} sideOffset={14}>
          {children}
          <div className={s.DropdownArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
