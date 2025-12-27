import { Product } from '@/lib/types'

/**
 * Mock product database for Outfit Builder
 * Products are organized by pricing tier
 */

// ============================================================================
// ENTRY TIER PRODUCTS (Budget-friendly options)
// ============================================================================

export const entryProducts: Product[] = [
  {
    id: 'hjc-i70',
    name: 'HJC i70 Helmet',
    category: 'helmet',
    specifications: 'Polycarbonate • DOT Approved',
    price: 199,
    imageUrl: 'https://placehold.co/400x400/1a1a1a/white?text=HJC+i70',
    certifications: [{ type: 'DOT', color: 'gray' }],
    imageAlt: 'Black HJC i70 motorcycle helmet',
  },
  {
    id: 'joe-rocket-atomic',
    name: 'Joe Rocket Atomic 5.0',
    category: 'jacket',
    specifications: 'Textile • Waterproof Liner',
    price: 160,
    imageUrl: 'https://placehold.co/400x400/2a2a2a/white?text=Joe+Rocket',
    certifications: [],
    imageAlt: 'Joe Rocket Atomic textile jacket',
  },
  {
    id: 'scorpion-sgs-mk-ii',
    name: 'Scorpion SGS MK II Gloves',
    category: 'gloves',
    specifications: 'Leather • CE Certified',
    price: 100,
    imageUrl: 'https://placehold.co/400x400/1a1a1a/white?text=Scorpion',
    certifications: [{ type: 'CE', color: 'gray' }],
    imageAlt: 'Black Scorpion SGS MK II motorcycle gloves',
  },
  {
    id: 'tcx-street-ace',
    name: 'TCX Street Ace Boots',
    category: 'boots',
    specifications: 'Microfiber • Waterproof',
    price: 100,
    imageUrl: 'https://placehold.co/400x400/2a2a2a/white?text=TCX+Boots',
    certifications: [{ type: 'CE', color: 'gray' }],
    imageAlt: 'Black TCX Street Ace motorcycle boots',
  },
]

// ============================================================================
// RIDER'S CHOICE TIER (Recommended - Best Value)
// ============================================================================

export const ridersChoiceProducts: Product[] = [
  {
    id: 'shoei-rf-1400',
    name: 'Shoei RF-1400',
    category: 'helmet',
    specifications: 'Fiberglass • Aerodynamic',
    price: 530,
    imageUrl: 'https://placehold.co/400x400/1a1a1a/22c55e?text=Shoei+RF-1400',
    certifications: [{ type: 'SNELL', color: 'green' }],
    imageAlt: 'Shoei RF-1400 racing helmet',
  },
  {
    id: 'alpinestars-gp-plus-r-v3',
    name: 'Alpinestars GP Plus R v3',
    category: 'jacket',
    specifications: 'Leather • CE Armor',
    price: 450,
    imageUrl: 'https://placehold.co/400x400/2a2a2a/white?text=Alpinestars+Jacket',
    certifications: [{ type: 'CE', color: 'gray' }],
    imageAlt: 'Black Alpinestars GP Plus R v3 leather jacket',
  },
  {
    id: 'alpinestars-sp-8-v3',
    name: 'Alpinestars SP-8 v3 Gloves',
    category: 'gloves',
    specifications: 'Carbon • CE Level 2',
    price: 150,
    imageUrl: 'https://placehold.co/400x400/1a1a1a/white?text=Alpinestars+Gloves',
    certifications: [{ type: 'CE2', color: 'gray' }],
    imageAlt: 'Alpinestars SP-8 v3 carbon knuckle gloves',
  },
  {
    id: 'alpinestars-smx-6-v2',
    name: 'Alpinestars SMX-6 v2 Boots',
    category: 'boots',
    specifications: 'Microfiber • TPU Shin Plate',
    price: 220,
    imageUrl: 'https://placehold.co/400x400/2a2a2a/white?text=Alpinestars+Boots',
    certifications: [{ type: 'CE', color: 'gray' }],
    imageAlt: 'Alpinestars SMX-6 v2 racing boots',
  },
]

// ============================================================================
// PRO TIER PRODUCTS (Premium Performance)
// ============================================================================

export const proProducts: Product[] = [
  {
    id: 'agv-pista-gp-rr',
    name: 'AGV Pista GP RR',
    category: 'helmet',
    specifications: 'Carbon Fiber • Pro Spoiler',
    price: 1400,
    imageUrl: 'https://placehold.co/400x400/1a1a1a/eab308?text=AGV+Pista',
    certifications: [{ type: 'FIM', color: 'yellow' }],
    imageAlt: 'AGV Pista GP RR carbon fiber racing helmet',
  },
  {
    id: 'dainese-racing-4',
    name: 'Dainese Racing 4 Jacket',
    category: 'jacket',
    specifications: 'Kangaroo Leather • D-Air Compatible',
    price: 950,
    imageUrl: 'https://placehold.co/400x400/2a2a2a/white?text=Dainese+Jacket',
    certifications: [{ type: 'CE', color: 'gray' }],
    imageAlt: 'Dainese Racing 4 leather suit jacket',
  },
  {
    id: 'dainese-full-metal-6',
    name: 'Dainese Full Metal 6 Gloves',
    category: 'gloves',
    specifications: 'Carbon Knuckles • CE Level 2',
    price: 250,
    imageUrl: 'https://placehold.co/400x400/1a1a1a/white?text=Dainese+Gloves',
    certifications: [{ type: 'CE2', color: 'gray' }],
    imageAlt: 'Dainese Full Metal 6 racing gloves with carbon knuckles',
  },
  {
    id: 'alpinestars-supertech-r',
    name: 'Alpinestars Supertech R',
    category: 'boots',
    specifications: 'Microfiber • Magnesium Slider',
    price: 500,
    imageUrl: 'https://placehold.co/400x400/2a2a2a/white?text=Supertech+R',
    certifications: [{ type: 'CE', color: 'gray' }],
    imageAlt: 'Alpinestars Supertech R racing boots',
  },
]

/**
 * All products combined for easy access
 */
export const allProducts = [...entryProducts, ...ridersChoiceProducts, ...proProducts]
