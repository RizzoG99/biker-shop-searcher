import type { FilterCriteria } from '@/lib/types/outfit'

export interface FilterModalProps {
  /** Whether the modal is open */
  isOpen: boolean
  /** Callback when modal is closed */
  onClose: () => void
  /** Initial filter values */
  initialFilters: FilterCriteria
  /** Callback when filters are applied */
  onApply: (filters: FilterCriteria) => void
}
