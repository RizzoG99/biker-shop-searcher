import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'UI/Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Badge>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Best Seller',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Sport Touring',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'In Stock',
  },
}

export const Accent: Story = {
  args: {
    variant: 'accent',
    children: 'Premium',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Featured',
  },
}

export const Certification: Story = {
  args: {
    variant: 'certification',
    children: 'SNELL',
  },
}

export const WithLeftIcon: Story = {
  args: {
    variant: 'secondary',
    icon: 'attach_money',
    iconPosition: 'left',
    children: '$500 - $1500',
  },
}

export const WithRightIcon: Story = {
  args: {
    variant: 'primary',
    icon: 'arrow_forward',
    iconPosition: 'right',
    children: 'View More',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="certification">SNELL</Badge>
    </div>
  ),
}

export const SafetyCertifications: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="certification">DOT</Badge>
      <Badge variant="certification">SNELL</Badge>
      <Badge variant="certification">ECE</Badge>
      <Badge variant="certification">FIM</Badge>
      <Badge variant="certification">CE 1</Badge>
      <Badge variant="certification">CE 2</Badge>
    </div>
  ),
}

export const FilterTags: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="secondary" icon="attach_money">
        $500 - $1500
      </Badge>
      <Badge variant="secondary" icon="palette">
        Black/Red
      </Badge>
      <Badge variant="secondary" icon="sports_motorsports">
        Sport Touring
      </Badge>
    </div>
  ),
}
