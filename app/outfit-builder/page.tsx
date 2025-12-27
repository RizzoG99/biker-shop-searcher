'use client'

import { Button } from '@/components/ui/atoms/Button'
import { OutfitCard, FilterTags } from '@/components/outfit-builder'
import { sportTouringOutfits } from '@/lib/data/mock'
import Header from '@/components/Header'

export default function OutfitBuilderPage() {
  // Phase 1: Static mock data. Phase 2 will make this dynamic with filter state.
  const outfitResult = sportTouringOutfits

  // Placeholder handlers (Phase 1)
  // TODO: Implement restart builder functionality in Phase 2
  const handleRestartBuilder = () => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Restart Builder clicked')
    }
  }

  // TODO: Implement filter editing functionality in Phase 2
  const handleEditFilters = () => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Edit Filters clicked')
    }
  }

  // TODO: Implement outfit CTA navigation in Phase 2 (navigate to checkout/product pages)
  const handleOutfitCta = (outfitId: string) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Outfit CTA clicked:', outfitId)
    }
  }

  // TODO: Implement product detail page navigation in Phase 2
  const handleProductClick = (productId: string) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Product clicked:', productId)
    }
  }

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
