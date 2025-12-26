import { HTMLAttributes, ReactNode } from 'react'
import { VariantProps } from 'class-variance-authority'
import { badgeVariants } from './Badge'

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /** Badge content */
  children: ReactNode
  /** Icon (Material Symbol name) */
  icon?: string
  /** Icon position */
  iconPosition?: 'left' | 'right'
  /** Additional CSS classes */
  className?: string
}
