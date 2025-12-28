import { useEffect, useState } from 'react'

/**
 * Custom hook to debounce a value
 *
 * Returns a debounced version of the value that only updates after
 * the specified delay has passed without changes.
 *
 * Useful for:
 * - Search inputs (wait for user to stop typing)
 * - Slider inputs (batch rapid changes)
 * - API calls (reduce request frequency)
 *
 * @param value The value to debounce
 * @param delay Delay in milliseconds (default: 300ms)
 * @returns Debounced value
 *
 * @example
 * ```tsx
 * const [searchTerm, setSearchTerm] = useState('')
 * const debouncedSearchTerm = useDebounce(searchTerm, 500)
 *
 * useEffect(() => {
 *   // This only runs 500ms after user stops typing
 *   fetchSearchResults(debouncedSearchTerm)
 * }, [debouncedSearchTerm])
 * ```
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    // Set up timeout to update debounced value
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Clean up timeout if value changes before delay expires
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
