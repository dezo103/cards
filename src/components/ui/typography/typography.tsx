import { CSSProperties, ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { ButtonProps } from '@/components/ui/button'

import s from './typography.module.scss'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  children: ReactNode
  className?: string
  styles?: CSSProperties
  variant?:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'large'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const { as: Component = 'p', className, styles, variant = 'body1', ...rest } = props

  return <Component className={`${s.text} ${s[variant]} ${className}`} style={styles} {...rest} />
}
