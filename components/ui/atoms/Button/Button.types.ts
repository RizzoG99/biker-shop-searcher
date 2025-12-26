import { ButtonHTMLAttributes, ReactNode } from 'react'
import { VariantProps } from 'class-variance-authority'
import { buttonVariants } from './Button'

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Button content */
  children: ReactNode
  /** Loading state */
  isLoading?: boolean
  /** Left icon (Material Symbol name) */
  leftIcon?: string
  /** Right icon (Material Symbol name) */
  rightIcon?: string
  /** Full width button */
  fullWidth?: boolean
  /** Additional CSS classes */
  className?: string
}
