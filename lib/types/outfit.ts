import { Product } from './product'

/**
 * Outfit-related type definitions for Outfit Builder
 */

/**
 * Pricing tier types
 */
export type OutfitTier = 'entry' | 'riders-choice' | 'pro'

/**
 * Riding style options for outfit customization
 */
export type RidingStyle = 'Sport Touring' | 'Adventure' | 'Street' | 'Track' | 'Cruiser'

/**
 * Weather condition options for outfit customization
 */
export type WeatherCondition = 'All-Weather' | 'Summer' | 'Winter' | 'Rain'

/**
 * Usage context options for outfit customization
 */
export type UsageContext = 'City Commute' | 'Long Trip' | 'Off-road' | 'Track Day'

/**
 * Filter criteria used to generate outfit recommendations
 */
export interface FilterCriteria {
  /** Budget range display string (e.g., "$500 - $1500") */
  budgetRange: string

  /** Numeric minimum budget for filtering */
  budgetMin: number

  /** Numeric maximum budget for filtering */
  budgetMax: number

  /** Color preference */
  color: string

  /** Riding style */
  ridingStyle: RidingStyle

  /** Weather condition */
  weather: WeatherCondition

  /** Usage contexts (multi-select) */
  usageContext?: UsageContext[]
}

/**
 * Complete outfit configuration for one pricing tier
 */
export interface Outfit {
  /** Unique outfit identifier */
  id: string

  /** Tier level */
  tier: OutfitTier

  /** Display name (e.g., "Entry Spec", "Rider's Choice", "Pro Spec") */
  tierName: string

  /** Total price for all products in outfit */
  totalPrice: number

  /** Badge text (e.g., "Value", "Best Match", "Premium") */
  badge: string

  /** Whether this is the recommended/highlighted tier */
  isRecommended: boolean

  /** Products included in this outfit */
  products: Product[]

  /** CTA button text */
  ctaText: string
}

/**
 * Complete outfit builder result set with all tiers
 */
export interface OutfitBuilderResult {
  /** Filter criteria that generated these results */
  filters: FilterCriteria

  /** All outfit tiers (usually 3: entry, riders-choice, pro) */
  outfits: Outfit[]
}
