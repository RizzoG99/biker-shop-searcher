import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Button } from '@/components/ui/atoms/Button'
import { Badge } from '@/components/ui/atoms/Badge'

const meta: Meta<typeof Card> = {
  title: 'UI/Molecules/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    padding: 'md',
    children: 'This is a basic card',
  },
}

export const WithHeaderAndFooter: Story = {
  render: () => (
    <Card>
      <Card.Header>
        <h3 className="text-white font-bold text-lg">Card Title</h3>
      </Card.Header>
      <Card.Body>
        <p className="text-text-secondary">
          This is the main content of the card.
        </p>
      </Card.Body>
      <Card.Footer>
        <Button size="sm" fullWidth>
          Action
        </Button>
      </Card.Footer>
    </Card>
  ),
}

export const PricingCard: Story = {
  render: () => (
    <Card variant="pricing" isRecommended>
      <Card.Header>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-text-secondary text-sm font-bold uppercase tracking-widest">
            Rider's Choice
          </h3>
          <Badge variant="primary" size="sm">
            Recommended
          </Badge>
        </div>
        <div className="flex items-baseline gap-1 text-white mb-6">
          <span className="text-4xl font-black tracking-[-0.033em]">$999</span>
          <span className="text-text-secondary text-sm font-medium">/ Total</span>
        </div>
        <Button fullWidth>Shop Rider's Choice</Button>
      </Card.Header>
      <Card.Body>
        <ul className="space-y-3">
          <li className="flex items-center gap-2 text-white text-sm">
            <span className="material-symbols-outlined text-primary">check_circle</span>
            Premium Helmet
          </li>
          <li className="flex items-center gap-2 text-white text-sm">
            <span className="material-symbols-outlined text-primary">check_circle</span>
            All-Weather Jacket
          </li>
          <li className="flex items-center gap-2 text-white text-sm">
            <span className="material-symbols-outlined text-primary">check_circle</span>
            CE Certified Gloves
          </li>
        </ul>
      </Card.Body>
    </Card>
  ),
}

export const ProductCard: Story = {
  render: () => (
    <Card variant="product">
      <div className="aspect-square bg-white/5 flex items-center justify-center">
        <span className="material-symbols-outlined text-6xl text-text-secondary">
          sports_motorsports
        </span>
      </div>
      <Card.Body>
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-white font-bold">AGV K6 Helmet</h3>
          <Badge variant="certification" size="sm">
            SNELL
          </Badge>
        </div>
        <p className="text-text-secondary text-sm mb-3">
          Carbon Fiber • DOT/SNELL
        </p>
        <div className="flex items-center justify-between">
          <span className="text-white text-xl font-bold">$599</span>
          <Button size="sm" variant="secondary">
            View Details
          </Button>
        </div>
      </Card.Body>
    </Card>
  ),
}

export const FeatureCard: Story = {
  render: () => (
    <Card variant="feature" padding="md">
      <div className="flex flex-col gap-3">
        <span className="material-symbols-outlined text-primary text-4xl">
          search
        </span>
        <h3 className="text-white text-xl font-bold">Smart Search</h3>
        <p className="text-text-secondary text-sm">
          Find exactly what you need with our advanced search engine designed
          for riders.
        </p>
      </div>
    </Card>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid gap-4" style={{ width: '100%' }}>
      <Card variant="default" padding="md">
        Default Card
      </Card>
      <Card variant="pricing" padding="md">
        Pricing Card
      </Card>
      <Card variant="product" padding="md">
        Product Card
      </Card>
      <Card variant="feature" padding="md">
        Feature Card
      </Card>
      <Card variant="elevated" padding="md">
        Elevated Card
      </Card>
    </div>
  ),
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
}
