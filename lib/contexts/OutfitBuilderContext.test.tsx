import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import React from 'react'
import {
  OutfitBuilderProvider,
  DEFAULT_FILTERS,
  type OutfitBuilderState,
  type OutfitBuilderAction,
} from './OutfitBuilderContext'
import { useOutfitBuilder } from '@/lib/hooks/useOutfitBuilder'
import type { OutfitBuilderResult, FilterCriteria } from '@/lib/types/outfit'

// Helper to create a wrapper with provider
function createWrapper() {
  return ({ children }: { children: React.ReactNode }) => (
    <OutfitBuilderProvider>{children}</OutfitBuilderProvider>
  )
}

// Mock outfit result for testing
const mockOutfitResult: OutfitBuilderResult = {
  filters: DEFAULT_FILTERS,
  outfits: [
    {
      id: 'entry-outfit',
      tier: 'entry',
      tierName: 'Entry Spec',
      totalPrice: 500,
      badge: 'Value',
      isRecommended: false,
      products: [],
      ctaText: 'Shop Entry Spec',
    },
    {
      id: 'riders-choice-outfit',
      tier: 'riders-choice',
      tierName: "Rider's Choice",
      totalPrice: 1500,
      badge: 'Best Match',
      isRecommended: true,
      products: [],
      ctaText: 'Shop This Loadout',
    },
    {
      id: 'pro-outfit',
      tier: 'pro',
      tierName: 'Pro Spec',
      totalPrice: 3000,
      badge: 'Premium',
      isRecommended: false,
      products: [],
      ctaText: 'Shop Pro Spec',
    },
  ],
}

describe('OutfitBuilderContext', () => {
  describe('Initial State', () => {
    it('starts with default filters', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      expect(result.current.state.filterCriteria).toEqual(DEFAULT_FILTERS)
    })

    it('starts with modal closed', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      expect(result.current.state.isModalOpen).toBe(false)
    })

    it('starts with no outfit results', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      expect(result.current.state.outfitResults).toBeNull()
    })

    it('starts with not generating', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      expect(result.current.state.isGenerating).toBe(false)
    })

    it('accepts initial outfit results', () => {
      function WrapperWithInitialOutfits({ children }: { children: React.ReactNode }) {
        return (
          <OutfitBuilderProvider initialOutfits={mockOutfitResult}>
            {children}
          </OutfitBuilderProvider>
        )
      }

      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: WrapperWithInitialOutfits,
      })

      expect(result.current.state.outfitResults).toEqual(mockOutfitResult)
    })
  })

  describe('OPEN_MODAL Action', () => {
    it('opens the modal', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      expect(result.current.state.isModalOpen).toBe(false)

      act(() => {
        result.current.openModal()
      })

      expect(result.current.state.isModalOpen).toBe(true)
    })

    it('does not affect other state', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      const initialFilters = result.current.state.filterCriteria

      act(() => {
        result.current.openModal()
      })

      expect(result.current.state.filterCriteria).toEqual(initialFilters)
      expect(result.current.state.isGenerating).toBe(false)
    })
  })

  describe('CLOSE_MODAL Action', () => {
    it('closes the modal', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      // Open then close
      act(() => {
        result.current.openModal()
      })
      expect(result.current.state.isModalOpen).toBe(true)

      act(() => {
        result.current.closeModal()
      })
      expect(result.current.state.isModalOpen).toBe(false)
    })

    it('does not affect other state', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      act(() => {
        result.current.openModal()
      })

      const initialFilters = result.current.state.filterCriteria

      act(() => {
        result.current.closeModal()
      })

      expect(result.current.state.filterCriteria).toEqual(initialFilters)
      expect(result.current.state.isGenerating).toBe(false)
    })
  })

  describe('UPDATE_FILTERS Action', () => {
    it('updates a single filter field', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      act(() => {
        result.current.updateFilters({ color: 'Red' })
      })

      expect(result.current.state.filterCriteria.color).toBe('Red')
    })

    it('updates multiple filter fields', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      act(() => {
        result.current.updateFilters({
          color: 'Blue',
          ridingStyle: 'Track',
          budgetMax: 2000,
        })
      })

      expect(result.current.state.filterCriteria.color).toBe('Blue')
      expect(result.current.state.filterCriteria.ridingStyle).toBe('Track')
      expect(result.current.state.filterCriteria.budgetMax).toBe(2000)
    })

    it('preserves unchanged filter fields', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      const initialWeather = result.current.state.filterCriteria.weather

      act(() => {
        result.current.updateFilters({ color: 'Red' })
      })

      expect(result.current.state.filterCriteria.weather).toBe(initialWeather)
    })

    it('handles usage context array updates', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      act(() => {
        result.current.updateFilters({
          usageContext: ['City Commute', 'Track Day'],
        })
      })

      expect(result.current.state.filterCriteria.usageContext).toEqual([
        'City Commute',
        'Track Day',
      ])
    })

    it('handles budget updates correctly', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      act(() => {
        result.current.updateFilters({
          budgetMin: 1000,
          budgetMax: 2500,
          budgetRange: '$1000 - $2500',
        })
      })

      expect(result.current.state.filterCriteria.budgetMin).toBe(1000)
      expect(result.current.state.filterCriteria.budgetMax).toBe(2500)
      expect(result.current.state.filterCriteria.budgetRange).toBe('$1000 - $2500')
    })
  })

  describe('GENERATE_OUTFITS Action', () => {
    it('sets outfit results', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      act(() => {
        result.current.dispatch({
          type: 'GENERATE_OUTFITS',
          payload: mockOutfitResult,
        })
      })

      expect(result.current.state.outfitResults).toEqual(mockOutfitResult)
    })

    it('sets isGenerating to false', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      // Set generating to true first
      act(() => {
        result.current.dispatch({ type: 'SET_GENERATING', payload: true })
      })
      expect(result.current.state.isGenerating).toBe(true)

      // Generate outfits should set it back to false
      act(() => {
        result.current.dispatch({
          type: 'GENERATE_OUTFITS',
          payload: mockOutfitResult,
        })
      })

      expect(result.current.state.isGenerating).toBe(false)
    })

    it('replaces previous outfit results', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      const firstResult = { ...mockOutfitResult, outfits: [] }
      const secondResult = mockOutfitResult

      act(() => {
        result.current.dispatch({
          type: 'GENERATE_OUTFITS',
          payload: firstResult,
        })
      })

      act(() => {
        result.current.dispatch({
          type: 'GENERATE_OUTFITS',
          payload: secondResult,
        })
      })

      expect(result.current.state.outfitResults).toEqual(secondResult)
    })
  })

  describe('RESET_BUILDER Action', () => {
    it('resets filters to defaults', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      // Modify filters
      act(() => {
        result.current.updateFilters({
          color: 'Red',
          ridingStyle: 'Track',
          budgetMax: 3000,
        })
      })

      // Reset
      act(() => {
        result.current.resetBuilder()
      })

      expect(result.current.state.filterCriteria).toEqual(DEFAULT_FILTERS)
    })

    it('closes the modal', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      // Open modal
      act(() => {
        result.current.openModal()
      })
      expect(result.current.state.isModalOpen).toBe(true)

      // Reset
      act(() => {
        result.current.resetBuilder()
      })

      expect(result.current.state.isModalOpen).toBe(false)
    })

    it('clears outfit results', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      // Set outfit results
      act(() => {
        result.current.dispatch({
          type: 'GENERATE_OUTFITS',
          payload: mockOutfitResult,
        })
      })
      expect(result.current.state.outfitResults).not.toBeNull()

      // Reset
      act(() => {
        result.current.resetBuilder()
      })

      expect(result.current.state.outfitResults).toBeNull()
    })

    it('preserves isGenerating state', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      // Set generating to true
      act(() => {
        result.current.dispatch({ type: 'SET_GENERATING', payload: true })
      })

      // Reset (should not affect isGenerating)
      act(() => {
        result.current.resetBuilder()
      })

      // Note: Based on the reducer implementation, isGenerating is NOT reset
      // This is intentional so reset doesn't interfere with ongoing operations
      expect(result.current.state.isGenerating).toBe(true)
    })
  })

  describe('SET_GENERATING Action', () => {
    it('sets isGenerating to true', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      act(() => {
        result.current.dispatch({ type: 'SET_GENERATING', payload: true })
      })

      expect(result.current.state.isGenerating).toBe(true)
    })

    it('sets isGenerating to false', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      // Set to true first
      act(() => {
        result.current.dispatch({ type: 'SET_GENERATING', payload: true })
      })

      // Then set to false
      act(() => {
        result.current.dispatch({ type: 'SET_GENERATING', payload: false })
      })

      expect(result.current.state.isGenerating).toBe(false)
    })

    it('does not affect other state', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      const initialFilters = result.current.state.filterCriteria
      const initialModalState = result.current.state.isModalOpen

      act(() => {
        result.current.dispatch({ type: 'SET_GENERATING', payload: true })
      })

      expect(result.current.state.filterCriteria).toEqual(initialFilters)
      expect(result.current.state.isModalOpen).toBe(initialModalState)
    })
  })

  describe('Complex State Transitions', () => {
    it('handles full filter and generate workflow', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      // 1. Open modal
      act(() => {
        result.current.openModal()
      })
      expect(result.current.state.isModalOpen).toBe(true)

      // 2. Update filters
      act(() => {
        result.current.updateFilters({
          color: 'Blue',
          ridingStyle: 'Track',
          budgetMax: 2000,
        })
      })
      expect(result.current.state.filterCriteria.color).toBe('Blue')

      // 3. Generate outfits
      act(() => {
        result.current.dispatch({
          type: 'GENERATE_OUTFITS',
          payload: mockOutfitResult,
        })
      })
      expect(result.current.state.outfitResults).toEqual(mockOutfitResult)

      // 4. Close modal
      act(() => {
        result.current.closeModal()
      })
      expect(result.current.state.isModalOpen).toBe(false)
    })

    it('handles cancel workflow (close without generating)', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      const originalFilters = result.current.state.filterCriteria

      // Open and update filters
      act(() => {
        result.current.openModal()
        result.current.updateFilters({ color: 'Red' })
      })

      // Close without generating (filters should still be updated)
      act(() => {
        result.current.closeModal()
      })

      expect(result.current.state.isModalOpen).toBe(false)
      expect(result.current.state.filterCriteria.color).toBe('Red')
      expect(result.current.state.outfitResults).toBeNull()
    })

    it('handles multiple filter updates', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      act(() => {
        result.current.updateFilters({ color: 'Red' })
        result.current.updateFilters({ ridingStyle: 'Track' })
        result.current.updateFilters({ budgetMax: 2500 })
      })

      expect(result.current.state.filterCriteria).toMatchObject({
        color: 'Red',
        ridingStyle: 'Track',
        budgetMax: 2500,
      })
    })
  })

  describe('Edge Cases', () => {
    it('handles empty usage context array', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      act(() => {
        result.current.updateFilters({ usageContext: [] })
      })

      expect(result.current.state.filterCriteria.usageContext).toEqual([])
    })

    it('handles undefined usage context', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      act(() => {
        result.current.updateFilters({ usageContext: undefined })
      })

      expect(result.current.state.filterCriteria.usageContext).toBeUndefined()
    })

    it('handles budget min greater than max', () => {
      const { result } = renderHook(() => useOutfitBuilder(), {
        wrapper: createWrapper(),
      })

      // The reducer doesn't validate this - it's the UI's responsibility
      act(() => {
        result.current.updateFilters({
          budgetMin: 2000,
          budgetMax: 1000,
        })
      })

      expect(result.current.state.filterCriteria.budgetMin).toBe(2000)
      expect(result.current.state.filterCriteria.budgetMax).toBe(1000)
    })
  })

  describe('DEFAULT_FILTERS Constant', () => {
    it('has correct default values', () => {
      expect(DEFAULT_FILTERS).toMatchObject({
        budgetMin: 500,
        budgetMax: 1500,
        budgetRange: '$500 - $1500',
        color: 'Black',
        ridingStyle: 'Sport Touring',
        weather: 'All-Weather',
        usageContext: [],
      })
    })
  })
})
