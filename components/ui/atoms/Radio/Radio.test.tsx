import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Radio, RadioGroup } from './Radio'

describe('Radio', () => {
  describe('Default Variant', () => {
    it('renders with label', () => {
      render(<Radio name="test" value="option1" label="Option 1" />)

      expect(screen.getByText('Option 1')).toBeInTheDocument()
      expect(screen.getByRole('radio')).toBeInTheDocument()
    })

    it('renders checked state', () => {
      render(<Radio name="test" value="option1" label="Option 1" checked={true} />)

      const radio = screen.getByRole('radio') as HTMLInputElement
      expect(radio.checked).toBe(true)
    })

    it('renders unchecked state', () => {
      render(<Radio name="test" value="option1" label="Option 1" checked={false} />)

      const radio = screen.getByRole('radio') as HTMLInputElement
      expect(radio.checked).toBe(false)
    })

    it('calls onChange when clicked', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()

      render(
        <Radio name="test" value="option1" label="Option 1" onChange={handleChange} />
      )

      const label = screen.getByText('Option 1')
      await user.click(label)

      expect(handleChange).toHaveBeenCalledWith('option1')
    })

    it('does not call onChange when disabled', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()

      render(
        <Radio name="test" value="option1" label="Option 1" onChange={handleChange} disabled />
      )

      const label = screen.getByText('Option 1')
      await user.click(label)

      expect(handleChange).not.toHaveBeenCalled()
    })

    it('applies disabled styling', () => {
      const { container } = render(
        <Radio name="test" value="option1" label="Option 1" disabled />
      )

      const label = container.querySelector('label')
      expect(label?.className).toContain('opacity-50')
      expect(label?.className).toContain('cursor-not-allowed')
    })

    it('sets correct name attribute', () => {
      render(<Radio name="size" value="small" label="Small" />)

      const radio = screen.getByRole('radio') as HTMLInputElement
      expect(radio.name).toBe('size')
    })

    it('sets correct value attribute', () => {
      render(<Radio name="test" value="option1" label="Option 1" />)

      const radio = screen.getByRole('radio') as HTMLInputElement
      expect(radio.value).toBe('option1')
    })
  })

  describe('Icon-Card Variant', () => {
    it('renders with icon', () => {
      const { container } = render(
        <Radio
          name="test"
          value="sport"
          label="Sport"
          icon="sports_motorsports"
          variant="icon-card"
        />
      )

      const icon = container.querySelector('.material-symbols-outlined')
      expect(icon).toBeInTheDocument()
      expect(icon?.textContent).toBe('sports_motorsports')
    })

    it('renders without radio indicator circle', () => {
      const { container } = render(
        <Radio
          name="test"
          value="sport"
          label="Sport"
          icon="sports_motorsports"
          variant="icon-card"
        />
      )

      // The circle should be hidden for icon-card variant
      const indicator = container.querySelector('[class*="size-5"]')
      expect(indicator).not.toBeInTheDocument()
    })

    it('applies card styling when checked', () => {
      const { container } = render(
        <Radio
          name="test"
          value="sport"
          label="Sport"
          icon="sports_motorsports"
          variant="icon-card"
          checked={true}
        />
      )

      const label = container.querySelector('label')
      expect(label?.className).toContain('border-primary')
      expect(label?.className).toContain('bg-primary/10')
    })

    it('applies card styling when unchecked', () => {
      const { container } = render(
        <Radio
          name="test"
          value="sport"
          label="Sport"
          icon="sports_motorsports"
          variant="icon-card"
          checked={false}
        />
      )

      const label = container.querySelector('label')
      expect(label?.className).toContain('border-border-dark')
      expect(label?.className).toContain('bg-card-dark')
    })

    it('has correct ARIA attributes', () => {
      const { container } = render(
        <Radio
          name="test"
          value="sport"
          label="Sport"
          icon="sports_motorsports"
          variant="icon-card"
          checked={true}
        />
      )

      const label = container.querySelector('label')
      expect(label).toHaveAttribute('role', 'radio')
      expect(label).toHaveAttribute('aria-checked', 'true')
    })

    it('is keyboard navigable', () => {
      const { container } = render(
        <Radio
          name="test"
          value="sport"
          label="Sport"
          icon="sports_motorsports"
          variant="icon-card"
        />
      )

      const label = container.querySelector('label')
      expect(label).toHaveAttribute('tabIndex', '0')
    })

    it('handles keyboard selection with Space', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()
      const { container } = render(
        <Radio
          name="test"
          value="sport"
          label="Sport"
          icon="sports_motorsports"
          variant="icon-card"
          onChange={handleChange}
        />
      )

      const label = container.querySelector('label')!
      label.focus()
      await user.keyboard(' ')

      expect(handleChange).toHaveBeenCalledWith('sport')
    })

    it('handles keyboard selection with Enter', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()
      const { container } = render(
        <Radio
          name="test"
          value="sport"
          label="Sport"
          icon="sports_motorsports"
          variant="icon-card"
          onChange={handleChange}
        />
      )

      const label = container.querySelector('label')!
      label.focus()
      await user.keyboard('{Enter}')

      expect(handleChange).toHaveBeenCalledWith('sport')
    })
  })

  describe('RadioGroup', () => {
    it('renders children', () => {
      render(
        <RadioGroup name="size" value="medium" onChange={() => {}}>
          <Radio value="small" label="Small" />
          <Radio value="medium" label="Medium" />
          <Radio value="large" label="Large" />
        </RadioGroup>
      )

      expect(screen.getByText('Small')).toBeInTheDocument()
      expect(screen.getByText('Medium')).toBeInTheDocument()
      expect(screen.getByText('Large')).toBeInTheDocument()
    })

    it('has radiogroup role', () => {
      const { container } = render(
        <RadioGroup name="size" value="medium" onChange={() => {}}>
          <Radio value="small" label="Small" />
        </RadioGroup>
      )

      const group = container.querySelector('[role="radiogroup"]')
      expect(group).toBeInTheDocument()
    })

    it('manages checked state for all radios', () => {
      render(
        <RadioGroup name="size" value="medium" onChange={() => {}}>
          <Radio value="small" label="Small" />
          <Radio value="medium" label="Medium" />
          <Radio value="large" label="Large" />
        </RadioGroup>
      )

      const radios = screen.getAllByRole('radio') as HTMLInputElement[]
      expect(radios[0].checked).toBe(false) // small
      expect(radios[1].checked).toBe(true) // medium
      expect(radios[2].checked).toBe(false) // large
    })

    it('calls onChange when a radio is selected', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()

      render(
        <RadioGroup name="size" value="medium" onChange={handleChange}>
          <Radio value="small" label="Small" />
          <Radio value="medium" label="Medium" />
          <Radio value="large" label="Large" />
        </RadioGroup>
      )

      await user.click(screen.getByText('Large'))

      expect(handleChange).toHaveBeenCalledWith('large')
    })

    it('navigates with ArrowDown key', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()

      const { container } = render(
        <RadioGroup name="size" value="small" onChange={handleChange}>
          <Radio value="small" label="Small" />
          <Radio value="medium" label="Medium" />
          <Radio value="large" label="Large" />
        </RadioGroup>
      )

      const group = container.querySelector('[role="radiogroup"]')!
      group.focus()
      await user.keyboard('{ArrowDown}')

      expect(handleChange).toHaveBeenCalledWith('medium')
    })

    it('navigates with ArrowUp key', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()

      const { container } = render(
        <RadioGroup name="size" value="medium" onChange={handleChange}>
          <Radio value="small" label="Small" />
          <Radio value="medium" label="Medium" />
          <Radio value="large" label="Large" />
        </RadioGroup>
      )

      const group = container.querySelector('[role="radiogroup"]')!
      group.focus()
      await user.keyboard('{ArrowUp}')

      expect(handleChange).toHaveBeenCalledWith('small')
    })

    it('navigates with ArrowRight key', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()

      const { container } = render(
        <RadioGroup name="size" value="small" onChange={handleChange}>
          <Radio value="small" label="Small" />
          <Radio value="medium" label="Medium" />
          <Radio value="large" label="Large" />
        </RadioGroup>
      )

      const group = container.querySelector('[role="radiogroup"]')!
      group.focus()
      await user.keyboard('{ArrowRight}')

      expect(handleChange).toHaveBeenCalledWith('medium')
    })

    it('navigates with ArrowLeft key', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()

      const { container } = render(
        <RadioGroup name="size" value="medium" onChange={handleChange}>
          <Radio value="small" label="Small" />
          <Radio value="medium" label="Medium" />
          <Radio value="large" label="Large" />
        </RadioGroup>
      )

      const group = container.querySelector('[role="radiogroup"]')!
      group.focus()
      await user.keyboard('{ArrowLeft}')

      expect(handleChange).toHaveBeenCalledWith('small')
    })

    it('wraps navigation from last to first', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()

      const { container } = render(
        <RadioGroup name="size" value="large" onChange={handleChange}>
          <Radio value="small" label="Small" />
          <Radio value="medium" label="Medium" />
          <Radio value="large" label="Large" />
        </RadioGroup>
      )

      const group = container.querySelector('[role="radiogroup"]')!
      group.focus()
      await user.keyboard('{ArrowDown}')

      expect(handleChange).toHaveBeenCalledWith('small')
    })

    it('wraps navigation from first to last', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()

      const { container } = render(
        <RadioGroup name="size" value="small" onChange={handleChange}>
          <Radio value="small" label="Small" />
          <Radio value="medium" label="Medium" />
          <Radio value="large" label="Large" />
        </RadioGroup>
      )

      const group = container.querySelector('[role="radiogroup"]')!
      group.focus()
      await user.keyboard('{ArrowUp}')

      expect(handleChange).toHaveBeenCalledWith('large')
    })

    it('works with icon-card variant radios', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()

      render(
        <RadioGroup name="style" value="sport" onChange={handleChange}>
          <Radio value="sport" label="Sport" icon="sports_motorsports" variant="icon-card" />
          <Radio value="touring" label="Touring" icon="map" variant="icon-card" />
          <Radio value="adventure" label="Adventure" icon="explore" variant="icon-card" />
        </RadioGroup>
      )

      await user.click(screen.getByText('Adventure'))

      expect(handleChange).toHaveBeenCalledWith('adventure')
    })
  })

  describe('Custom Class Name', () => {
    it('applies custom className to Radio', () => {
      const { container } = render(
        <Radio name="test" value="option1" label="Option 1" className="custom-radio" />
      )

      const label = container.querySelector('label')
      expect(label?.className).toContain('custom-radio')
    })

    it('applies custom className to RadioGroup', () => {
      const { container } = render(
        <RadioGroup name="size" value="medium" onChange={() => {}} className="custom-group">
          <Radio value="small" label="Small" />
        </RadioGroup>
      )

      const group = container.querySelector('[role="radiogroup"]')
      expect(group?.className).toContain('custom-group')
    })
  })
})
