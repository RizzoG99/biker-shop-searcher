'use client'

import React, { useCallback, useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { useDebounce } from '@/lib/hooks/useDebounce'
import type { RangeSliderProps } from './RangeSlider.types'

/**
 * RangeSlider Component
 *
 * A customizable range slider with value badge, custom styling,
 * and keyboard navigation support.
 *
 * Features:
 * - Custom thumb with primary color and glow effect
 * - Value badge that displays formatted value
 * - Min/max labels below slider
 * - Full keyboard support (arrow keys)
 * - WCAG 2.2 AA compliant
 *
 * @example
 * ```tsx
 * // Basic usage
 * <RangeSlider
 *   min={0}
 *   max={100}
 *   step={1}
 *   value={50}
 *   onChange={setValue}
 *   label="Volume"
 * />
 *
 * // Budget slider with formatting
 * <RangeSlider
 *   min={0}
 *   max={3000}
 *   step={100}
 *   value={1500}
 *   onChange={setBudget}
 *   label="Maximum Budget"
 *   formatValue={(val) => `$${val}`}
 *   minLabel="Entry ($0)"
 *   maxLabel="Premium ($3k+)"
 * />
 * ```
 */
export function RangeSlider({
  min,
  max,
  step,
  value,
  onChange,
  label,
  formatValue = (val) => String(val),
  minLabel,
  maxLabel,
  showValueBadge = true,
  className,
}: RangeSliderProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  // Local state for immediate slider value (smooth UI feedback)
  const [localValue, setLocalValue] = useState(value)

  // Debounce the local value before propagating to parent (300ms)
  // This batches rapid slider changes and reduces parent re-renders
  const debouncedValue = useDebounce(localValue, 300)

  // Sync local value with prop value when it changes externally
  useEffect(() => {
    setLocalValue(value)
  }, [value])

  // Propagate debounced value to parent onChange
  useEffect(() => {
    if (debouncedValue !== value) {
      onChange(debouncedValue)
    }
  }, [debouncedValue, onChange, value])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // Update local value immediately for smooth UI
      setLocalValue(Number(e.target.value))
    },
    []
  )

  const handleFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  const handleMouseDown = useCallback(() => {
    setIsDragging(true)
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Calculate percentage for styling based on local value (immediate feedback)
  const percentage = ((localValue - min) / (max - min)) * 100

  return (
    <div className={cn('w-full', className)}>
      {/* Label */}
      {label && (
        <label className="block text-sm font-medium text-white mb-2">
          {label}
        </label>
      )}

      {/* Slider container */}
      <div className="relative pt-8 pb-2">
        {/* Value badge */}
        {showValueBadge && (
          <div
            className="absolute top-0 -translate-x-1/2 transition-all duration-150"
            style={{ left: `${percentage}%` }}
          >
            <div
              className={cn(
                'px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-150',
                isFocused || isDragging
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-110'
                  : 'bg-card-dark text-text-secondary border border-border-dark'
              )}
            >
              {formatValue(localValue)}
            </div>
            {/* Arrow pointing down */}
            <div
              className={cn(
                'absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 transition-colors duration-150',
                'border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent',
                isFocused || isDragging
                  ? 'border-t-primary'
                  : 'border-t-border-dark'
              )}
            />
          </div>
        )}

        {/* Range input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={localValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={localValue}
          aria-label={label}
          className={cn(
            'w-full h-2 rounded-full appearance-none cursor-pointer',
            'bg-border-dark',
            // Track fill (filled portion)
            'range-slider',
            // Focus styles
            'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark',
            // Thumb styles (handled via CSS)
            '[&::-webkit-slider-thumb]:appearance-none',
            '[&::-webkit-slider-thumb]:size-5',
            '[&::-webkit-slider-thumb]:rounded-full',
            '[&::-webkit-slider-thumb]:bg-primary',
            '[&::-webkit-slider-thumb]:cursor-pointer',
            '[&::-webkit-slider-thumb]:transition-all',
            '[&::-webkit-slider-thumb]:duration-150',
            isFocused || isDragging
              ? '[&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(242,108,13,0.2)]'
              : '[&::-webkit-slider-thumb]:shadow-[0_0_0_0_rgba(242,108,13,0)]',
            // Firefox thumb styles
            '[&::-moz-range-thumb]:appearance-none',
            '[&::-moz-range-thumb]:size-5',
            '[&::-moz-range-thumb]:rounded-full',
            '[&::-moz-range-thumb]:bg-primary',
            '[&::-moz-range-thumb]:border-0',
            '[&::-moz-range-thumb]:cursor-pointer',
            '[&::-moz-range-thumb]:transition-all',
            '[&::-moz-range-thumb]:duration-150',
            isFocused || isDragging
              ? '[&::-moz-range-thumb]:shadow-[0_0_0_4px_rgba(242,108,13,0.2)]'
              : '[&::-moz-range-thumb]:shadow-[0_0_0_0_rgba(242,108,13,0)]'
          )}
          style={{
            background: `linear-gradient(to right, #f26c0d 0%, #f26c0d ${percentage}%, #392f28 ${percentage}%, #392f28 100%)`,
          }}
        />

        {/* Min/Max labels */}
        {(minLabel || maxLabel) && (
          <div className="flex justify-between mt-2">
            <span className="text-xs text-text-secondary">{minLabel || String(min)}</span>
            <span className="text-xs text-text-secondary">{maxLabel || String(max)}</span>
          </div>
        )}
      </div>
    </div>
  )
}
