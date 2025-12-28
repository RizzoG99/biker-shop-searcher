import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A customizable checkbox component with default and card variants. Supports icons and full keyboard navigation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'card'],
      description: 'Visual variant of the checkbox',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

/**
 * Default checkbox with label
 */
export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
    checked: false,
  },
}

/**
 * Checked checkbox
 */
export const Checked: Story = {
  args: {
    label: 'I agree to the privacy policy',
    checked: true,
  },
}

/**
 * Disabled checkbox
 */
export const Disabled: Story = {
  args: {
    label: 'This option is unavailable',
    disabled: true,
    checked: false,
  },
}

/**
 * Disabled and checked checkbox
 */
export const DisabledChecked: Story = {
  args: {
    label: 'This option is locked',
    disabled: true,
    checked: true,
  },
}

/**
 * Card variant for visual selection (e.g., usage context)
 */
export const Card: Story = {
  args: {
    label: 'City Commute',
    icon: 'commute',
    variant: 'card',
    checked: false,
  },
  decorators: [
    (Story) => (
      <div className="w-40">
        <Story />
      </div>
    ),
  ],
}

/**
 * Card variant checked
 */
export const CardChecked: Story = {
  args: {
    label: 'Long Trip',
    icon: 'luggage',
    variant: 'card',
    checked: true,
  },
  decorators: [
    (Story) => (
      <div className="w-40">
        <Story />
      </div>
    ),
  ],
}

/**
 * Multiple checkboxes in a group
 */
export const MultipleCheckboxes: Story = {
  render: () => {
    const [preferences, setPreferences] = useState({
      newsletter: true,
      updates: false,
      promotions: false,
    })

    return (
      <div className="space-y-3">
        <div className="mb-2">
          <h3 className="text-sm font-bold text-white">Email Preferences</h3>
        </div>
        <Checkbox
          label="Newsletter subscription"
          checked={preferences.newsletter}
          onChange={(checked) => setPreferences({ ...preferences, newsletter: checked })}
        />
        <Checkbox
          label="Product updates"
          checked={preferences.updates}
          onChange={(checked) => setPreferences({ ...preferences, updates: checked })}
        />
        <Checkbox
          label="Promotional offers"
          checked={preferences.promotions}
          onChange={(checked) => setPreferences({ ...preferences, promotions: checked })}
        />
      </div>
    )
  },
}

/**
 * Usage context selector with card variant
 */
export const UsageContextSelector: Story = {
  render: () => {
    const [contexts, setContexts] = useState<string[]>(['City Commute'])

    const toggleContext = (context: string, checked: boolean) => {
      if (checked) {
        setContexts([...contexts, context])
      } else {
        setContexts(contexts.filter((c) => c !== context))
      }
    }

    const options = [
      { value: 'City Commute', label: 'City Commute', icon: 'commute' },
      { value: 'Long Trip', label: 'Long Trip', icon: 'luggage' },
      { value: 'Off-road', label: 'Off-road', icon: 'terrain' },
      { value: 'Track Day', label: 'Track Day', icon: 'flag' },
    ]

    return (
      <div className="max-w-md">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-white mb-1">Usage Context</h3>
          <p className="text-sm text-text-secondary">Select all that apply</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {options.map((option) => (
            <Checkbox
              key={option.value}
              label={option.label}
              icon={option.icon}
              variant="card"
              checked={contexts.includes(option.value)}
              onChange={(checked) => toggleContext(option.value, checked)}
            />
          ))}
        </div>
        <div className="mt-4 p-4 bg-card-dark border border-border-dark rounded-lg">
          <p className="text-sm text-text-secondary">
            Selected:{' '}
            <span className="text-white font-medium">
              {contexts.length > 0 ? contexts.join(', ') : 'None'}
            </span>
          </p>
        </div>
      </div>
    )
  },
}

/**
 * Checkbox with description
 */
export const WithDescription: Story = {
  render: () => {
    const [marketing, setMarketing] = useState(false)

    return (
      <div className="max-w-sm">
        <div className="p-4 bg-card-dark border border-border-dark rounded-lg">
          <Checkbox
            label="Marketing communications"
            checked={marketing}
            onChange={setMarketing}
          />
          <p className="mt-2 ml-8 text-xs text-text-secondary">
            Receive emails about new products, features, and exclusive offers. You can unsubscribe
            at any time.
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
    const [settings, setSettings] = useState({
      notifications: true,
      sound: false,
      vibration: false,
    })

    return (
      <div className="max-w-md">
        <div className="mb-4 p-4 bg-card-dark border border-border-dark rounded-lg">
          <h3 className="text-sm font-bold text-white mb-2">Keyboard Navigation</h3>
          <ul className="text-xs text-text-secondary space-y-1">
            <li>• Tab: Navigate to next checkbox</li>
            <li>• Space/Enter: Toggle checkbox</li>
            <li>• Shift+Tab: Navigate to previous checkbox</li>
          </ul>
        </div>

        <div className="space-y-3">
          <Checkbox
            label="Enable notifications"
            checked={settings.notifications}
            onChange={(checked) => setSettings({ ...settings, notifications: checked })}
          />
          <Checkbox
            label="Sound effects"
            checked={settings.sound}
            onChange={(checked) => setSettings({ ...settings, sound: checked })}
          />
          <Checkbox
            label="Vibration feedback"
            checked={settings.vibration}
            onChange={(checked) => setSettings({ ...settings, vibration: checked })}
          />
        </div>
      </div>
    )
  },
}

/**
 * Card variant grid layout
 */
export const CardGrid: Story = {
  render: () => {
    const [features, setFeatures] = useState<string[]>(['ABS', 'TCS'])

    const toggleFeature = (feature: string, checked: boolean) => {
      if (checked) {
        setFeatures([...features, feature])
      } else {
        setFeatures(features.filter((f) => f !== feature))
      }
    }

    const options = [
      { value: 'ABS', label: 'ABS', icon: 'shield' },
      { value: 'TCS', label: 'TCS', icon: 'health_and_safety' },
      { value: 'Cruise Control', label: 'Cruise', icon: 'speed' },
      { value: 'Quickshifter', label: 'Quick', icon: 'engineering' },
      { value: 'Heated Grips', label: 'Heated', icon: 'whatshot' },
      { value: 'LED Lights', label: 'LED', icon: 'lightbulb' },
    ]

    return (
      <div className="max-w-2xl">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-white mb-1">Bike Features</h3>
          <p className="text-sm text-text-secondary">Select desired features</p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {options.map((option) => (
            <Checkbox
              key={option.value}
              label={option.label}
              icon={option.icon}
              variant="card"
              checked={features.includes(option.value)}
              onChange={(checked) => toggleFeature(option.value, checked)}
            />
          ))}
        </div>
        <div className="mt-4 p-4 bg-card-dark border border-border-dark rounded-lg">
          <p className="text-sm text-text-secondary">
            Selected ({features.length}):{' '}
            <span className="text-white font-medium">
              {features.length > 0 ? features.join(', ') : 'None'}
            </span>
          </p>
        </div>
      </div>
    )
  },
}

/**
 * Mixed states example
 */
export const MixedStates: Story = {
  render: () => {
    const [options, setOptions] = useState({
      required: true,
      optional1: false,
      optional2: true,
      disabled: false,
    })

    return (
      <div className="max-w-sm space-y-3">
        <div className="p-4 bg-card-dark border border-border-dark rounded-lg">
          <Checkbox
            label="Required option (checked, disabled)"
            checked={options.required}
            disabled
          />
          <p className="mt-1 ml-8 text-xs text-text-secondary">This is always enabled</p>
        </div>
        <Checkbox
          label="Optional feature 1"
          checked={options.optional1}
          onChange={(checked) => setOptions({ ...options, optional1: checked })}
        />
        <Checkbox
          label="Optional feature 2 (enabled)"
          checked={options.optional2}
          onChange={(checked) => setOptions({ ...options, optional2: checked })}
        />
        <Checkbox label="Not available yet" disabled />
      </div>
    )
  },
}
