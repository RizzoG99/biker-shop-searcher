import { useContext } from 'react'
import { OutfitBuilderContext, OutfitBuilderContextValue } from '@/lib/contexts/OutfitBuilderContext'

/**
 * Custom hook to access Outfit Builder context
 * Must be used within OutfitBuilderProvider
 *
 * @returns Outfit builder state and actions
 * @throws Error if used outside OutfitBuilderProvider
 */
export function useOutfitBuilder(): OutfitBuilderContextValue {
  const context = useContext(OutfitBuilderContext)

  if (!context) {
    throw new Error('useOutfitBuilder must be used within OutfitBuilderProvider')
  }

  return context
}
