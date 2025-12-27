import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  describe('Default Variant', () => {
    it('renders with label', () => {
      render(<Checkbox label="Accept terms" />)

      expect(screen.getByText('Accept terms')).toBeInTheDocument()
      expect(screen.getByRole('checkbox')).toBeInTheDocument()
    })

    it('renders checked state', () => {
      render(<Checkbox label="Accept terms" checked={true} />)

      const checkbox = screen.getByRole('checkbox') as HTMLInputElement
      expect(checkbox.checked).toBe(true)
    })

    it('renders unchecked state', () => {
      render(<Checkbox label="Accept terms" checked={false} />)

      const checkbox = screen.getByRole('checkbox') as HTMLInputElement
      expect(checkbox.checked).toBe(false)
    })

    it('renders check icon when checked', () => {
      const { container } = render(<Checkbox label="Accept terms" checked={true} />)

      const checkIcon = container.querySelector('.material-symbols-outlined')
      expect(checkIcon).toBeInTheDocument()
      expect(checkIcon?.textContent).toBe('check')
    })

    it('does not render check icon when unchecked', () => {
      const { container } = render(<Checkbox label="Accept terms" checked={false} />)

      const checkIcon = container.querySelector('.material-symbols-outlined')
      expect(checkIcon).not.toBeInTheDocument()
    })

    it('calls onChange when clicked', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()

      render(<Checkbox label="Accept terms" onChange={handleChange} checked={false} />)

      const label = screen.getByText('Accept terms')
      await user.click(label)

      expect(handleChange).toHaveBeenCalledWith(true)
    })

    it('calls onChange with opposite value when clicked', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()

      render(<Checkbox label="Accept terms" onChange={handleChange} checked={true} />)

      const label = screen.getByText('Accept terms')
      await user.click(label)

      expect(handleChange).toHaveBeenCalledWith(false)
    })

    it('does not call onChange when disabled', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()

      render(<Checkbox label="Accept terms" onChange={handleChange} disabled />)

      const label = screen.getByText('Accept terms')
      await user.click(label)

      expect(handleChange).not.toHaveBeenCalled()
    })

    it('applies disabled styling', () => {
      const { container } = render(<Checkbox label="Accept terms" disabled />)

      const label = container.querySelector('label')
      expect(label?.className).toContain('opacity-50')
      expect(label?.className).toContain('cursor-not-allowed')
    })

    it('applies checked text styling', () => {
      const { container } = render(<Checkbox label="Accept terms" checked={true} />)

      const text = screen.getByText('Accept terms')
      expect(text.className).toContain('text-white')
      expect(text.className).toContain('font-medium')
    })

    it('applies unchecked text styling', () => {
      const { container } = render(<Checkbox label="Accept terms" checked={false} />)

      const text = screen.getByText('Accept terms')
      expect(text.className).toContain('text-text-secondary')
    })
  })

  describe('Card Variant', () => {
    it('renders with icon', () => {
      const { container } = render(
        <Checkbox label="City Commute" icon="commute" variant="card" />
      )

      const icon = container.querySelector('.material-symbols-outlined')
      expect(icon).toBeInTheDocument()
      expect(icon?.textContent).toBe('commute')
    })

    it('renders without checkbox indicator square', () => {
      const { container } = render(
        <Checkbox label="City Commute" icon="commute" variant="card" />
      )

      // The indicator should be hidden for card variant
      const indicator = container.querySelector('[class*="size-5"]')
      expect(indicator).not.toBeInTheDocument()
    })

    it('applies card styling when checked', () => {
      const { container } = render(
        <Checkbox label="City Commute" icon="commute" variant="card" checked={true} />
      )

      const label = container.querySelector('label')
      expect(label?.className).toContain('border-primary')
      expect(label?.className).toContain('bg-primary/10')
    })

    it('applies card styling when unchecked', () => {
      const { container } = render(
        <Checkbox label="City Commute" icon="commute" variant="card" checked={false} />
      )

      const label = container.querySelector('label')
      expect(label?.className).toContain('border-border-dark')
      expect(label?.className).toContain('bg-card-dark')
    })

    it('has correct ARIA attributes', () => {
      const { container } = render(
        <Checkbox label="City Commute" icon="commute" variant="card" checked={true} />
      )

      const label = container.querySelector('label')
      expect(label).toHaveAttribute('role', 'checkbox')
      expect(label).toHaveAttribute('aria-checked', 'true')
    })

    it('is keyboard navigable', () => {
      const { container } = render(
        <Checkbox label="City Commute" icon="commute" variant="card" />
      )

      const label = container.querySelector('label')
      expect(label).toHaveAttribute('tabIndex', '0')
    })

    it('is not keyboard navigable when disabled', () => {
      const { container } = render(
        <Checkbox label="City Commute" icon="commute" variant="card" disabled />
      )

      const label = container.querySelector('label')
      expect(label).toHaveAttribute('tabIndex', '-1')
    })

    it('handles keyboard selection with Space', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()
      const { container } = render(
        <Checkbox
          label="City Commute"
          icon="commute"
          variant="card"
          onChange={handleChange}
          checked={false}
        />
      )

      const label = container.querySelector('label')!
      label.focus()
      await user.keyboard(' ')

      expect(handleChange).toHaveBeenCalledWith(true)
    })

    it('handles keyboard selection with Enter', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()
      const { container } = render(
        <Checkbox
          label="City Commute"
          icon="commute"
          variant="card"
          onChange={handleChange}
          checked={false}
        />
      )

      const label = container.querySelector('label')!
      label.focus()
      await user.keyboard('{Enter}')

      expect(handleChange).toHaveBeenCalledWith(true)
    })

    it('toggles from checked to unchecked', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()
      const { container } = render(
        <Checkbox
          label="City Commute"
          icon="commute"
          variant="card"
          onChange={handleChange}
          checked={true}
        />
      )

      const label = container.querySelector('label')!
      label.focus()
      await user.keyboard(' ')

      expect(handleChange).toHaveBeenCalledWith(false)
    })

    it('applies checked icon styling', () => {
      const { container } = render(
        <Checkbox label="City Commute" icon="commute" variant="card" checked={true} />
      )

      const icon = container.querySelector('.material-symbols-outlined')
      expect(icon?.className).toContain('text-primary')
    })

    it('applies unchecked icon styling', () => {
      const { container } = render(
        <Checkbox label="City Commute" icon="commute" variant="card" checked={false} />
      )

      const icon = container.querySelector('.material-symbols-outlined')
      expect(icon?.className).toContain('text-text-secondary')
    })

    it('applies centered text layout', () => {
      render(<Checkbox label="City Commute" icon="commute" variant="card" />)

      const text = screen.getByText('City Commute')
      expect(text.className).toContain('text-center')
      expect(text.className).toContain('font-medium')
    })
  })

  describe('Custom Class Name', () => {
    it('applies custom className to default variant', () => {
      const { container } = render(<Checkbox label="Accept terms" className="custom-checkbox" />)

      const label = container.querySelector('label')
      expect(label?.className).toContain('custom-checkbox')
    })

    it('applies custom className to card variant', () => {
      const { container } = render(
        <Checkbox label="City Commute" icon="commute" variant="card" className="custom-card" />
      )

      const label = container.querySelector('label')
      expect(label?.className).toContain('custom-card')
    })
  })

  describe('No Icon (Card Variant)', () => {
    it('renders card variant without icon', () => {
      const { container } = render(<Checkbox label="No Icon Card" variant="card" />)

      const icon = container.querySelector('.material-symbols-outlined')
      expect(icon).not.toBeInTheDocument()
      expect(screen.getByText('No Icon Card')).toBeInTheDocument()
    })
  })
})
