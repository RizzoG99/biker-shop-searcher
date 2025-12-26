import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS classes with proper precedence
 * Uses clsx for conditional classes and tailwind-merge to handle conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Generate unique IDs for accessibility
 */
let idCounter = 0
export function generateId(prefix: string = 'id'): string {
  idCounter += 1
  return `${prefix}-${idCounter}`
}
