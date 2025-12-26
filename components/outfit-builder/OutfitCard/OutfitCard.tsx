'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/atoms/Button'
import { ProductListItem } from '../ProductListItem'
import { OutfitCardProps } from './OutfitCard.types'

export const OutfitCard: React.FC<OutfitCardProps> = ({
  outfit,
  onCtaClick,
  onProductClick,
  className,
}) => {
  const isRecommended = outfit.isRecommended

  return (
    <div
      className={cn(
        'flex flex-col gap-0 rounded-2xl bg-card-dark overflow-hidden group transition-colors duration-300',
        isRecommended
          ? 'border-2 border-primary shadow-[0_0_40px_-10px_rgba(242,108,13,0.3)] lg:-translate-y-4 z-10'
          : 'border border-border-dark hover:border-text-secondary',
        className
      )}
    >
      {/* Recommended Banner */}
      {isRecommended && (
        <div className="bg-primary px-4 py-1 text-center">
          <span className="text-white text-xs font-bold uppercase tracking-widest">
            Recommended Match
          </span>
        </div>
      )}

      {/* Header Section */}
      <div className="p-6 border-b border-border-dark bg-[#1e1915]">
        <div className="flex items-center justify-between mb-2">
          <h3
            className={cn(
              'text-sm font-bold uppercase tracking-widest',
              isRecommended ? 'text-primary' : 'text-text-secondary'
            )}
          >
            {outfit.tierName}
          </h3>
          <span
            className={cn(
              'text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full',
              isRecommended ? 'bg-primary text-white' : 'bg-border-dark text-white'
            )}
          >
            {outfit.badge}
          </span>
        </div>

        <div className="flex items-baseline gap-1 text-white mb-6">
          <span
            className={cn(
              'font-black tracking-[-0.033em]',
              isRecommended ? 'text-5xl text-primary' : 'text-4xl'
            )}
          >
            ${outfit.totalPrice.toLocaleString()}
          </span>
          <span className="text-text-secondary text-sm font-medium">/ Total</span>
        </div>

        <Button
          variant={isRecommended ? 'primary' : 'secondary'}
          size="lg"
          fullWidth
          onClick={() => onCtaClick(outfit.id)}
          className={cn(isRecommended && 'shadow-lg shadow-orange-900/20')}
        >
          {outfit.ctaText}
        </Button>
      </div>

      {/* Products List */}
      <div className="flex flex-col p-2 gap-1">
        {outfit.products.map((product) => (
          <ProductListItem
            key={product.id}
            product={product}
            onClick={onProductClick}
            isHighlighted={isRecommended}
            size={isRecommended ? 'md' : 'sm'}
          />
        ))}
      </div>
    </div>
  )
}

OutfitCard.displayName = 'OutfitCard'
