import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { RangeSlider } from './RangeSlider'

const meta: Meta<typeof RangeSlider> = {
  title: 'UI/Atoms/RangeSlider',
  component: RangeSlider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A customizable range slider with value badge, custom styling, and keyboard navigation support. Perfect for filtering by budget, volume, or any numeric range.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    min: {
      control: 'number',
      description: 'Minimum value',
    },
    max: {
      control: 'number',
      description: 'Maximum value',
    },
    step: {
      control: 'number',
      description: 'Step increment',
    },
    value: {
      control: 'number',
      description: 'Current value',
    },
    showValueBadge: {
      control: 'boolean',
      description: 'Whether to show value badge above thumb',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof RangeSlider>

/**
 * Default range slider
 */
export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(50)

    return <RangeSlider min={0} max={100} step={1} value={value} onChange={setValue} />
  },
}

/**
 * Range slider with label
 */
export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState(50)

    return (
      <RangeSlider
        min={0}
        max={100}
        step={1}
        value={value}
        onChange={setValue}
        label="Volume Level"
      />
    )
  },
}

/**
 * Range slider with min/max labels
 */
export const WithMinMaxLabels: Story = {
  render: () => {
    const [value, setValue] = useState(50)

    return (
      <RangeSlider
        min={0}
        max={100}
        step={1}
        value={value}
        onChange={setValue}
        label="Brightness"
        minLabel="Dark"
        maxLabel="Bright"
      />
    )
  },
}

/**
 * Budget slider (as used in FilterModal)
 */
export const BudgetSlider: Story = {
  render: () => {
    const [budget, setBudget] = useState(1500)

    return (
      <div className="w-full max-w-md">
        <RangeSlider
          min={0}
          max={3000}
          step={100}
          value={budget}
          onChange={setBudget}
          label="Maximum Budget"
          formatValue={(val) => `$${val.toLocaleString()}`}
          minLabel="Entry ($0)"
          maxLabel="Premium ($3k+)"
        />
        <div className="mt-4 p-4 bg-card-dark border border-border-dark rounded-lg">
          <p className="text-sm text-text-secondary">
            Budget: <span className="text-white font-medium">${budget.toLocaleString()}</span>
          </p>
        </div>
      </div>
    )
  },
}

/**
 * Volume control slider
 */
export const VolumeSlider: Story = {
  render: () => {
    const [volume, setVolume] = useState(70)

    return (
      <RangeSlider
        min={0}
        max={100}
        step={1}
        value={volume}
        onChange={setVolume}
        label="Volume"
        formatValue={(val) => `${val}%`}
        minLabel="Mute"
        maxLabel="Max"
      />
    )
  },
}

/**
 * Percentage slider
 */
export const PercentageSlider: Story = {
  render: () => {
    const [opacity, setOpacity] = useState(75)

    return (
      <RangeSlider
        min={0}
        max={100}
        step={5}
        value={opacity}
        onChange={setOpacity}
        label="Opacity"
        formatValue={(val) => `${val}%`}
      />
    )
  },
}

/**
 * Range slider without value badge
 */
export const WithoutValueBadge: Story = {
  render: () => {
    const [value, setValue] = useState(50)

    return (
      <RangeSlider
        min={0}
        max={100}
        step={1}
        value={value}
        onChange={setValue}
        label="Setting"
        showValueBadge={false}
      />
    )
  },
}

/**
 * Temperature slider with custom formatting
 */
export const TemperatureSlider: Story = {
  render: () => {
    const [temp, setTemp] = useState(22)

    return (
      <RangeSlider
        min={16}
        max={30}
        step={0.5}
        value={temp}
        onChange={setTemp}
        label="Temperature"
        formatValue={(val) => `${val}°C`}
        minLabel="Cool (16°C)"
        maxLabel="Warm (30°C)"
      />
    )
  },
}

/**
 * Age range slider
 */
export const AgeRangeSlider: Story = {
  render: () => {
    const [age, setAge] = useState(25)

    return (
      <RangeSlider
        min={18}
        max={65}
        step={1}
        value={age}
        onChange={setAge}
        label="Age"
        formatValue={(val) => `${val} years`}
        minLabel="18"
        maxLabel="65+"
      />
    )
  },
}

/**
 * Small range slider
 */
export const SmallRange: Story = {
  render: () => {
    const [value, setValue] = useState(5)

    return (
      <RangeSlider
        min={0}
        max={10}
        step={1}
        value={value}
        onChange={setValue}
        label="Rating"
        minLabel="Poor"
        maxLabel="Excellent"
      />
    )
  },
}

/**
 * Large range slider
 */
export const LargeRange: Story = {
  render: () => {
    const [distance, setDistance] = useState(500)

    return (
      <RangeSlider
        min={0}
        max={10000}
        step={100}
        value={distance}
        onChange={setDistance}
        label="Distance"
        formatValue={(val) => `${val} km`}
        minLabel="0 km"
        maxLabel="10,000 km"
      />
    )
  },
}

/**
 * Multiple sliders in a form
 */
export const MultipleSliders: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      volume: 70,
      brightness: 80,
      contrast: 50,
    })

    return (
      <div className="space-y-6 w-full max-w-md">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-white mb-1">Display Settings</h3>
          <p className="text-sm text-text-secondary">Adjust your preferences</p>
        </div>

        <RangeSlider
          min={0}
          max={100}
          step={1}
          value={settings.volume}
          onChange={(val) => setSettings({ ...settings, volume: val })}
          label="Volume"
          formatValue={(val) => `${val}%`}
        />

        <RangeSlider
          min={0}
          max={100}
          step={1}
          value={settings.brightness}
          onChange={(val) => setSettings({ ...settings, brightness: val })}
          label="Brightness"
          formatValue={(val) => `${val}%`}
        />

        <RangeSlider
          min={0}
          max={100}
          step={1}
          value={settings.contrast}
          onChange={(val) => setSettings({ ...settings, contrast: val })}
          label="Contrast"
          formatValue={(val) => `${val}%`}
        />

        <div className="mt-4 p-4 bg-card-dark border border-border-dark rounded-lg">
          <h4 className="text-sm font-bold text-white mb-2">Current Settings</h4>
          <div className="space-y-1 text-sm text-text-secondary">
            <p>
              Volume: <span className="text-white font-medium">{settings.volume}%</span>
            </p>
            <p>
              Brightness: <span className="text-white font-medium">{settings.brightness}%</span>
            </p>
            <p>
              Contrast: <span className="text-white font-medium">{settings.contrast}%</span>
            </p>
          </div>
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
    const [value, setValue] = useState(50)

    return (
      <div className="w-full max-w-md">
        <div className="mb-4 p-4 bg-card-dark border border-border-dark rounded-lg">
          <h3 className="text-sm font-bold text-white mb-2">Keyboard Navigation</h3>
          <ul className="text-xs text-text-secondary space-y-1">
            <li>• Arrow Left/Right: Adjust value by step</li>
            <li>• Home: Jump to minimum</li>
            <li>• End: Jump to maximum</li>
            <li>• Page Up/Down: Large adjustments</li>
          </ul>
        </div>

        <RangeSlider
          min={0}
          max={100}
          step={1}
          value={value}
          onChange={setValue}
          label="Try keyboard navigation"
          formatValue={(val) => `${val}%`}
        />
      </div>
    )
  },
}
