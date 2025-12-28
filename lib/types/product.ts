/**
 * Product-related type definitions for Outfit Builder
 */

import type { RidingStyle, UsageContext } from './outfit'

/**
 * Safety certification types recognized in the motorcycle gear industry
 */
export type CertificationType = 'SNELL' | 'DOT' | 'CE' | 'CE1' | 'CE2' | 'FIM'

/**
 * Categories of motorcycle gear products
 */
export type ProductCategory = 'helmet' | 'jacket' | 'pants' | 'gloves' | 'boots'

/**
 * Product certification badge with visual styling
 */
export interface Certification {
  /** Certification type */
  type: CertificationType
  /** Display color for badge: green (SNELL), yellow (FIM), gray (DOT/CE) */
  color: 'green' | 'yellow' | 'gray'
}

/**
 * Individual motorcycle gear product
 */
export interface Product {
  /** Unique product identifier */
  id: string

  /** Product name */
  name: string

  /** Category classification */
  category: ProductCategory

  /** Brief specifications (e.g., "Carbon Fiber • DOT/SNELL") */
  specifications: string

  /** Price in USD */
  price: number

  /** Product image URL */
  imageUrl: string

  /** Safety certifications */
  certifications: Certification[]

  /** Image alt text for accessibility */
  imageAlt: string

  /** Primary color (for filtering) */
  color?: string

  /** Suitable riding styles (for filtering) */
  ridingStyles?: RidingStyle[]

  /** Suitable usage contexts (for filtering) */
  usageContexts?: UsageContext[]
}
