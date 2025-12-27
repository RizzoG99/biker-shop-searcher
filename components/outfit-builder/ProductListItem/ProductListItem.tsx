'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { ProductListItemProps } from './ProductListItem.types'
import { Certification } from '@/lib/types'

const CERTIFICATION_COLORS: Record<Certification['color'], string> = {
  green: 'text-green-500 border-green-500/30 bg-green-500/10',
  yellow: 'text-yellow-500 border-yellow-500/30 bg-yellow-500/10',
  gray: 'text-text-secondary border-border-dark',
} as const

export const ProductListItem: React.FC<ProductListItemProps> = ({
  product,
  onClick,
  isHighlighted = false,
  size = 'sm',
  className,
}) => {
  const imageSize = size === 'md' ? 'size-16' : 'size-14'

  return (
    <button
      onClick={() => onClick(product.id)}
      className={cn(
        'flex items-center gap-3 p-3 rounded-xl transition-colors cursor-pointer group/item w-full text-left',
        'hover:bg-white/5',
        isHighlighted && 'bg-white/[0.02]',
        className
      )}
      aria-label={`View ${product.name}`}
    >
      {/* Product Image */}
      <div
        className={cn(
          'relative rounded-lg shrink-0 bg-white/5 overflow-hidden',
          imageSize
        )}
      >
        <Image
          src={product.imageUrl}
          alt={product.imageAlt}
          fill
          sizes={size === 'md' ? '64px' : '56px'}
          className="object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <p
            className={cn(
              'font-bold truncate transition-colors font-display',
              size === 'md' ? 'text-base' : 'text-sm',
              'text-white group-hover/item:text-primary'
            )}
          >
            {product.name}
          </p>
          {product.certifications.map((cert) => (
            <span
              key={cert.type}
              className={cn(
                'text-[10px] font-bold border px-1 rounded',
                CERTIFICATION_COLORS[cert.color]
              )}
            >
              {cert.type}
            </span>
          ))}
        </div>
        <p
          className={cn(
            'text-text-secondary truncate',
            size === 'md' ? 'text-sm' : 'text-xs'
          )}
        >
          {product.specifications}
        </p>
        <p
          className={cn(
            'font-bold mt-1',
            size === 'md' ? 'text-sm' : 'text-xs',
            isHighlighted ? 'text-primary' : 'text-white'
          )}
        >
          ${product.price}
        </p>
      </div>

      {/* Chevron/Check Icon */}
      <span
        className={cn(
          'material-symbols-outlined',
          isHighlighted ? 'text-primary' : 'text-text-secondary'
        )}
      >
        {isHighlighted ? 'check_circle' : 'chevron_right'}
      </span>
    </button>
  )
}

ProductListItem.displayName = 'ProductListItem'
