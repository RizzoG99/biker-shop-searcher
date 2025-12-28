import { OutfitBuilderResult } from '@/lib/types'
import { entryProducts, ridersChoiceProducts, proProducts } from './products'

/**
 * Mock outfit configurations for Sport Touring riding style
 * Filter criteria: Sport Touring, $500-$1500 budget, All-Weather
 */
export const sportTouringOutfits: OutfitBuilderResult = {
  filters: {
    budgetRange: '$500 - $1500',
    budgetMin: 500,
    budgetMax: 1500,
    color: 'Black/Red',
    ridingStyle: 'Sport Touring',
    weather: 'All-Weather',
  },
  outfits: [
    {
      id: 'entry-spec',
      tier: 'entry',
      tierName: 'Entry Spec',
      totalPrice: 559, // HJC i70 ($199) + Joe Rocket Atomic ($160) + Scorpion Gloves ($100) + TCX Boots ($100)
      badge: 'Value',
      isRecommended: false,
      products: entryProducts,
      ctaText: 'Shop Entry Spec',
    },
    {
      id: 'riders-choice',
      tier: 'riders-choice',
      tierName: "Rider's Choice",
      totalPrice: 1350, // Shoei RF-1400 ($530) + Alpinestars Jacket ($450) + SP-8 Gloves ($150) + SMX-6 Boots ($220)
      badge: 'Best Match',
      isRecommended: true,
      products: ridersChoiceProducts,
      ctaText: 'Shop This Loadout',
    },
    {
      id: 'pro-spec',
      tier: 'pro',
      tierName: 'Pro Spec',
      totalPrice: 3100, // AGV Pista GP RR ($1400) + Dainese Racing 4 ($950) + Full Metal 6 ($250) + Supertech R ($500)
      badge: 'Premium',
      isRecommended: false,
      products: proProducts,
      ctaText: 'Shop Pro Spec',
    },
  ],
}

/**
 * Export as default for easy import
 */
export default sportTouringOutfits
