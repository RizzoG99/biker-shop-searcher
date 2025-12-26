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
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBrq-BPkTdDjzqYYwU8XiSKelDQeN2pAG2N1h3T5jOKOeeLO2n1Oa3eeRUWQilmDxgWGtmSbwW0WrZPU0HG-F4wfXShMbm6vrkRalWq9kC258qivWDSlZrl_prkABDA0UWSmoh3FfK-gfqq5N78ZxtLXj8GeKl5Cae-v-AJkOORd8rPPBnqn9_p6-8d-WHRO-0BMi0q585GrJeY5RCJxUEPpNgQEl0yB6i2ugPqvDGEHK5Uh-pACtRBz9YHou-PMX7kGNlWcwUCRtU',
    certifications: [{ type: 'DOT', color: 'gray' }],
    imageAlt: 'Black HJC i70 motorcycle helmet',
  },
  {
    id: 'joe-rocket-atomic',
    name: 'Joe Rocket Atomic 5.0',
    category: 'jacket',
    specifications: 'Textile • Waterproof Liner',
    price: 160,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAX0Phfhz-5ut1NXs_1_9RR_yG3lhh1nxfr3aZ6R0YCJ_XTvG_fo9mGOe7Y6ZOe-GPrR0R4XCH4rlzqDcE9GFwlPbkEZUnmyQaldlvZ63n-ICU5jno9XPazTBcqXXzyOmXbN4ynnVXj4Hjp--lUx9tkXsizW1Ao0QxOMUzFBWiMAWXxMHbqI6g5RddaV6WN2FWML8RO8dBSyGEA9IXAeegDCaDoJ2h3ZNSh-L0S9cQEOf9Usw8ApraXPGUV1ECGtPiONtJs3o_0Pcs',
    certifications: [],
    imageAlt: 'Joe Rocket Atomic textile jacket',
  },
  {
    id: 'scorpion-sgs-mk-ii',
    name: 'Scorpion SGS MK II Gloves',
    category: 'gloves',
    specifications: 'Leather • CE Certified',
    price: 100,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD6nXTe-yO_MZN0kUq-qBKN-7LGr8vQ9pDWZhJdLq2FNHdE_bN9Tc3h4Tv8xUHw4Ug0h0r2C9b9Z2v-1eN2pA8wR7Bx9m',
    certifications: [{ type: 'CE', color: 'gray' }],
    imageAlt: 'Black Scorpion SGS MK II motorcycle gloves',
  },
  {
    id: 'tcx-street-ace',
    name: 'TCX Street Ace Boots',
    category: 'boots',
    specifications: 'Microfiber • Waterproof',
    price: 100,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCzq2h3p9Y0b2Zx8k9d3e1f4g5h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z4a5b6c7d8e9f0g1h2i3j4k5l6m7n8o9p',
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
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCRzyevCC2kfcqoJrRe6XAly-cipkneeP9UKhh-MjmkApE_pSgp4EQe63V2v3zOwalODm1yZ05b341Ln14BQay_HbmGfZ1CqyWK1BnzcdM5ZOKhRCDm1s32Pgz4FWYWhOUTQ_J7LMPIA9kRIrkq3eAoIGTxlP1XfYegrMP52IM2b4AGLXW43wzYevPy_WgEQ9RzISksH3x11z3_DM-qINpIsIkCb4tsRdJXceT8kA394nxjO3Bl4_zuphPGj0QXoCnVoZt8fngSZF4',
    certifications: [{ type: 'SNELL', color: 'green' }],
    imageAlt: 'Shoei RF-1400 racing helmet',
  },
  {
    id: 'alpinestars-gp-plus-r-v3',
    name: 'Alpinestars GP Plus R v3',
    category: 'jacket',
    specifications: 'Leather • CE Armor',
    price: 450,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB8h2i3j4k5l6m7n8o9p0q1r2s3t4u5v6w7x8y9z0a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6',
    certifications: [{ type: 'CE', color: 'gray' }],
    imageAlt: 'Black Alpinestars GP Plus R v3 leather jacket',
  },
  {
    id: 'alpinestars-sp-8-v3',
    name: 'Alpinestars SP-8 v3 Gloves',
    category: 'gloves',
    specifications: 'Carbon • CE Level 2',
    price: 150,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4',
    certifications: [{ type: 'CE2', color: 'gray' }],
    imageAlt: 'Alpinestars SP-8 v3 carbon knuckle gloves',
  },
  {
    id: 'alpinestars-smx-6-v2',
    name: 'Alpinestars SMX-6 v2 Boots',
    category: 'boots',
    specifications: 'Microfiber • TPU Shin Plate',
    price: 220,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5',
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
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDtrkYETaZZePPTdNjc4E82x_OdNQSzxql2-IYunrf55OgIF-UN-eRVhEKzoulI5-rnjZlwqSFnjCWTl7SnJcsoEOc_ONfCZsnDXvEOZS_oHXSKPfI8WBfx8hHhvalPk3DfmX4wZPxLijCdZ0QIVBsTHzYbo6AjvAwNclFD0hpY-2YSAD1xZqIEymNNJL6-6nB1VcnprHGODnEKydStfpPj9lmE_DfrzHTJjXXbmbM2HicibX3-IjM2WEqrLYsDwdIXfc274CkSBb4',
    certifications: [{ type: 'FIM', color: 'yellow' }],
    imageAlt: 'AGV Pista GP RR carbon fiber racing helmet',
  },
  {
    id: 'dainese-racing-4',
    name: 'Dainese Racing 4 Jacket',
    category: 'jacket',
    specifications: 'Kangaroo Leather • D-Air Compatible',
    price: 950,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuE1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6',
    certifications: [{ type: 'CE', color: 'gray' }],
    imageAlt: 'Dainese Racing 4 leather suit jacket',
  },
  {
    id: 'dainese-full-metal-6',
    name: 'Dainese Full Metal 6 Gloves',
    category: 'gloves',
    specifications: 'Carbon Knuckles • CE Level 2',
    price: 250,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuF2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7',
    certifications: [{ type: 'CE2', color: 'gray' }],
    imageAlt: 'Dainese Full Metal 6 racing gloves with carbon knuckles',
  },
  {
    id: 'alpinestars-supertech-r',
    name: 'Alpinestars Supertech R',
    category: 'boots',
    specifications: 'Microfiber • Magnesium Slider',
    price: 500,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuG3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z8',
    certifications: [{ type: 'CE', color: 'gray' }],
    imageAlt: 'Alpinestars Supertech R racing boots',
  },
]

/**
 * All products combined for easy access
 */
export const allProducts = [...entryProducts, ...ridersChoiceProducts, ...proProducts]
