import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { BadgeProps } from './Badge.types'

export const badgeVariants = cva(
  'inline-flex items-center font-medium transition-colors',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-white',
        secondary:
          'bg-card-dark border border-border-dark text-text-secondary',
        success:
          'bg-green-600 text-white',
        accent:
          'bg-accent text-white',
        outline:
          'border border-primary text-primary bg-transparent',
        certification:
          'bg-white/5 text-white border border-white/20',
      },
      size: {
        sm: 'px-2.5 py-0.5 text-xs gap-1 rounded-full',
        md: 'px-3 py-1 text-sm gap-1.5 rounded-full',
        lg: 'px-4 py-2 text-base gap-2 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant,
  size,
  children,
  icon,
  iconPosition = 'left',
  ...props
}) => {
  return (
    <span
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="material-symbols-outlined text-base">
          {icon}
        </span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="material-symbols-outlined text-base">
          {icon}
        </span>
      )}
    </span>
  )
}

Badge.displayName = 'Badge'
