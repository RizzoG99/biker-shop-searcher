import React, { forwardRef, useId } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { InputProps } from './Input.types'

export const inputVariants = cva(
  'block w-full transition-all duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-card-graphite border border-border-dark text-white placeholder:text-text-secondary/50 focus:border-primary focus:ring-1 focus:ring-primary',
        search:
          'bg-card-graphite border border-border-dark text-white placeholder:text-text-secondary focus:bg-background-dark focus:border-primary focus:ring-1 focus:ring-primary',
        error:
          'bg-card-graphite border-2 border-red-500 text-white placeholder:text-text-secondary/50 focus:border-red-600 focus:ring-1 focus:ring-red-500',
      },
      inputSize: {
        sm: 'px-3 py-2 text-xs rounded-lg',
        md: 'px-4 py-3 text-sm rounded-lg',
        lg: 'px-4 py-3 text-base rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'md',
    },
  }
)

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerClassName,
      variant,
      inputSize,
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      fullWidth = true,
      id: providedId,
      ...props
    },
    ref
  ) => {
    const generatedId = useId()
    const id = providedId || generatedId
    const hasError = Boolean(error)
    const effectiveVariant = hasError ? 'error' : variant

    return (
      <div className={cn('flex flex-col gap-2', fullWidth && 'w-full', containerClassName)}>
        {label && (
          <label
            htmlFor={id}
            className="text-xs font-bold text-text-secondary uppercase tracking-wider"
          >
            {label}
          </label>
        )}

        <div className="relative group">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-text-secondary group-focus-within:text-primary transition-colors">
                {leftIcon}
              </span>
            </div>
          )}

          <input
            ref={ref}
            id={id}
            className={cn(
              inputVariants({ variant: effectiveVariant, inputSize }),
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              className
            )}
            aria-invalid={hasError}
            aria-describedby={
              error ? `${id}-error` : helperText ? `${id}-helper` : undefined
            }
            {...props}
          />

          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-text-secondary">
                {rightIcon}
              </span>
            </div>
          )}
        </div>

        {error && (
          <p id={`${id}-error`} className="text-xs text-red-400" role="alert">
            {error}
          </p>
        )}

        {helperText && !error && (
          <p id={`${id}-helper`} className="text-xs text-text-secondary">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
