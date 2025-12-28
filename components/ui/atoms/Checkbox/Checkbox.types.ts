export interface CheckboxProps {
  /** Whether the checkbox is checked */
  checked?: boolean
  /** Callback when checkbox state changes */
  onChange?: (checked: boolean) => void
  /** Checkbox label text */
  label: string
  /** Optional Material Symbol icon name */
  icon?: string
  /** Visual variant */
  variant?: 'default' | 'card'
  /** Whether checkbox is disabled */
  disabled?: boolean
  /** Custom class name */
  className?: string
}
