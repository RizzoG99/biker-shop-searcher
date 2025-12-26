import { ReactNode } from 'react'

/**
 * Base props that all UI components should support
 */
export interface BaseComponentProps {
  /** Additional CSS classes */
  className?: string
  /** Child elements */
  children?: ReactNode
  /** Unique identifier */
  id?: string
  /** Data attributes for testing */
  'data-testid'?: string
}

/**
 * Size variants used across components
 */
export type Size = 'sm' | 'md' | 'lg'

/**
 * Variant types for different component styles
 */
export type Variant = 'primary' | 'secondary' | 'accent' | 'ghost'

/**
 * Common icon position types
 */
export type IconPosition = 'left' | 'right'
