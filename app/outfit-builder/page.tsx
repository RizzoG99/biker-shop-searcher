'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/atoms/Button'
import { OutfitCard, FilterTags } from '@/components/outfit-builder'
import { FilterModal } from '@/components/outfit-builder/FilterModal'
import Header from '@/components/Header'
import {
  OutfitBuilderProvider,
  useOutfitBuilder,
  DEFAULT_FILTERS,
} from '@/lib/contexts/OutfitBuilderContext'
import { generateOutfits } from '@/lib/filtering/filterEngine'
import { allProducts } from '@/lib/data/mock/products'
import type { Outfit } from '@/lib/types/outfit'

/**
 * OutfitBuilderContent Component
 *
 * Inner component that uses the OutfitBuilderContext.
 * Separated to allow the Provider to wrap it.
 */
function OutfitBuilderContent() {
  const { state, openModal, closeModal, updateFilters, setOutfitResults, resetBuilder } =
    useOutfitBuilder()

  // Generate initial outfits on mount
  useEffect(() => {
    if (!state.outfitResults) {
      const result = generateOutfits(state.filterCriteria, allProducts)
      setOutfitResults(result)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Handle edit filters - opens the modal
  const handleEditFilters = () => {
    openModal()
  }

  // Handle restart builder - resets to default filters and regenerates
  const handleRestartBuilder = () => {
    resetBuilder()
    // Regenerate with default filters
    const result = generateOutfits(DEFAULT_FILTERS, allProducts)
    setOutfitResults(result)
  }

  // Handle filter modal apply - updates filters and regenerates outfits
  const handleApplyFilters = (newFilters: typeof state.filterCriteria) => {
    updateFilters(newFilters)
    const result = generateOutfits(newFilters, allProducts)
    setOutfitResults(result)
    closeModal()
  }

  // Placeholder handlers for Phase 3
  const handleOutfitCta = (outfitId: string) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Outfit CTA clicked:', outfitId)
    }
  }

  const handleProductClick = (productId: string) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Product clicked:', productId)
    }
  }

  // Show loading state while generating outfits
  if (state.isGenerating || !state.outfitResults) {
    return (
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <Header
          rightAction={
            <Button variant="primary" size="md" disabled>
              Restart Builder
            </Button>
          }
        />

        <main className="flex-1 flex flex-col items-center py-8 px-4 lg:px-20">
          <div className="max-w-[1280px] w-full flex flex-col gap-8">
            {/* Loading skeleton */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap justify-between items-end gap-4 border-b border-border-dark pb-6">
                <div className="flex flex-col gap-2">
                  <div className="h-12 w-80 bg-card-dark animate-pulse rounded" />
                  <div className="h-6 w-96 bg-card-dark animate-pulse rounded" />
                </div>
                <div className="h-10 w-32 bg-card-dark animate-pulse rounded" />
              </div>
            </div>

            {/* Outfit cards skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card-dark border border-border-dark rounded-xl p-6 animate-pulse">
                  <div className="h-8 w-32 bg-background-dark rounded mb-4" />
                  <div className="h-6 w-48 bg-background-dark rounded mb-6" />
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((j) => (
                      <div key={j} className="h-20 bg-background-dark rounded" />
                    ))}
                  </div>
                  <div className="h-12 w-full bg-background-dark rounded mt-6" />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    )
  }

  const outfitResult = state.outfitResults

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header
        rightAction={
          <Button variant="primary" size="md" onClick={handleRestartBuilder}>
            Restart Builder
          </Button>
        }
      />

      <main className="flex-1 flex flex-col items-center py-8 px-4 lg:px-20">
        <div className="max-w-[1280px] w-full flex flex-col gap-8">
          {/* Page Heading */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap justify-between items-end gap-4 border-b border-border-dark pb-6">
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em] font-display">
                  Your Curated Loadouts
                </h1>
                <p className="text-text-secondary text-base lg:text-lg font-normal leading-normal">
                  Based on <span className="text-white font-medium">{outfitResult.filters.ridingStyle}</span> •
                  <span className="text-white font-medium"> {outfitResult.filters.budgetRange} Budget</span> •
                  <span className="text-white font-medium"> {outfitResult.filters.weather}</span>
                </p>
              </div>

              {/* Filter Tags */}
              <FilterTags filters={outfitResult.filters} onEdit={handleEditFilters} />
            </div>
          </div>

          {/* Outfit Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {outfitResult.outfits.map((outfit: Outfit) => (
              <OutfitCard
                key={outfit.id}
                outfit={outfit}
                onCtaClick={handleOutfitCta}
                onProductClick={handleProductClick}
              />
            ))}
          </div>

          {/* Footer Disclaimer */}
          <div className="flex justify-center mt-4 mb-10">
            <p className="text-text-secondary text-sm text-center max-w-2xl">
              Prices are estimates based on current deals. Availability subject to change.{' '}
              <a className="text-primary hover:underline" href="#">
                Read our fitting guide
              </a>{' '}
              before purchasing.
            </p>
          </div>
        </div>
      </main>

      {/* Filter Modal */}
      <FilterModal
        isOpen={state.isModalOpen}
        onClose={closeModal}
        initialFilters={state.filterCriteria}
        onApply={handleApplyFilters}
      />
    </div>
  )
}

/**
 * OutfitBuilderPage Component
 *
 * Main page component wrapped with OutfitBuilderProvider.
 * Phase 2: Dynamic filtering with state management.
 */
export default function OutfitBuilderPage() {
  return (
    <OutfitBuilderProvider>
      <OutfitBuilderContent />
    </OutfitBuilderProvider>
  )
}
