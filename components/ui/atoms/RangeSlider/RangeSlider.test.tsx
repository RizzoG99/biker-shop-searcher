import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RangeSlider } from './RangeSlider'

describe('RangeSlider', () => {
  describe('Basic Rendering', () => {
    it('renders slider input', () => {
      render(<RangeSlider min={0} max={100} step={1} value={50} onChange={() => {}} />)

      const slider = screen.getByRole('slider')
      expect(slider).toBeInTheDocument()
    })

    it('renders with label', () => {
      render(
        <RangeSlider min={0} max={100} step={1} value={50} onChange={() => {}} label="Volume" />
      )

      expect(screen.getByText('Volume')).toBeInTheDocument()
    })

    it('renders without label', () => {
      const { container } = render(
        <RangeSlider min={0} max={100} step={1} value={50} onChange={() => {}} />
      )

      const label = container.querySelector('label')
      expect(label).not.toBeInTheDocument()
    })

    it('renders value badge by default', () => {
      render(<RangeSlider min={0} max={100} step={1} value={50} onChange={() => {}} />)

      expect(screen.getByText('50')).toBeInTheDocument()
    })

    it('hides value badge when showValueBadge is false', () => {
      render(
        <RangeSlider
          min={0}
          max={100}
          step={1}
          value={50}
          onChange={() => {}}
          showValueBadge={false}
        />
      )

      expect(screen.queryByText('50')).not.toBeInTheDocument()
    })

    it('renders min label', () => {
      render(
        <RangeSlider
          min={0}
          max={100}
          step={1}
          value={50}
          onChange={() => {}}
          minLabel="Minimum"
        />
      )

      expect(screen.getByText('Minimum')).toBeInTheDocument()
    })

    it('renders max label', () => {
      render(
        <RangeSlider
          min={0}
          max={100}
          step={1}
          value={50}
          onChange={() => {}}
          maxLabel="Maximum"
        />
      )

      expect(screen.getByText('Maximum')).toBeInTheDocument()
    })

    it('renders both min and max labels', () => {
      render(
        <RangeSlider
          min={0}
          max={100}
          step={1}
          value={50}
          onChange={() => {}}
          minLabel="Min"
          maxLabel="Max"
        />
      )

      expect(screen.getByText('Min')).toBeInTheDocument()
      expect(screen.getByText('Max')).toBeInTheDocument()
    })

    it('shows default min/max values when labels not provided', () => {
      render(
        <RangeSlider
          min={0}
          max={100}
          step={1}
          value={50}
          onChange={() => {}}
          minLabel=""
          maxLabel=""
        />
      )

      // When empty strings are provided, they should be shown
      expect(screen.queryByText('0')).not.toBeInTheDocument()
      expect(screen.queryByText('100')).not.toBeInTheDocument()
    })
  })

  describe('Value Handling', () => {
    it('sets correct initial value', () => {
      render(<RangeSlider min={0} max={100} step={1} value={75} onChange={() => {}} />)

      const slider = screen.getByRole('slider') as HTMLInputElement
      expect(slider.value).toBe('75')
    })

    it('calls onChange when value changes', () => {
      const handleChange = vi.fn()

      render(<RangeSlider min={0} max={100} step={1} value={50} onChange={handleChange} />)

      const slider = screen.getByRole('slider')
      fireEvent.change(slider, { target: { value: '60' } })

      expect(handleChange).toHaveBeenCalledWith(60)
    })

    it('respects min value', () => {
      render(<RangeSlider min={10} max={100} step={1} value={10} onChange={() => {}} />)

      const slider = screen.getByRole('slider') as HTMLInputElement
      expect(slider.min).toBe('10')
    })

    it('respects max value', () => {
      render(<RangeSlider min={0} max={100} step={1} value={50} onChange={() => {}} />)

      const slider = screen.getByRole('slider') as HTMLInputElement
      expect(slider.max).toBe('100')
    })

    it('respects step value', () => {
      render(<RangeSlider min={0} max={100} step={5} value={50} onChange={() => {}} />)

      const slider = screen.getByRole('slider') as HTMLInputElement
      expect(slider.step).toBe('5')
    })
  })

  describe('Formatting', () => {
    it('uses default formatting', () => {
      render(<RangeSlider min={0} max={100} step={1} value={50} onChange={() => {}} />)

      expect(screen.getByText('50')).toBeInTheDocument()
    })

    it('uses custom formatValue function', () => {
      render(
        <RangeSlider
          min={0}
          max={100}
          step={1}
          value={50}
          onChange={() => {}}
          formatValue={(val) => `$${val}`}
        />
      )

      expect(screen.getByText('$50')).toBeInTheDocument()
    })

    it('formats value with currency', () => {
      render(
        <RangeSlider
          min={0}
          max={3000}
          step={100}
          value={1500}
          onChange={() => {}}
          formatValue={(val) => `$${val.toLocaleString()}`}
        />
      )

      expect(screen.getByText('$1,500')).toBeInTheDocument()
    })

    it('formats value with percentage', () => {
      render(
        <RangeSlider
          min={0}
          max={100}
          step={1}
          value={75}
          onChange={() => {}}
          formatValue={(val) => `${val}%`}
        />
      )

      expect(screen.getByText('75%')).toBeInTheDocument()
    })
  })

  describe('ARIA Attributes', () => {
    it('has correct aria-valuemin', () => {
      render(<RangeSlider min={10} max={100} step={1} value={50} onChange={() => {}} />)

      const slider = screen.getByRole('slider')
      expect(slider).toHaveAttribute('aria-valuemin', '10')
    })

    it('has correct aria-valuemax', () => {
      render(<RangeSlider min={0} max={200} step={1} value={50} onChange={() => {}} />)

      const slider = screen.getByRole('slider')
      expect(slider).toHaveAttribute('aria-valuemax', '200')
    })

    it('has correct aria-valuenow', () => {
      render(<RangeSlider min={0} max={100} step={1} value={75} onChange={() => {}} />)

      const slider = screen.getByRole('slider')
      expect(slider).toHaveAttribute('aria-valuenow', '75')
    })

    it('has aria-label when label is provided', () => {
      render(
        <RangeSlider min={0} max={100} step={1} value={50} onChange={() => {}} label="Volume" />
      )

      const slider = screen.getByRole('slider')
      expect(slider).toHaveAttribute('aria-label', 'Volume')
    })

    it('updates aria-valuenow when value changes', () => {
      const { rerender } = render(
        <RangeSlider min={0} max={100} step={1} value={50} onChange={() => {}} />
      )

      let slider = screen.getByRole('slider')
      expect(slider).toHaveAttribute('aria-valuenow', '50')

      rerender(<RangeSlider min={0} max={100} step={1} value={75} onChange={() => {}} />)

      slider = screen.getByRole('slider')
      expect(slider).toHaveAttribute('aria-valuenow', '75')
    })
  })

  describe('Interactive States', () => {
    it('handles focus event', async () => {
      const user = userEvent.setup()
      render(<RangeSlider min={0} max={100} step={1} value={50} onChange={() => {}} />)

      const slider = screen.getByRole('slider')
      await user.click(slider)

      expect(slider).toHaveFocus()
    })

    it('handles blur event', async () => {
      const user = userEvent.setup()
      render(<RangeSlider min={0} max={100} step={1} value={50} onChange={() => {}} />)

      const slider = screen.getByRole('slider')
      await user.click(slider)
      expect(slider).toHaveFocus()

      await user.tab()
      expect(slider).not.toHaveFocus()
    })
  })

  describe('Custom Class Name', () => {
    it('applies custom className', () => {
      const { container } = render(
        <RangeSlider
          min={0}
          max={100}
          step={1}
          value={50}
          onChange={() => {}}
          className="custom-slider"
        />
      )

      const wrapper = container.querySelector('.custom-slider')
      expect(wrapper).toBeInTheDocument()
    })
  })

  describe('Edge Cases', () => {
    it('handles value equal to min', () => {
      render(<RangeSlider min={0} max={100} step={1} value={0} onChange={() => {}} />)

      const slider = screen.getByRole('slider') as HTMLInputElement
      expect(slider.value).toBe('0')
      expect(screen.getByText('0')).toBeInTheDocument()
    })

    it('handles value equal to max', () => {
      render(<RangeSlider min={0} max={100} step={1} value={100} onChange={() => {}} />)

      const slider = screen.getByRole('slider') as HTMLInputElement
      expect(slider.value).toBe('100')
      expect(screen.getByText('100')).toBeInTheDocument()
    })

    it('handles negative values', () => {
      render(<RangeSlider min={-50} max={50} step={1} value={-25} onChange={() => {}} />)

      const slider = screen.getByRole('slider') as HTMLInputElement
      expect(slider.value).toBe('-25')
      expect(screen.getByText('-25')).toBeInTheDocument()
    })

    it('handles decimal steps', () => {
      render(<RangeSlider min={0} max={1} step={0.1} value={0.5} onChange={() => {}} />)

      const slider = screen.getByRole('slider') as HTMLInputElement
      expect(slider.step).toBe('0.1')
    })

    it('handles large numbers', () => {
      render(
        <RangeSlider
          min={0}
          max={10000}
          step={100}
          value={5000}
          onChange={() => {}}
          formatValue={(val) => `$${val.toLocaleString()}`}
        />
      )

      expect(screen.getByText('$5,000')).toBeInTheDocument()
    })
  })
})
