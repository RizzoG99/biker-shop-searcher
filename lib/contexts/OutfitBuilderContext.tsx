'use client'

import React, { createContext, useReducer, ReactNode } from 'react'
import type { FilterCriteria, OutfitBuilderResult } from '@/lib/types/outfit'
import { BUDGET_CONFIG } from '@/lib/data/constants/filterOptions'

/**
 * Default filter values when builder starts or resets
 */
export const DEFAULT_FILTERS: FilterCriteria = {
  budgetRange: `$${BUDGET_CONFIG.defaultMin} - $${BUDGET_CONFIG.defaultMax}`,
  budgetMin: BUDGET_CONFIG.defaultMin,
  budgetMax: BUDGET_CONFIG.defaultMax,
  color: 'Black',
  ridingStyle: 'Sport Touring',
  weather: 'All-Weather',
  usageContext: [],
}

/**
 * Outfit Builder state shape
 */
export interface OutfitBuilderState {
  /** Current filter criteria */
  filterCriteria: FilterCriteria
  /** Modal visibility state */
  isModalOpen: boolean
  /** Generated outfit results (null = not yet generated) */
  outfitResults: OutfitBuilderResult | null
  /** Loading state for outfit generation */
  isGenerating: boolean
}

/**
 * Action types for outfit builder reducer
 */
export type OutfitBuilderAction =
  | { type: 'OPEN_MODAL' }
  | { type: 'CLOSE_MODAL' }
  | { type: 'UPDATE_FILTERS'; payload: Partial<FilterCriteria> }
  | { type: 'GENERATE_OUTFITS'; payload: OutfitBuilderResult }
  | { type: 'RESET_BUILDER' }
  | { type: 'SET_GENERATING'; payload: boolean }

/**
 * Initial state for outfit builder
 */
const initialState: OutfitBuilderState = {
  filterCriteria: DEFAULT_FILTERS,
  isModalOpen: false,
  outfitResults: null,
  isGenerating: false,
}

/**
 * Outfit builder reducer function
 * Handles all state transitions for the outfit builder
 */
function outfitBuilderReducer(
  state: OutfitBuilderState,
  action: OutfitBuilderAction
): OutfitBuilderState {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        isModalOpen: true,
      }

    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalOpen: false,
      }

    case 'UPDATE_FILTERS':
      return {
        ...state,
        filterCriteria: {
          ...state.filterCriteria,
          ...action.payload,
        },
      }

    case 'GENERATE_OUTFITS':
      return {
        ...state,
        outfitResults: action.payload,
        isGenerating: false,
      }

    case 'RESET_BUILDER':
      return {
        ...state,
        filterCriteria: DEFAULT_FILTERS,
        isModalOpen: false,
        outfitResults: null,
      }

    case 'SET_GENERATING':
      return {
        ...state,
        isGenerating: action.payload,
      }

    default:
      return state
  }
}

/**
 * Context value shape with state and convenience methods
 */
export interface OutfitBuilderContextValue {
  state: OutfitBuilderState
  dispatch: React.Dispatch<OutfitBuilderAction>
  /** Open the filter modal */
  openModal: () => void
  /** Close the filter modal */
  closeModal: () => void
  /** Update filter criteria (partial update) */
  updateFilters: (filters: Partial<FilterCriteria>) => void
  /** Apply filters and generate new outfits (requires filterEngine) */
  applyFilters: () => Promise<void>
  /** Reset builder to default state */
  resetBuilder: () => void
}

/**
 * Outfit Builder Context
 */
export const OutfitBuilderContext = createContext<OutfitBuilderContextValue | undefined>(
  undefined
)

/**
 * Outfit Builder Provider Props
 */
interface OutfitBuilderProviderProps {
  children: ReactNode
  /** Optional initial outfit results to display */
  initialOutfits?: OutfitBuilderResult
}

/**
 * Outfit Builder Provider Component
 * Wraps the outfit builder page to provide state management
 */
export function OutfitBuilderProvider({
  children,
  initialOutfits,
}: OutfitBuilderProviderProps) {
  const [state, dispatch] = useReducer(outfitBuilderReducer, {
    ...initialState,
    outfitResults: initialOutfits ?? null,
  })

  // Convenience methods
  const openModal = () => dispatch({ type: 'OPEN_MODAL' })
  const closeModal = () => dispatch({ type: 'CLOSE_MODAL' })
  const updateFilters = (filters: Partial<FilterCriteria>) =>
    dispatch({ type: 'UPDATE_FILTERS', payload: filters })

  const resetBuilder = () => {
    dispatch({ type: 'RESET_BUILDER' })
  }

  /**
   * Apply filters and generate new outfits
   * This will be implemented once filterEngine is built
   */
  const applyFilters = async () => {
    dispatch({ type: 'SET_GENERATING', payload: true })

    // TODO: Import and call filterEngine.generateOutfits() when implemented
    // For now, we'll keep the existing results
    // const result = await filterEngine.generateOutfits(state.filterCriteria, allProducts)
    // dispatch({ type: 'GENERATE_OUTFITS', payload: result })

    dispatch({ type: 'SET_GENERATING', payload: false })
    dispatch({ type: 'CLOSE_MODAL' })
  }

  const value: OutfitBuilderContextValue = {
    state,
    dispatch,
    openModal,
    closeModal,
    updateFilters,
    applyFilters,
    resetBuilder,
  }

  return (
    <OutfitBuilderContext.Provider value={value}>
      {children}
    </OutfitBuilderContext.Provider>
  )
}
