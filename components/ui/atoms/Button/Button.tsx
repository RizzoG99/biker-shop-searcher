import React, { forwardRef } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { ButtonProps } from './Button.types'

export const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center gap-2 font-bold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-white hover:bg-orange-600 active:scale-95 shadow-lg shadow-orange-900/20',
        secondary:
          'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white active:scale-95',
        accent:
          'bg-accent text-white hover:bg-purple-700 active:scale-95',
        ghost:
          'bg-transparent text-white hover:bg-white/10 active:scale-95',
        icon:
          'bg-card-dark border border-border-dark text-text-secondary hover:text-primary hover:border-primary',
      },
      size: {
        sm: 'h-8 px-4 text-xs rounded-full',
        md: 'h-10 px-6 text-sm rounded-full',
        lg: 'h-12 px-8 text-sm rounded-full',
        icon: 'size-10 rounded-full',
        'icon-sm': 'size-8 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      children,
      isLoading,
      leftIcon,
      rightIcon,
      fullWidth,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size }),
          fullWidth && 'w-full',
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <span
              className="material-symbols-outlined animate-spin"
              aria-hidden="true"
            >
              progress_activity
            </span>
            <span className="sr-only">Loading</span>
          </>
        ) : (
          <>
            {leftIcon && (
              <span className="material-symbols-outlined text-base">
                {leftIcon}
              </span>
            )}
            <span className="truncate">{children}</span>
            {rightIcon && (
              <span className="material-symbols-outlined text-base">
                {rightIcon}
              </span>
            )}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
