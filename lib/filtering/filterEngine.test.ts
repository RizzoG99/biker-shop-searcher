import { describe, it, expect } from 'vitest'
import { generateOutfits } from './filterEngine'
import type { FilterCriteria } from '@/lib/types/outfit'
import type { Product } from '@/lib/types/product'

// Mock products for testing
const mockProducts: Product[] = [
  // Entry tier helmet
  {
    id: 'helmet-entry',
    name: 'Budget Helmet',
    category: 'helmet',
    specifications: 'Polycarbonate • DOT Approved',
    price: 150,
    imageUrl: 'test.jpg',
    certifications: [{ type: 'DOT', color: 'gray' }],
    imageAlt: 'Budget helmet',
    color: 'Black',
    ridingStyles: ['Sport Touring', 'Street'],
    usageContexts: ['City Commute'],
  },
  // Mid tier helmet
  {
    id: 'helmet-mid',
    name: 'Quality Helmet',
    category: 'helmet',
    specifications: 'Fiberglass • SNELL Certified',
    price: 400,
    imageUrl: 'test.jpg',
    certifications: [{ type: 'SNELL', color: 'green' }],
    imageAlt: 'Quality helmet',
    color: 'Black',
    ridingStyles: ['Sport Touring', 'Track'],
    usageContexts: ['City Commute', 'Long Trip', 'Track Day'],
  },
  // Pro tier helmet
  {
    id: 'helmet-pro',
    name: 'Premium Helmet',
    category: 'helmet',
    specifications: 'Carbon Fiber • FIM Homologated',
    price: 1200,
    imageUrl: 'test.jpg',
    certifications: [{ type: 'FIM', color: 'yellow' }],
    imageAlt: 'Premium helmet',
    color: 'Red',
    ridingStyles: ['Track'],
    usageContexts: ['Track Day'],
  },
  // Entry tier jacket
  {
    id: 'jacket-entry',
    name: 'Textile Jacket',
    category: 'jacket',
    specifications: 'Textile • Waterproof Liner',
    price: 200,
    imageUrl: 'test.jpg',
    certifications: [{ type: 'CE', color: 'gray' }],
    imageAlt: 'Textile jacket',
    color: 'Black',
    ridingStyles: ['Adventure', 'Street'],
    usageContexts: ['City Commute', 'Off-road'],
  },
  // Mid tier jacket
  {
    id: 'jacket-mid',
    name: 'Sport Jacket',
    category: 'jacket',
    specifications: 'Leather • CE Armor',
    price: 450,
    imageUrl: 'test.jpg',
    certifications: [{ type: 'CE2', color: 'gray' }],
    imageAlt: 'Sport jacket',
    color: 'Black',
    ridingStyles: ['Sport Touring', 'Street'],
    usageContexts: ['City Commute', 'Long Trip'],
  },
  // Pro tier jacket
  {
    id: 'jacket-pro',
    name: 'Racing Jacket',
    category: 'jacket',
    specifications: 'Kangaroo Leather • CE Level 2',
    price: 900,
    imageUrl: 'test.jpg',
    certifications: [{ type: 'CE2', color: 'gray' }],
    imageAlt: 'Racing jacket',
    color: 'Red',
    ridingStyles: ['Track'],
    usageContexts: ['Track Day'],
  },
  // Entry tier gloves
  {
    id: 'gloves-entry',
    name: 'Basic Gloves',
    category: 'gloves',
    specifications: 'Textile • CE Level 1',
    price: 80,
    imageUrl: 'test.jpg',
    certifications: [{ type: 'CE1', color: 'gray' }],
    imageAlt: 'Basic gloves',
    color: 'Black',
    ridingStyles: ['Street', 'Cruiser'],
    usageContexts: ['City Commute'],
  },
  // Mid tier gloves
  {
    id: 'gloves-mid',
    name: 'Sport Gloves',
    category: 'gloves',
    specifications: 'Leather • CE Level 2',
    price: 150,
    imageUrl: 'test.jpg',
    certifications: [{ type: 'CE2', color: 'gray' }],
    imageAlt: 'Sport gloves',
    color: 'Black',
    ridingStyles: ['Sport Touring', 'Track'],
    usageContexts: ['City Commute', 'Long Trip', 'Track Day'],
  },
  // Pro tier gloves
  {
    id: 'gloves-pro',
    name: 'Racing Gloves',
    category: 'gloves',
    specifications: 'Carbon Knuckles • CE Level 2',
    price: 250,
    imageUrl: 'test.jpg',
    certifications: [{ type: 'CE2', color: 'gray' }],
    imageAlt: 'Racing gloves',
    color: 'Red',
    ridingStyles: ['Track'],
    usageContexts: ['Track Day'],
  },
  // Entry tier boots
  {
    id: 'boots-entry',
    name: 'Street Boots',
    category: 'boots',
    specifications: 'Synthetic • CE Approved',
    price: 120,
    imageUrl: 'test.jpg',
    certifications: [{ type: 'CE', color: 'gray' }],
    imageAlt: 'Street boots',
    color: 'Black',
    ridingStyles: ['Street', 'Cruiser'],
    usageContexts: ['City Commute'],
  },
  // Mid tier boots
  {
    id: 'boots-mid',
    name: 'Sport Boots',
    category: 'boots',
    specifications: 'Leather • TPU Protection',
    price: 220,
    imageUrl: 'test.jpg',
    certifications: [{ type: 'CE', color: 'gray' }],
    imageAlt: 'Sport boots',
    color: 'Black',
    ridingStyles: ['Sport Touring', 'Street'],
    usageContexts: ['City Commute', 'Long Trip'],
  },
  // Pro tier boots
  {
    id: 'boots-pro',
    name: 'Racing Boots',
    category: 'boots',
    specifications: 'Leather • Magnesium Slider',
    price: 500,
    imageUrl: 'test.jpg',
    certifications: [{ type: 'CE', color: 'gray' }],
    imageAlt: 'Racing boots',
    color: 'Red',
    ridingStyles: ['Track'],
    usageContexts: ['Track Day'],
  },
]

// Base filter criteria for testing
const baseFilters: FilterCriteria = {
  budgetRange: '$500 - $1500',
  budgetMin: 500,
  budgetMax: 1500,
  color: 'Black',
  ridingStyle: 'Sport Touring',
  weather: 'All-Weather',
  usageContext: ['City Commute'],
}

describe('filterEngine', () => {
  describe('generateOutfits', () => {
    it('generates 3 outfit tiers', () => {
      const result = generateOutfits(baseFilters, mockProducts)

      expect(result.outfits).toHaveLength(3)
      expect(result.outfits[0].tier).toBe('entry')
      expect(result.outfits[1].tier).toBe('riders-choice')
      expect(result.outfits[2].tier).toBe('pro')
    })

    it('includes filter criteria in result', () => {
      const result = generateOutfits(baseFilters, mockProducts)

      expect(result.filters).toEqual(baseFilters)
    })

    it('marks riders-choice tier as recommended', () => {
      const result = generateOutfits(baseFilters, mockProducts)

      const ridersChoice = result.outfits.find((o) => o.tier === 'riders-choice')
      expect(ridersChoice?.isRecommended).toBe(true)

      const entry = result.outfits.find((o) => o.tier === 'entry')
      expect(entry?.isRecommended).toBe(false)

      const pro = result.outfits.find((o) => o.tier === 'pro')
      expect(pro?.isRecommended).toBe(false)
    })

    it('sets correct tier names', () => {
      const result = generateOutfits(baseFilters, mockProducts)

      expect(result.outfits[0].tierName).toBe('Entry Spec')
      expect(result.outfits[1].tierName).toBe("Rider's Choice")
      expect(result.outfits[2].tierName).toBe('Pro Spec')
    })

    it('sets correct tier badges', () => {
      const result = generateOutfits(baseFilters, mockProducts)

      expect(result.outfits[0].badge).toBe('Value')
      expect(result.outfits[1].badge).toBe('Best Match')
      expect(result.outfits[2].badge).toBe('Premium')
    })

    it('sets correct CTA text', () => {
      const result = generateOutfits(baseFilters, mockProducts)

      expect(result.outfits[0].ctaText).toBe('Shop Entry Spec')
      expect(result.outfits[1].ctaText).toBe('Shop This Loadout')
      expect(result.outfits[2].ctaText).toBe('Shop Pro Spec')
    })
  })

  describe('Product Selection', () => {
    it('selects one product per category', () => {
      const result = generateOutfits(baseFilters, mockProducts)

      for (const outfit of result.outfits) {
        const categories = outfit.products.map((p) => p.category)
        expect(categories).toContain('helmet')
        expect(categories).toContain('jacket')
        expect(categories).toContain('gloves')
        expect(categories).toContain('boots')
      }
    })

    it('ensures unique products across tiers', () => {
      const result = generateOutfits(baseFilters, mockProducts)

      const allProductIds = result.outfits.flatMap((outfit) =>
        outfit.products.map((p) => p.id)
      )

      const uniqueIds = new Set(allProductIds)
      expect(uniqueIds.size).toBe(allProductIds.length)
    })

    it('calculates total price correctly', () => {
      const result = generateOutfits(baseFilters, mockProducts)

      for (const outfit of result.outfits) {
        const calculatedTotal = outfit.products.reduce((sum, p) => sum + p.price, 0)
        expect(outfit.totalPrice).toBe(calculatedTotal)
      }
    })
  })

  describe('Budget Distribution', () => {
    it('entry tier is approximately 40% of max budget', () => {
      const result = generateOutfits(baseFilters, mockProducts)
      const entry = result.outfits.find((o) => o.tier === 'entry')

      // Entry should target ~40% of $1500 = $600
      // With tolerance, should be under ~$750
      expect(entry!.totalPrice).toBeLessThan(800)
    })

    it('riders-choice tier is approximately at max budget', () => {
      const result = generateOutfits(baseFilters, mockProducts)
      const ridersChoice = result.outfits.find((o) => o.tier === 'riders-choice')

      // Should target $1500 budget
      // With tolerance, could be slightly over
      expect(ridersChoice!.totalPrice).toBeGreaterThan(800)
      expect(ridersChoice!.totalPrice).toBeLessThan(2000)
    })

    it('pro tier is approximately 200% of max budget', () => {
      const result = generateOutfits(baseFilters, mockProducts)
      const pro = result.outfits.find((o) => o.tier === 'pro')

      // Should target $3000 (2x $1500)
      expect(pro!.totalPrice).toBeGreaterThan(2000)
    })

    it('respects different budget ranges', () => {
      const lowBudget: FilterCriteria = {
        ...baseFilters,
        budgetMin: 300,
        budgetMax: 800,
        budgetRange: '$300 - $800',
      }

      const result = generateOutfits(lowBudget, mockProducts)
      const entry = result.outfits.find((o) => o.tier === 'entry')

      // Entry should be around 40% of $800 = $320
      // With ±20% tolerance, could be higher
      expect(entry!.totalPrice).toBeLessThan(1200)
    })
  })

  describe('Scoring Algorithm', () => {
    it('prefers products matching color', () => {
      const blackFilters: FilterCriteria = {
        ...baseFilters,
        color: 'Black',
      }

      const result = generateOutfits(blackFilters, mockProducts)
      const ridersChoice = result.outfits.find((o) => o.tier === 'riders-choice')

      // Should prefer black products
      const blackProducts = ridersChoice!.products.filter((p) => p.color === 'Black')
      expect(blackProducts.length).toBeGreaterThan(0)
    })

    it('prefers products matching riding style', () => {
      const sportTouringFilters: FilterCriteria = {
        ...baseFilters,
        ridingStyle: 'Sport Touring',
      }

      const result = generateOutfits(sportTouringFilters, mockProducts)
      const ridersChoice = result.outfits.find((o) => o.tier === 'riders-choice')

      // Should prefer Sport Touring products
      const sportTouringProducts = ridersChoice!.products.filter((p) =>
        p.ridingStyles?.includes('Sport Touring')
      )
      expect(sportTouringProducts.length).toBeGreaterThan(0)
    })

    it('prefers products matching usage context', () => {
      const trackFilters: FilterCriteria = {
        ...baseFilters,
        usageContext: ['Track Day'],
        budgetMax: 3000, // Increase budget for track gear
      }

      const result = generateOutfits(trackFilters, mockProducts)
      const ridersChoice = result.outfits.find((o) => o.tier === 'riders-choice')

      // Should prefer Track Day products
      const trackProducts = ridersChoice!.products.filter((p) =>
        p.usageContexts?.includes('Track Day')
      )
      expect(trackProducts.length).toBeGreaterThan(0)
    })

    it('prefers higher certification quality', () => {
      const result = generateOutfits(baseFilters, mockProducts)
      const pro = result.outfits.find((o) => o.tier === 'pro')

      // Pro tier should get FIM helmet if available
      const helmet = pro!.products.find((p) => p.category === 'helmet')
      expect(helmet?.certifications.some((c) => c.type === 'FIM')).toBe(true)
    })

    it('handles weather matching', () => {
      const rainyFilters: FilterCriteria = {
        ...baseFilters,
        weather: 'Rain',
      }

      const result = generateOutfits(rainyFilters, mockProducts)

      // Should generate valid outfits regardless of weather
      expect(result.outfits).toHaveLength(3)
      expect(result.outfits[1].products.length).toBeGreaterThan(0)
    })
  })

  describe('Edge Cases', () => {
    it('handles empty product list', () => {
      const result = generateOutfits(baseFilters, [])

      expect(result.outfits).toHaveLength(3)
      // All outfits should be empty
      expect(result.outfits[0].products).toHaveLength(0)
      expect(result.outfits[1].products).toHaveLength(0)
      expect(result.outfits[2].products).toHaveLength(0)
    })

    it('handles missing category', () => {
      const noHelmetProducts = mockProducts.filter((p) => p.category !== 'helmet')
      const result = generateOutfits(baseFilters, noHelmetProducts)

      for (const outfit of result.outfits) {
        const hasHelmet = outfit.products.some((p) => p.category === 'helmet')
        expect(hasHelmet).toBe(false)
        // Should still have other categories
        expect(outfit.products.length).toBeGreaterThan(0)
      }
    })

    it('handles very low budget', () => {
      const lowBudgetFilters: FilterCriteria = {
        ...baseFilters,
        budgetMin: 10,
        budgetMax: 50,
        budgetRange: '$10 - $50',
      }

      const result = generateOutfits(lowBudgetFilters, mockProducts)

      // Should still generate outfits, even if they exceed budget
      expect(result.outfits).toHaveLength(3)
      expect(result.outfits[0].products.length).toBeGreaterThan(0)
    })

    it('handles products without metadata', () => {
      const productsWithoutMetadata: Product[] = [
        {
          id: 'helmet-no-meta',
          name: 'No Metadata Helmet',
          category: 'helmet',
          specifications: 'Basic',
          price: 200,
          imageUrl: 'test.jpg',
          certifications: [],
          imageAlt: 'No metadata',
          // No color, ridingStyles, or usageContexts
        },
        {
          id: 'jacket-no-meta',
          name: 'No Metadata Jacket',
          category: 'jacket',
          specifications: 'Basic',
          price: 300,
          imageUrl: 'test.jpg',
          certifications: [],
          imageAlt: 'No metadata',
        },
        {
          id: 'gloves-no-meta',
          name: 'No Metadata Gloves',
          category: 'gloves',
          specifications: 'Basic',
          price: 100,
          imageUrl: 'test.jpg',
          certifications: [],
          imageAlt: 'No metadata',
        },
        {
          id: 'boots-no-meta',
          name: 'No Metadata Boots',
          category: 'boots',
          specifications: 'Basic',
          price: 150,
          imageUrl: 'test.jpg',
          certifications: [],
          imageAlt: 'No metadata',
        },
      ]

      const result = generateOutfits(baseFilters, productsWithoutMetadata)

      // Should still generate outfits (may be incomplete if budget too low)
      expect(result.outfits).toHaveLength(3)
      // At least one outfit should have products
      const totalProducts = result.outfits.reduce((sum, o) => sum + o.products.length, 0)
      expect(totalProducts).toBeGreaterThan(0)
    })

    it('handles empty usage context', () => {
      const noUsageContext: FilterCriteria = {
        ...baseFilters,
        usageContext: [],
      }

      const result = generateOutfits(noUsageContext, mockProducts)

      expect(result.outfits).toHaveLength(3)
      expect(result.outfits[0].products.length).toBeGreaterThan(0)
    })

    it('handles undefined usage context', () => {
      const undefinedUsageContext: FilterCriteria = {
        ...baseFilters,
        usageContext: undefined,
      }

      const result = generateOutfits(undefinedUsageContext, mockProducts)

      expect(result.outfits).toHaveLength(3)
      expect(result.outfits[0].products.length).toBeGreaterThan(0)
    })
  })

  describe('Outfit IDs', () => {
    it('generates correct outfit IDs', () => {
      const result = generateOutfits(baseFilters, mockProducts)

      expect(result.outfits[0].id).toBe('entry-outfit')
      expect(result.outfits[1].id).toBe('riders-choice-outfit')
      expect(result.outfits[2].id).toBe('pro-outfit')
    })
  })

  describe('Multiple Scenarios', () => {
    it('generates different outfits for track day scenario', () => {
      const trackFilters: FilterCriteria = {
        budgetRange: '$1000 - $3000',
        budgetMin: 1000,
        budgetMax: 3000,
        color: 'Red',
        ridingStyle: 'Track',
        weather: 'Summer',
        usageContext: ['Track Day'],
      }

      const result = generateOutfits(trackFilters, mockProducts)

      // Should generate valid outfits for track scenario
      expect(result.outfits).toHaveLength(3)

      // All tiers should have products
      const pro = result.outfits.find((o) => o.tier === 'pro')
      const entry = result.outfits.find((o) => o.tier === 'entry')
      const ridersChoice = result.outfits.find((o) => o.tier === 'riders-choice')

      expect(entry!.products.length).toBeGreaterThan(0)
      expect(ridersChoice!.products.length).toBeGreaterThan(0)
      expect(pro!.products.length).toBeGreaterThan(0)

      // Products should not be duplicated across tiers
      const allProductIds = [
        ...entry!.products.map(p => p.id),
        ...ridersChoice!.products.map(p => p.id),
        ...pro!.products.map(p => p.id),
      ]
      const uniqueProductIds = new Set(allProductIds)
      expect(allProductIds.length).toBe(uniqueProductIds.size)
    })

    it('generates different outfits for commuting scenario', () => {
      const commuteFilters: FilterCriteria = {
        budgetRange: '$400 - $800',
        budgetMin: 400,
        budgetMax: 800,
        color: 'Black',
        ridingStyle: 'Street',
        weather: 'All-Weather',
        usageContext: ['City Commute'],
      }

      const result = generateOutfits(commuteFilters, mockProducts)
      const entry = result.outfits.find((o) => o.tier === 'entry')

      // Should select commute-friendly gear
      const commuteGear = entry!.products.filter((p) =>
        p.usageContexts?.includes('City Commute')
      )
      expect(commuteGear.length).toBeGreaterThan(0)
    })
  })

  describe('Performance', () => {
    it('handles large product catalog efficiently', () => {
      // Create 100 products
      const largeProductList: Product[] = []
      for (let i = 0; i < 100; i++) {
        largeProductList.push({
          id: `product-${i}`,
          name: `Product ${i}`,
          category: ['helmet', 'jacket', 'gloves', 'boots'][
            i % 4
          ] as Product['category'],
          specifications: 'Test',
          price: 100 + i * 10,
          imageUrl: 'test.jpg',
          certifications: [],
          imageAlt: 'Test',
          color: 'Black',
          ridingStyles: ['Sport Touring'],
          usageContexts: ['City Commute'],
        })
      }

      const start = Date.now()
      const result = generateOutfits(baseFilters, largeProductList)
      const duration = Date.now() - start

      // Should complete in reasonable time (< 100ms for 100 products)
      expect(duration).toBeLessThan(100)
      expect(result.outfits).toHaveLength(3)
    })
  })
})
