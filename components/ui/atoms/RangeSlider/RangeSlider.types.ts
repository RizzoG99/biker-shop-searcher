export interface RangeSliderProps {
  /** Minimum value */
  min: number
  /** Maximum value */
  max: number
  /** Step increment */
  step: number
  /** Current value */
  value: number
  /** Callback when value changes */
  onChange: (value: number) => void
  /** Optional label above slider */
  label?: string
  /** Optional function to format the displayed value */
  formatValue?: (value: number) => string
  /** Optional label for minimum value (e.g., "Entry ($200)") */
  minLabel?: string
  /** Optional label for maximum value (e.g., "Premium ($3k+)") */
  maxLabel?: string
  /** Whether to show value badge above thumb */
  showValueBadge?: boolean
  /** Custom class name */
  className?: string
}
