import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Radio, RadioGroup } from './Radio'

const meta: Meta<typeof Radio> = {
  title: 'UI/Atoms/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A customizable radio component with default and icon-card variants. Use RadioGroup for managing state and keyboard navigation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'icon-card'],
      description: 'Visual variant of the radio',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the radio is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio is disabled',
    },
  },
}

export default meta
type Story = StoryObj<typeof Radio>

/**
 * Default radio button with label
 */
export const Default: Story = {
  args: {
    name: 'example',
    value: 'option1',
    label: 'Option 1',
    checked: false,
  },
}

/**
 * Checked radio
 */
export const Checked: Story = {
  args: {
    name: 'example',
    value: 'option1',
    label: 'Selected Option',
    checked: true,
  },
}

/**
 * Disabled radio
 */
export const Disabled: Story = {
  args: {
    name: 'example',
    value: 'option1',
    label: 'Disabled Option',
    disabled: true,
  },
}

/**
 * Icon-card variant for visual selection (e.g., riding style)
 */
export const IconCard: Story = {
  args: {
    name: 'riding-style',
    value: 'sport',
    label: 'Sport',
    icon: 'sports_motorsports',
    variant: 'icon-card',
    checked: true,
  },
  decorators: [
    (Story) => (
      <div className="w-48">
        <Story />
      </div>
    ),
  ],
}

/**
 * Basic RadioGroup with default variant
 */
export const BasicGroup: Story = {
  render: () => {
    const [value, setValue] = useState('medium')

    return (
      <RadioGroup name="size" value={value} onChange={setValue} className="space-y-3">
        <Radio value="small" label="Small" />
        <Radio value="medium" label="Medium" />
        <Radio value="large" label="Large" />
      </RadioGroup>
    )
  },
}

/**
 * Horizontal RadioGroup layout
 */
export const HorizontalGroup: Story = {
  render: () => {
    const [value, setValue] = useState('male')

    return (
      <RadioGroup name="gender" value={value} onChange={setValue} className="flex gap-6">
        <Radio value="male" label="Male" />
        <Radio value="female" label="Female" />
        <Radio value="other" label="Other" />
      </RadioGroup>
    )
  },
}

/**
 * RadioGroup with disabled options
 */
export const GroupWithDisabled: Story = {
  render: () => {
    const [value, setValue] = useState('medium')

    return (
      <RadioGroup name="size" value={value} onChange={setValue} className="space-y-3">
        <Radio value="small" label="Small (Out of stock)" disabled />
        <Radio value="medium" label="Medium" />
        <Radio value="large" label="Large" />
        <Radio value="xlarge" label="X-Large (Out of stock)" disabled />
      </RadioGroup>
    )
  },
}

/**
 * Riding Style selector with icon-card variant
 */
export const RidingStyleSelector: Story = {
  render: () => {
    const [style, setStyle] = useState('Sport Touring')

    const styles = [
      { value: 'Adventure', label: 'Adventure', icon: 'explore' },
      { value: 'Sport Touring', label: 'Sport', icon: 'sports_motorsports' },
      { value: 'Street', label: 'Touring', icon: 'map' },
      { value: 'Track', label: 'Café Racer', icon: 'two_wheeler' },
      { value: 'Cruiser', label: 'Urban', icon: 'location_city' },
    ]

    return (
      <div className="max-w-2xl">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-white mb-1">Select Riding Style</h3>
          <p className="text-sm text-text-secondary">Choose your primary riding style</p>
        </div>
        <RadioGroup
          name="riding-style"
          value={style}
          onChange={setStyle}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"
        >
          {styles.map((s) => (
            <Radio
              key={s.value}
              value={s.value}
              label={s.label}
              icon={s.icon}
              variant="icon-card"
            />
          ))}
        </RadioGroup>
        <div className="mt-4 p-4 bg-card-dark border border-border-dark rounded-lg">
          <p className="text-sm text-text-secondary">
            Selected: <span className="text-white font-medium">{style}</span>
          </p>
        </div>
      </div>
    )
  },
}

/**
 * Color selector with icon-card variant
 */
export const ColorSelector: Story = {
  render: () => {
    const [color, setColor] = useState('Black')

    const colors = [
      { value: 'Black', label: 'Black', icon: 'circle' },
      { value: 'White', label: 'White', icon: 'circle' },
      { value: 'Red', label: 'Red', icon: 'circle' },
      { value: 'Blue', label: 'Blue', icon: 'circle' },
      { value: 'Lime', label: 'Lime', icon: 'circle' },
    ]

    return (
      <div className="max-w-md">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-white mb-1">Preferred Color</h3>
          <p className="text-sm text-text-secondary">Select your favorite color</p>
        </div>
        <RadioGroup
          name="color"
          value={color}
          onChange={setColor}
          className="grid grid-cols-3 gap-3"
        >
          {colors.map((c) => (
            <Radio
              key={c.value}
              value={c.value}
              label={c.label}
              icon={c.icon}
              variant="icon-card"
            />
          ))}
        </RadioGroup>
        <div className="mt-4 p-4 bg-card-dark border border-border-dark rounded-lg">
          <p className="text-sm text-text-secondary">
            Selected: <span className="text-white font-medium">{color}</span>
          </p>
        </div>
      </div>
    )
  },
}

/**
 * Keyboard navigation demo
 */
export const KeyboardNavigation: Story = {
  render: () => {
    const [value, setValue] = useState('option2')

    return (
      <div className="max-w-md">
        <div className="mb-4 p-4 bg-card-dark border border-border-dark rounded-lg">
          <h3 className="text-sm font-bold text-white mb-2">Keyboard Navigation</h3>
          <ul className="text-xs text-text-secondary space-y-1">
            <li>• Arrow Up/Down: Navigate between options</li>
            <li>• Arrow Left/Right: Navigate between options</li>
            <li>• Space/Enter: Select option (icon-card variant)</li>
            <li>• Tab: Focus next radio group</li>
          </ul>
        </div>

        <RadioGroup name="keyboard" value={value} onChange={setValue} className="space-y-3">
          <Radio value="option1" label="Option 1 - Try Arrow Keys" />
          <Radio value="option2" label="Option 2 - Currently Selected" />
          <Radio value="option3" label="Option 3 - Navigate Here" />
          <Radio value="option4" label="Option 4 - And Here" />
        </RadioGroup>
      </div>
    )
  },
}

/**
 * Mixed states example
 */
export const MixedStates: Story = {
  render: () => {
    const [plan, setPlan] = useState('pro')

    return (
      <div className="max-w-sm">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-white mb-1">Choose a Plan</h3>
          <p className="text-sm text-text-secondary">Select your subscription tier</p>
        </div>
        <RadioGroup name="plan" value={plan} onChange={setPlan} className="space-y-2">
          <div className="p-4 bg-card-dark border border-border-dark rounded-lg">
            <Radio value="free" label="Free - $0/month" />
            <p className="mt-1 ml-8 text-xs text-text-secondary">Basic features only</p>
          </div>
          <div className="p-4 bg-card-dark border border-border-dark rounded-lg">
            <Radio value="pro" label="Pro - $29/month (Recommended)" />
            <p className="mt-1 ml-8 text-xs text-text-secondary">
              All features + priority support
            </p>
          </div>
          <div className="p-4 bg-card-dark border border-border-dark rounded-lg opacity-50">
            <Radio value="enterprise" label="Enterprise - Contact Sales" disabled />
            <p className="mt-1 ml-8 text-xs text-text-secondary">Coming soon</p>
          </div>
        </RadioGroup>
      </div>
    )
  },
}
