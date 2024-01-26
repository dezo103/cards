import { CSSProperties, ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

export type CardProps<T extends ElementType = 'div'> = {
  as?: T
  children?: ReactNode
  className?: string
  styles: CSSProperties
} & ComponentPropsWithoutRef<T>
const CardWithoutRef = <T extends ElementType = 'div'>(
  props: CardProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof CardProps<T>>
) => {
  const { as: Component = 'div', className, styles, ...rest } = props

  return <Component className={clsx(s.card, className)} style={styles} {...rest}></Component>
}

export const Card = CardWithoutRef
