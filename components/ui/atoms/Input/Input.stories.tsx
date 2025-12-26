import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'UI/Atoms/Input',
  component: Input,
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
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'rider@example.com',
    type: 'email',
  },
}

export const WithLeftIcon: Story = {
  args: {
    leftIcon: 'search',
    placeholder: 'Search for gear, parts...',
  },
}

export const WithRightIcon: Story = {
  args: {
    rightIcon: 'visibility',
    placeholder: 'Enter password',
    type: 'password',
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'johndoe',
    helperText: 'Choose a unique username',
  },
}

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'rider@example.com',
    error: 'This field is required',
    value: '',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit',
    disabled: true,
    value: 'Disabled value',
  },
}

export const SearchVariant: Story = {
  args: {
    variant: 'search',
    leftIcon: 'search',
    placeholder: 'Search for gear, parts...',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full">
      <Input inputSize="sm" placeholder="Small input" />
      <Input inputSize="md" placeholder="Medium input" />
      <Input inputSize="lg" placeholder="Large input" />
    </div>
  ),
}

export const FormExample: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-full">
      <Input
        label="Full Name"
        placeholder="John Doe"
        helperText="Enter your first and last name"
      />
      <Input
        label="Email Address"
        type="email"
        leftIcon="mail"
        placeholder="rider@example.com"
      />
      <Input
        label="Password"
        type="password"
        rightIcon="visibility"
        placeholder="••••••••"
        helperText="Must be at least 8 characters"
      />
    </div>
  ),
}
