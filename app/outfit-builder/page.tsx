'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/atoms/Button'
import { OutfitCard, FilterTags } from '@/components/outfit-builder'
import { sportTouringOutfits } from '@/lib/data/mock'

export default function OutfitBuilderPage() {
  const [outfitResult] = useState(sportTouringOutfits)

  // Placeholder handlers (Phase 1)
  const handleRestartBuilder = () => {
    console.log('Restart Builder clicked')
  }

  const handleEditFilters = () => {
    console.log('Edit Filters clicked')
  }

  const handleOutfitCta = (outfitId: string) => {
    console.log('Outfit CTA clicked:', outfitId)
  }

  const handleProductClick = (productId: string) => {
    console.log('Product clicked:', productId)
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-dark px-6 py-4 lg:px-10 bg-background-dark sticky top-0 z-50">
        <div className="flex items-center gap-4 text-white">
          <div className="size-8 text-primary">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z"></path>
            </svg>
          </div>
          <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em] font-display">
            Biker Shop Searcher
          </h2>
        </div>
        <div className="hidden lg:flex flex-1 justify-end gap-8">
          <nav className="flex items-center gap-9">
            <a
              className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal"
              href="/"
            >
              Gear Search
            </a>
            <a
              className="text-primary text-sm font-medium leading-normal"
              href="/outfit-builder"
            >
              Outfit Builder
            </a>
            <a
              className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal"
              href="#"
            >
              Deals
            </a>
            <a
              className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal"
              href="#"
            >
              My Garage
            </a>
          </nav>
        </div>
        <div className="hidden lg:block">
          <Button variant="primary" size="md" onClick={handleRestartBuilder}>
            Restart Builder
          </Button>
        </div>
        <div className="lg:hidden text-white">
          <span className="material-symbols-outlined">menu</span>
        </div>
      </header>

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
            {outfitResult.outfits.map((outfit) => (
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
    </div>
  )
}
