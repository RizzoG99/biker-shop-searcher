export interface RadioProps {
  /** Radio name attribute (groups radios together). Optional when used inside RadioGroup. */
  name?: string
  /** Radio value */
  value: string
  /** Whether this radio is checked */
  checked?: boolean
  /** Callback when radio is selected */
  onChange?: (value: string) => void
  /** Radio label text */
  label: string
  /** Optional Material Symbol icon name */
  icon?: string
  /** Visual variant */
  variant?: 'default' | 'icon-card'
  /** Whether radio is disabled */
  disabled?: boolean
  /** Custom class name */
  className?: string
}

export interface RadioGroupProps {
  /** Radio group name (passed to all child radios) */
  name: string
  /** Currently selected value */
  value: string
  /** Callback when selection changes */
  onChange: (value: string) => void
  /** Radio elements */
  children: React.ReactNode
  /** Custom class name */
  className?: string
}
