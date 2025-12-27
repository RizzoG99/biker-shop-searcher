'use client'

import React, { useCallback } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import type { CheckboxProps } from './Checkbox.types'

/**
 * Checkbox container variant styles using CVA
 */
const checkboxVariants = cva('', {
  variants: {
    variant: {
      default: 'flex items-center gap-3 cursor-pointer group',
      card: 'flex flex-col items-center justify-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

/**
 * Checkbox indicator (square) styles
 */
const checkboxIndicatorVariants = cva(
  'flex items-center justify-center rounded border-2 transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'size-5',
        card: 'hidden', // Card variant doesn't show the square
      },
      checked: {
        true: 'border-primary bg-primary',
        false: 'border-text-secondary/50 bg-transparent group-hover:border-text-secondary',
      },
    },
    defaultVariants: {
      variant: 'default',
      checked: false,
    },
  }
)

/**
 * Checkbox card styles (for card variant)
 */
const checkboxCardVariants = cva('', {
  variants: {
    checked: {
      true: 'border-primary bg-primary/10 shadow-md shadow-primary/20',
      false: 'border-border-dark bg-card-dark hover:border-text-secondary/50',
    },
  },
})

/**
 * Checkbox Component
 *
 * A customizable checkbox with two variants:
 * - default: Standard checkbox with label
 * - card: Large card with icon (for usage context selection)
 *
 * Supports keyboard navigation and WCAG 2.2 AA accessibility.
 *
 * @example
 * ```tsx
 * // Default variant
 * <Checkbox
 *   checked={termsAccepted}
 *   onChange={setTermsAccepted}
 *   label="I accept the terms and conditions"
 * />
 *
 * // Card variant with icon
 * <Checkbox
 *   checked={selectedContexts.includes('City Commute')}
 *   onChange={(checked) => toggleContext('City Commute', checked)}
 *   label="City Commute"
 *   icon="commute"
 *   variant="card"
 * />
 * ```
 */
export function Checkbox({
  checked = false,
  onChange,
  label,
  icon,
  variant = 'default',
  disabled = false,
  className,
}: CheckboxProps) {
  const handleClick = useCallback(() => {
    if (!disabled && onChange) {
      onChange(!checked)
    }
  }, [disabled, onChange, checked])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        handleClick()
      }
    },
    [handleClick]
  )

  // Default variant
  if (variant === 'default') {
    return (
      <label
        className={cn(
          checkboxVariants({ variant }),
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onChange?.(!checked)}
          disabled={disabled}
          className="sr-only"
        />
        <div className={checkboxIndicatorVariants({ variant, checked })}>
          {checked && (
            <span className="material-symbols-outlined text-white text-base leading-none">
              check
            </span>
          )}
        </div>
        <span className={cn('text-sm', checked ? 'text-white font-medium' : 'text-text-secondary')}>
          {label}
        </span>
      </label>
    )
  }

  // Card variant
  return (
    <label
      className={cn(
        checkboxVariants({ variant }),
        checkboxCardVariants({ checked }),
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={disabled ? -1 : 0}
      role="checkbox"
      aria-checked={checked}
      aria-disabled={disabled}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange?.(!checked)}
        disabled={disabled}
        className="sr-only"
        tabIndex={-1}
      />
      {icon && (
        <span
          className={cn(
            'material-symbols-outlined text-4xl transition-colors',
            checked ? 'text-primary' : 'text-text-secondary'
          )}
        >
          {icon}
        </span>
      )}
      <span
        className={cn(
          'text-sm font-medium text-center transition-colors',
          checked ? 'text-white' : 'text-text-secondary'
        )}
      >
        {label}
      </span>
    </label>
  )
}
