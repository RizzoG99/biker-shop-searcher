import { FilterCriteria } from '@/lib/types'

export interface FilterTagsProps {
  /** Filter criteria to display */
  filters: FilterCriteria

  /** Click handler for edit button */
  onEdit: () => void

  /** Additional CSS classes */
  className?: string
}
