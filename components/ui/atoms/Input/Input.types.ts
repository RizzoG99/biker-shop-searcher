import { InputHTMLAttributes } from 'react'
import { VariantProps } from 'class-variance-authority'
import { inputVariants } from './Input'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  /** Label text */
  label?: string
  /** Error message */
  error?: string
  /** Helper text */
  helperText?: string
  /** Left icon (Material Symbol name) */
  leftIcon?: string
  /** Right icon (Material Symbol name) */
  rightIcon?: string
  /** Full width input */
  fullWidth?: boolean
  /** Container className */
  containerClassName?: string
}
