import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@/lib/test/test-utils'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { Button } from './Button'

describe('Button', () => {
  describe('Rendering', () => {
    it('renders with children', () => {
      render(<Button>Click me</Button>)
      expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
    })

    it('renders with left icon', () => {
      render(<Button leftIcon="search">Search</Button>)
      const button = screen.getByRole('button', { name: /search/i })
      expect(button.querySelector('.material-symbols-outlined')).toHaveTextContent('search')
    })

    it('renders with right icon', () => {
      render(<Button rightIcon="arrow_forward">Next</Button>)
      const button = screen.getByRole('button', { name: /next/i })
      expect(button.querySelector('.material-symbols-outlined')).toHaveTextContent('arrow_forward')
    })
  })

  describe('Variants', () => {
    it('renders primary variant', () => {
      render(<Button variant="primary">Primary</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-primary')
    })

    it('renders secondary variant', () => {
      render(<Button variant="secondary">Secondary</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('border-2', 'border-primary')
    })

    it('renders accent variant', () => {
      render(<Button variant="accent">Accent</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-accent')
    })

    it('renders ghost variant', () => {
      render(<Button variant="ghost">Ghost</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-transparent')
    })
  })

  describe('Sizes', () => {
    it('renders small size', () => {
      render(<Button size="sm">Small</Button>)
      expect(screen.getByRole('button')).toHaveClass('h-8', 'px-4')
    })

    it('renders medium size (default)', () => {
      render(<Button>Medium</Button>)
      expect(screen.getByRole('button')).toHaveClass('h-10', 'px-6')
    })

    it('renders large size', () => {
      render(<Button size="lg">Large</Button>)
      expect(screen.getByRole('button')).toHaveClass('h-12', 'px-8')
    })
  })

  describe('States', () => {
    it('renders loading state', () => {
      render(<Button isLoading>Loading</Button>)
      const button = screen.getByRole('button')
      expect(button.querySelector('.animate-spin')).toBeInTheDocument()
      expect(button).toBeDisabled()
    })

    it('handles disabled state', () => {
      render(<Button disabled>Disabled</Button>)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('applies fullWidth class', () => {
      render(<Button fullWidth>Full Width</Button>)
      expect(screen.getByRole('button')).toHaveClass('w-full')
    })
  })

  describe('Interactions', () => {
    it('handles click events', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()
      render(<Button onClick={handleClick}>Click me</Button>)

      await user.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('does not call onClick when disabled', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()
      render(
        <Button disabled onClick={handleClick}>
          Disabled
        </Button>
      )

      await user.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('Accessibility', () => {
    it('is keyboard accessible', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()
      render(<Button onClick={handleClick}>Accessible</Button>)

      const button = screen.getByRole('button')
      button.focus()
      expect(button).toHaveFocus()

      await user.keyboard('{Enter}')
      expect(handleClick).toHaveBeenCalled()
    })

    it('supports custom className', () => {
      render(<Button className="custom-class">Custom</Button>)
      expect(screen.getByRole('button')).toHaveClass('custom-class')
    })

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLButtonElement>()
      render(<Button ref={ref}>Ref Button</Button>)
      expect(ref.current).toBeInstanceOf(HTMLButtonElement)
    })
  })
})
