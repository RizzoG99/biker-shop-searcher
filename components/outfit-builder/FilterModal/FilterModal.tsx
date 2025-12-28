'use client'

import React, { useState, useEffect } from 'react'
import { Modal } from '@/components/ui/atoms/Modal'
import { Radio, RadioGroup } from '@/components/ui/atoms/Radio'
import { Checkbox } from '@/components/ui/atoms/Checkbox'
import { RangeSlider } from '@/components/ui/atoms/RangeSlider'
import { Button } from '@/components/ui/atoms/Button'
import {
  RIDING_STYLE_OPTIONS,
  COLOR_OPTIONS,
  USAGE_CONTEXT_OPTIONS,
  BUDGET_CONFIG,
} from '@/lib/data/constants/filterOptions'
import type { FilterModalProps } from './FilterModal.types'
import type { UsageContext } from '@/lib/types/outfit'

/**
 * FilterModal Component
 *
 * A modal dialog for editing outfit builder filter criteria.
 * Includes four filter sections:
 * - Riding Style (radio group with icons)
 * - Budget (range slider)
 * - Preferred Color (radio buttons)
 * - Usage Context (checkboxes with icons)
 *
 * Uses local state for draft filters and only applies changes
 * when the user clicks "Apply Changes".
 *
 * @example
 * ```tsx
 * <FilterModal
 *   isOpen={isModalOpen}
 *   onClose={() => setIsModalOpen(false)}
 *   initialFilters={currentFilters}
 *   onApply={(newFilters) => {
 *     updateFilters(newFilters)
 *     setIsModalOpen(false)
 *   }}
 * />
 * ```
 */
export function FilterModal({ isOpen, onClose, initialFilters, onApply }: FilterModalProps) {
  // Local draft state - only committed on Apply
  const [draftFilters, setDraftFilters] = useState(initialFilters)

  // Reset draft filters when modal opens or initial filters change
  useEffect(() => {
    if (isOpen) {
      setDraftFilters(initialFilters)
    }
  }, [isOpen, initialFilters])

  // Handle budget change - update both value and display range
  const handleBudgetChange = (newMax: number) => {
    setDraftFilters({
      ...draftFilters,
      budgetMax: newMax,
      budgetRange: `$${draftFilters.budgetMin} - $${newMax}`,
    })
  }

  // Handle usage context toggle
  const handleUsageContextToggle = (context: UsageContext, checked: boolean) => {
    const currentContexts = draftFilters.usageContext || []
    const newContexts = checked
      ? [...currentContexts, context]
      : currentContexts.filter((c) => c !== context)

    setDraftFilters({
      ...draftFilters,
      usageContext: newContexts,
    })
  }

  // Handle apply - commit draft filters
  const handleApply = () => {
    onApply(draftFilters)
  }

  // Handle cancel - close without applying
  const handleCancel = () => {
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCancel}
      title="Edit Outfit Filters"
      subtitle="Customize your preferences to get better outfit recommendations"
      size="large"
      footer={
        <div className="flex gap-3 justify-end">
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleApply}>
            Apply Changes
          </Button>
        </div>
      }
    >
      <div className="space-y-8">
        {/* Section 1: Riding Style */}
        <div>
          <h3 className="text-lg font-bold text-white mb-1">Riding Style</h3>
          <p className="text-sm text-text-secondary mb-4">Choose your primary riding style</p>
          <RadioGroup
            name="riding-style"
            value={draftFilters.ridingStyle}
            onChange={(value) =>
              setDraftFilters({ ...draftFilters, ridingStyle: value as typeof draftFilters.ridingStyle })
            }
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
          >
            {RIDING_STYLE_OPTIONS.map((style) => (
              <Radio
                key={style.value}
                value={style.value}
                label={style.label}
                icon={style.icon}
                variant="icon-card"
              />
            ))}
          </RadioGroup>
        </div>

        {/* Section 2: Budget */}
        <div>
          <RangeSlider
            min={BUDGET_CONFIG.min}
            max={BUDGET_CONFIG.max}
            step={BUDGET_CONFIG.step}
            value={draftFilters.budgetMax}
            onChange={handleBudgetChange}
            label="Maximum Budget"
            formatValue={(val) => `$${val.toLocaleString()}`}
            minLabel={`Entry ($${BUDGET_CONFIG.min})`}
            maxLabel={`Premium ($${(BUDGET_CONFIG.max / 1000).toFixed(0)}k+)`}
          />
        </div>

        {/* Section 3: Preferred Color */}
        <div>
          <h3 className="text-lg font-bold text-white mb-1">Preferred Color</h3>
          <p className="text-sm text-text-secondary mb-4">Select your favorite color</p>
          <RadioGroup
            name="color"
            value={draftFilters.color}
            onChange={(value) => setDraftFilters({ ...draftFilters, color: value })}
            className="flex flex-wrap gap-3"
          >
            {COLOR_OPTIONS.map((color) => (
              <Radio key={color.value} value={color.value} label={color.label} />
            ))}
          </RadioGroup>
        </div>

        {/* Section 4: Usage Context */}
        <div>
          <h3 className="text-lg font-bold text-white mb-1">Usage Context</h3>
          <p className="text-sm text-text-secondary mb-4">Select all that apply (optional)</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {USAGE_CONTEXT_OPTIONS.map((context) => (
              <Checkbox
                key={context.value}
                label={context.label}
                icon={context.icon}
                variant="card"
                checked={draftFilters.usageContext?.includes(context.value as UsageContext) ?? false}
                onChange={(checked) =>
                  handleUsageContextToggle(context.value as UsageContext, checked)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </Modal>
  )
}
