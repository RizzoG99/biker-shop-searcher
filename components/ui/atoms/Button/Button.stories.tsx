import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'UI/Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'ghost', 'icon'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon', 'icon-sm'],
    },
    isLoading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Start Building Your Outfit',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Browse Gear',
  },
}

export const Accent: Story = {
  args: {
    variant: 'accent',
    children: 'Premium Feature',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Cancel',
  },
}

export const WithLeftIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Search',
    leftIcon: 'search',
  },
}

export const WithRightIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Next',
    rightIcon: 'arrow_forward',
  },
}

export const IconButton: Story = {
  args: {
    variant: 'icon',
    size: 'icon',
    leftIcon: 'favorite',
    'aria-label': 'Add to favorites',
    children: '',
  },
}

export const Loading: Story = {
  args: {
    variant: 'primary',
    children: 'Processing',
    isLoading: true,
  },
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled Button',
    disabled: true,
  },
}

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    children: 'Full Width Button',
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <Button size="sm">Small Button</Button>
      <Button size="md">Medium Button</Button>
      <Button size="lg">Large Button</Button>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
}
