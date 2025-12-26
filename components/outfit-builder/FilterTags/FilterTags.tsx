'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { FilterTagsProps } from './FilterTags.types'

export const FilterTags: React.FC<FilterTagsProps> = ({ filters, onEdit, className }) => {
  return (
    <div className={cn('flex gap-3 flex-wrap', className)}>
      {/* Budget Tag */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card-dark border border-border-dark text-text-secondary text-sm">
        <span className="material-symbols-outlined text-base">attach_money</span>
        {filters.budgetRange}
      </div>

      {/* Color Tag */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card-dark border border-border-dark text-text-secondary text-sm">
        <span className="material-symbols-outlined text-base">palette</span>
        {filters.color}
      </div>

      {/* Riding Style Tag */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card-dark border border-border-dark text-text-secondary text-sm">
        <span className="material-symbols-outlined text-base">sports_motorsports</span>
        {filters.ridingStyle}
      </div>

      {/* Edit Button */}
      <button
        onClick={onEdit}
        className="flex items-center justify-center size-9 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
        aria-label="Edit filters"
      >
        <span className="material-symbols-outlined text-sm">edit</span>
      </button>
    </div>
  )
}

FilterTags.displayName = 'FilterTags'
