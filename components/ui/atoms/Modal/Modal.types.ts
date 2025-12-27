export interface ModalProps {
  /** Whether the modal is open */
  isOpen: boolean
  /** Callback fired when modal should close */
  onClose: () => void
  /** Modal title (displayed in header) */
  title?: string
  /** Modal subtitle (displayed below title) */
  subtitle?: string
  /** Modal content */
  children: React.ReactNode
  /** Optional footer content (typically actions) */
  footer?: React.ReactNode
  /** Modal size variant */
  size?: 'default' | 'large' | 'fullscreen'
  /** Allow closing by clicking backdrop */
  closeOnBackdrop?: boolean
  /** Allow closing with ESC key */
  closeOnEscape?: boolean
  /** Show X close button in header */
  showCloseButton?: boolean
  /** Custom class name for modal content */
  className?: string
}
