import { Product } from '@/lib/types'

export interface ProductListItemProps {
  /** Product data to display */
  product: Product

  /** Click handler */
  onClick: (productId: string) => void

  /** Whether this is the recommended/highlighted item */
  isHighlighted?: boolean

  /** Size variant (affects image size) */
  size?: 'sm' | 'md'

  /** Additional CSS classes */
  className?: string
}
