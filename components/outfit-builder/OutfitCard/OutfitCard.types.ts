import { Outfit } from '@/lib/types'

export interface OutfitCardProps {
  /** Outfit data to display */
  outfit: Outfit

  /** Click handler for main CTA button */
  onCtaClick: (outfitId: string) => void

  /** Click handler for individual product */
  onProductClick: (productId: string) => void

  /** Additional CSS classes */
  className?: string
}
