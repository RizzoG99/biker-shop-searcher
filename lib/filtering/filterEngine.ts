/**
 * Filtering Engine for Outfit Builder
 * Implements sophisticated scoring algorithm to match products to user criteria
 */

import type { FilterCriteria, OutfitBuilderResult, Outfit, OutfitTier } from '@/lib/types/outfit'
import type { Product, ProductCategory } from '@/lib/types/product'

/**
 * Certification score mapping for quality assessment
 * Higher scores indicate better/stricter certifications
 */
const CERT_SCORES: Record<string, number> = {
  FIM: 15, // Racing standard
  SNELL: 12, // Premium helmet standard
  CE2: 10, // CE Level 2 armor
  DOT: 5, // Basic helmet standard
  CE: 5, // Basic CE armor
  CE1: 5, // CE Level 1 armor
}

/**
 * Budget distribution across tiers
 * Entry: 40% of max budget (budget-conscious)
 * Rider's Choice: 100% of max budget (sweet spot)
 * Pro: 200% of max budget (premium tier)
 */
const BUDGET_DISTRIBUTION = {
  entry: (maxBudget: number) => maxBudget * 0.4,
  'riders-choice': (maxBudget: number) => maxBudget,
  pro: (maxBudget: number) => maxBudget * 2.0,
} as const

/**
 * Tier display configuration
 */
const TIER_CONFIG: Record<OutfitTier, { name: string; badge: string; cta: string }> = {
  entry: {
    name: 'Entry Spec',
    badge: 'Value',
    cta: 'Shop Entry Spec',
  },
  'riders-choice': {
    name: "Rider's Choice",
    badge: 'Best Match',
    cta: 'Shop This Loadout',
  },
  pro: {
    name: 'Pro Spec',
    badge: 'Premium',
    cta: 'Shop Pro Spec',
  },
}

/**
 * Calculate weighted score for a product based on filter criteria
 *
 * Scoring breakdown:
 * - Color Match: 20 points
 * - Riding Style Match: 30 points
 * - Usage Context Match: 25 points
 * - Certification Quality: 15 points max
 * - Weather Match: 10 points
 *
 * Total possible: 100 points
 *
 * @param product Product to score
 * @param criteria Filter criteria to match against
 * @returns Score from 0-100
 */
function scoreProduct(product: Product, criteria: FilterCriteria): number {
  let score = 0

  // Color Match (20 points)
  if (product.color && product.color === criteria.color) {
    score += 20
  }

  // Riding Style Match (30 points)
  if (product.ridingStyles?.includes(criteria.ridingStyle)) {
    score += 30
  }

  // Usage Context Match (25 points)
  // Score proportionally based on how many contexts match
  if (criteria.usageContext && criteria.usageContext.length > 0 && product.usageContexts) {
    const matchedContexts = criteria.usageContext.filter((ctx) =>
      product.usageContexts?.includes(ctx)
    ).length
    const matchRatio = matchedContexts / criteria.usageContext.length
    score += matchRatio * 25
  }

  // Certification Quality (15 points max)
  // Pick the best certification score
  const certScores = product.certifications.map((cert) => CERT_SCORES[cert.type] ?? 0)
  const maxCertScore = certScores.length > 0 ? Math.max(...certScores) : 0
  score += maxCertScore

  // Weather Match (10 points)
  // Match weather conditions to material specifications
  if (criteria.weather === 'All-Weather') {
    if (product.specifications.includes('Textile') || product.specifications.includes('Waterproof')) {
      score += 10
    }
  } else if (criteria.weather === 'Summer') {
    if (product.specifications.includes('Ventilated') || !product.specifications.includes('Waterproof')) {
      score += 10
    }
  } else if (criteria.weather === 'Winter') {
    if (product.specifications.includes('Thermal') || product.specifications.includes('Insulated')) {
      score += 10
    }
  } else if (criteria.weather === 'Rain') {
    if (product.specifications.includes('Waterproof') || product.specifications.includes('Textile')) {
      score += 10
    }
  }

  return score
}

/**
 * Build an outfit for a specific tier
 *
 * Algorithm:
 * 1. Filter products by budget tier (±20% tolerance)
 * 2. Score all products using weighted scoring
 * 3. Select one product per category (helmet, jacket, gloves, boots)
 * 4. Pick highest-scoring products that fit budget
 * 5. Ensure unique products (no duplicates across tiers)
 *
 * @param tier Tier level to build
 * @param tierBudget Budget allocated for this tier
 * @param products All available products
 * @param criteria Filter criteria for scoring
 * @param usedProductIds Products already used in other tiers
 * @returns Complete outfit for the tier
 */
function buildTierOutfit(
  tier: OutfitTier,
  tierBudget: number,
  products: Product[],
  criteria: FilterCriteria,
  usedProductIds: Set<string>
): Outfit {
  const requiredCategories: ProductCategory[] = ['helmet', 'jacket', 'gloves', 'boots']
  const selected: Product[] = []

  // Budget tolerance (±20%)
  const budgetTolerance = 0.2
  const maxItemPrice = tierBudget * 0.4 // Max 40% of tier budget per item

  for (const category of requiredCategories) {
    // Get products for this category
    const categoryProducts = products
      .filter((p) => p.category === category)
      .filter((p) => !usedProductIds.has(p.id)) // Exclude already used products
      .filter((p) => p.price <= maxItemPrice * (1 + budgetTolerance)) // Budget filter with tolerance

    if (categoryProducts.length === 0) {
      // Fallback: Allow any product in category if no matches
      const fallback = products
        .filter((p) => p.category === category)
        .filter((p) => !usedProductIds.has(p.id))
        .sort((a, b) => a.price - b.price)[0]

      if (fallback) {
        selected.push(fallback)
        usedProductIds.add(fallback.id)
      }
      continue
    }

    // Score products and sort by score (descending), then by price fit
    const scoredProducts = categoryProducts
      .map((product) => ({
        product,
        score: scoreProduct(product, criteria),
        priceFit: 1 - Math.abs(product.price - maxItemPrice) / maxItemPrice, // How well price fits budget
      }))
      .sort((a, b) => {
        // Primary sort: score (descending)
        if (a.score !== b.score) return b.score - a.score
        // Secondary sort: price fit (descending)
        return b.priceFit - a.priceFit
      })

    // Select the best product
    const bestProduct = scoredProducts[0].product
    selected.push(bestProduct)
    usedProductIds.add(bestProduct.id)
  }

  // Calculate total price
  const totalPrice = selected.reduce((sum, product) => sum + product.price, 0)

  // Get tier configuration
  const config = TIER_CONFIG[tier]

  return {
    id: `${tier}-outfit`,
    tier,
    tierName: config.name,
    totalPrice,
    badge: config.badge,
    isRecommended: tier === 'riders-choice',
    products: selected,
    ctaText: config.cta,
  }
}

/**
 * Generate outfit recommendations based on filter criteria
 *
 * Main entry point for filtering engine. Takes user's filter criteria
 * and generates 3 outfit tiers (Entry, Rider's Choice, Pro) with products
 * that best match the criteria using sophisticated scoring algorithm.
 *
 * @param criteria User's filter criteria (riding style, budget, color, etc.)
 * @param allProducts All available products to choose from
 * @returns Complete outfit builder result with 3 tiers
 *
 * @example
 * ```typescript
 * const criteria: FilterCriteria = {
 *   budgetRange: '$500 - $1500',
 *   budgetMin: 500,
 *   budgetMax: 1500,
 *   color: 'Black',
 *   ridingStyle: 'Sport Touring',
 *   weather: 'All-Weather',
 *   usageContext: ['City Commute', 'Long Trip']
 * }
 *
 * const result = generateOutfits(criteria, allProducts)
 * // Returns 3 tiers: Entry (~$600), Rider's Choice (~$1500), Pro (~$3000)
 * ```
 */
export function generateOutfits(
  criteria: FilterCriteria,
  allProducts: Product[]
): OutfitBuilderResult {
  // Track which products have been used to avoid duplicates
  const usedProductIds = new Set<string>()

  // Calculate tier budgets based on user's max budget
  const tierBudgets = {
    entry: BUDGET_DISTRIBUTION.entry(criteria.budgetMax),
    'riders-choice': BUDGET_DISTRIBUTION['riders-choice'](criteria.budgetMax),
    pro: BUDGET_DISTRIBUTION.pro(criteria.budgetMax),
  }

  // Build outfits for each tier
  // Build in order: Rider's Choice (best match) → Entry → Pro
  // This ensures best products go to the recommended tier first
  const ridersChoice = buildTierOutfit(
    'riders-choice',
    tierBudgets['riders-choice'],
    allProducts,
    criteria,
    usedProductIds
  )

  const entry = buildTierOutfit(
    'entry',
    tierBudgets.entry,
    allProducts,
    criteria,
    usedProductIds
  )

  const pro = buildTierOutfit('pro', tierBudgets.pro, allProducts, criteria, usedProductIds)

  return {
    filters: criteria,
    outfits: [entry, ridersChoice, pro],
  }
}
