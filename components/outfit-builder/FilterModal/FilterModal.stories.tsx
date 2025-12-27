import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { FilterModal } from './FilterModal'
import type { FilterCriteria } from '@/lib/types/outfit'

const meta: Meta<typeof FilterModal> = {
  title: 'Outfit Builder/FilterModal',
  component: FilterModal,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A comprehensive modal for editing outfit builder filter criteria. Includes riding style, budget, color, and usage context sections.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FilterModal>

const defaultFilters: FilterCriteria = {
  budgetRange: '$500 - $1500',
  budgetMin: 500,
  budgetMax: 1500,
  color: 'Black',
  ridingStyle: 'Sport Touring',
  weather: 'All-Weather',
  usageContext: ['City Commute'],
}

/**
 * Default filter modal with standard filters
 */
export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true)
    const [filters, setFilters] = useState(defaultFilters)

    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-primary text-white rounded-lg"
        >
          Open Filter Modal
        </button>
        <FilterModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          initialFilters={filters}
          onApply={(newFilters) => {
            setFilters(newFilters)
            setIsOpen(false)
            console.log('Applied filters:', newFilters)
          }}
        />
      </>
    )
  },
}

/**
 * Modal with Adventure riding style selected
 */
export const AdventureStyle: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true)
    const [filters, setFilters] = useState<FilterCriteria>({
      ...defaultFilters,
      ridingStyle: 'Adventure',
      color: 'Lime',
      usageContext: ['Off-road', 'Long Trip'],
    })

    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-primary text-white rounded-lg"
        >
          Open Filter Modal
        </button>
        <FilterModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          initialFilters={filters}
          onApply={(newFilters) => {
            setFilters(newFilters)
            setIsOpen(false)
            console.log('Applied filters:', newFilters)
          }}
        />
      </>
    )
  },
}

/**
 * Modal with high budget ($2500) for premium gear
 */
export const HighBudget: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true)
    const [filters, setFilters] = useState<FilterCriteria>({
      ...defaultFilters,
      budgetRange: '$500 - $2500',
      budgetMin: 500,
      budgetMax: 2500,
      usageContext: ['Track Day', 'Long Trip'],
    })

    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-primary text-white rounded-lg"
        >
          Open Filter Modal
        </button>
        <FilterModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          initialFilters={filters}
          onApply={(newFilters) => {
            setFilters(newFilters)
            setIsOpen(false)
            console.log('Applied filters:', newFilters)
          }}
        />
      </>
    )
  },
}

/**
 * Interactive demo with live filter updates
 */
export const InteractiveDemo: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    const [filters, setFilters] = useState(defaultFilters)

    return (
      <div className="min-h-screen bg-background-dark p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-6">Outfit Builder Filters</h1>

          <div className="bg-card-dark border border-border-dark rounded-xl p-6 mb-6">
            <h2 className="text-lg font-bold text-white mb-4">Current Filters</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-text-secondary">Riding Style:</span>
                <span className="text-white ml-2 font-medium">{filters.ridingStyle}</span>
              </div>
              <div>
                <span className="text-text-secondary">Budget:</span>
                <span className="text-white ml-2 font-medium">{filters.budgetRange}</span>
              </div>
              <div>
                <span className="text-text-secondary">Color:</span>
                <span className="text-white ml-2 font-medium">{filters.color}</span>
              </div>
              <div>
                <span className="text-text-secondary">Usage:</span>
                <span className="text-white ml-2 font-medium">
                  {filters.usageContext?.join(', ') || 'None'}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Edit Filters
          </button>

          <FilterModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            initialFilters={filters}
            onApply={(newFilters) => {
              setFilters(newFilters)
              setIsOpen(false)
            }}
          />
        </div>
      </div>
    )
  },
}
