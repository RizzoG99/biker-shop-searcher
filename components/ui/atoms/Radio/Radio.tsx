'use client'

import React, { createContext, useContext, useCallback, useRef, useEffect } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import type { RadioProps, RadioGroupProps } from './Radio.types'

/**
 * Radio variant styles using CVA
 */
const radioVariants = cva('', {
  variants: {
    variant: {
      default: 'flex items-center gap-3 cursor-pointer group',
      'icon-card':
        'flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border-2 cursor-pointer transition-all duration-200',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

/**
 * Radio indicator (circle) styles
 */
const radioIndicatorVariants = cva(
  'flex items-center justify-center rounded-full border-2 transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'size-5',
        'icon-card': 'hidden', // Icon-card doesn't show the circle
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
 * Radio card styles (for icon-card variant)
 */
const radioCardVariants = cva('', {
  variants: {
    checked: {
      true: 'border-primary bg-primary/10 shadow-lg shadow-primary/20',
      false: 'border-border-dark bg-card-dark hover:border-text-secondary/50',
    },
  },
})

/**
 * Context for RadioGroup
 */
interface RadioGroupContextValue {
  name: string
  value: string
  onChange: (value: string) => void
}

const RadioGroupContext = createContext<RadioGroupContextValue | undefined>(undefined)

/**
 * Radio Component
 *
 * A customizable radio button with two variants:
 * - default: Standard radio with label
 * - icon-card: Large card with icon (for riding style selection)
 *
 * Should be used within RadioGroup for proper state management
 * and keyboard navigation.
 */
export function Radio({
  name,
  value,
  checked: controlledChecked,
  onChange: controlledOnChange,
  label,
  icon,
  variant = 'default',
  disabled = false,
  className,
}: RadioProps) {
  const groupContext = useContext(RadioGroupContext)
  const inputRef = useRef<HTMLInputElement>(null)

  // Use group context if available, otherwise use controlled props
  const isChecked = groupContext ? groupContext.value === value : controlledChecked ?? false
  const handleChange = groupContext ? groupContext.onChange : controlledOnChange
  const radioName = groupContext ? groupContext.name : name

  const handleClick = useCallback(() => {
    if (!disabled && handleChange) {
      handleChange(value)
    }
  }, [disabled, handleChange, value])

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
          radioVariants({ variant }),
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
      >
        <input
          ref={inputRef}
          type="radio"
          name={radioName}
          value={value}
          checked={isChecked}
          onChange={() => handleChange?.(value)}
          disabled={disabled}
          className="sr-only"
        />
        <div className={radioIndicatorVariants({ variant, checked: isChecked })}>
          {isChecked && <div className="size-2 bg-white rounded-full" />}
        </div>
        <span className={cn('text-sm', isChecked ? 'text-white font-medium' : 'text-text-secondary')}>
          {label}
        </span>
      </label>
    )
  }

  // Icon-card variant
  return (
    <label
      className={cn(
        radioVariants({ variant }),
        radioCardVariants({ checked: isChecked }),
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={disabled ? -1 : 0}
      role="radio"
      aria-checked={isChecked}
      aria-disabled={disabled}
    >
      <input
        ref={inputRef}
        type="radio"
        name={radioName}
        value={value}
        checked={isChecked}
        onChange={() => handleChange?.(value)}
        disabled={disabled}
        className="sr-only"
        tabIndex={-1}
      />
      {icon && (
        <span
          className={cn(
            'material-symbols-outlined text-5xl transition-colors',
            isChecked ? 'text-primary' : 'text-text-secondary'
          )}
        >
          {icon}
        </span>
      )}
      <span
        className={cn(
          'text-sm font-medium text-center transition-colors',
          isChecked ? 'text-white' : 'text-text-secondary'
        )}
      >
        {label}
      </span>
    </label>
  )
}

/**
 * RadioGroup Component
 *
 * Wrapper component that manages radio state and provides
 * keyboard navigation (arrow keys) between radio options.
 *
 * @example
 * ```tsx
 * <RadioGroup name="size" value={size} onChange={setSize}>
 *   <Radio value="small" label="Small" />
 *   <Radio value="medium" label="Medium" />
 *   <Radio value="large" label="Large" />
 * </RadioGroup>
 * ```
 */
export function RadioGroup({ name, value, onChange, children, className }: RadioGroupProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  /**
   * Handle arrow key navigation
   * Up/Left: Select previous radio
   * Down/Right: Select next radio
   */
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        return
      }

      e.preventDefault()

      // Get all radio inputs in the group
      const radios = containerRef.current?.querySelectorAll<HTMLElement>(
        '[role="radio"], input[type="radio"]'
      )
      if (!radios || radios.length === 0) return

      const radioArray = Array.from(radios)
      const currentIndex = radioArray.findIndex((radio) => {
        const input = radio.tagName === 'INPUT' ? radio : radio.querySelector('input')
        return input && (input as HTMLInputElement).checked
      })

      let nextIndex: number
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        nextIndex = (currentIndex + 1) % radioArray.length
      } else {
        nextIndex = currentIndex - 1 < 0 ? radioArray.length - 1 : currentIndex - 1
      }

      const nextRadio = radioArray[nextIndex]
      const nextInput =
        nextRadio.tagName === 'INPUT' ? nextRadio : nextRadio.querySelector('input')

      if (nextInput) {
        const radioValue = (nextInput as HTMLInputElement).value
        onChange(radioValue)
        // Focus the next radio for keyboard navigation
        if (nextRadio.tagName === 'LABEL' && nextRadio.hasAttribute('role')) {
          nextRadio.focus()
        } else {
          nextInput.focus()
        }
      }
    },
    [onChange]
  )

  return (
    <RadioGroupContext.Provider value={{ name, value, onChange }}>
      <div
        ref={containerRef}
        className={className}
        role="radiogroup"
        onKeyDown={handleKeyDown}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  )
}
