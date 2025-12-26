import { describe, it, expect } from 'vitest'
import { render, screen } from '@/lib/test/test-utils'
import { Badge } from './Badge'

describe('Badge', () => {
  describe('Rendering', () => {
    it('renders with children', () => {
      render(<Badge>Test Badge</Badge>)
      expect(screen.getByText('Test Badge')).toBeInTheDocument()
    })

    it('renders with left icon', () => {
      const { container } = render(
        <Badge icon="check" iconPosition="left">
          With Icon
        </Badge>
      )
      const icons = container.querySelectorAll('.material-symbols-outlined')
      expect(icons[0]).toHaveTextContent('check')
    })

    it('renders with right icon', () => {
      const { container } = render(
        <Badge icon="arrow_forward" iconPosition="right">
          With Icon
        </Badge>
      )
      const icons = container.querySelectorAll('.material-symbols-outlined')
      expect(icons[icons.length - 1]).toHaveTextContent('arrow_forward')
    })
  })

  describe('Variants', () => {
    it('renders primary variant', () => {
      render(<Badge variant="primary">Primary</Badge>)
      const badge = screen.getByText('Primary')
      expect(badge).toHaveClass('bg-primary', 'text-white')
    })

    it('renders secondary variant', () => {
      render(<Badge variant="secondary">Secondary</Badge>)
      const badge = screen.getByText('Secondary')
      expect(badge).toHaveClass('bg-card-dark', 'border-border-dark')
    })

    it('renders success variant', () => {
      render(<Badge variant="success">Success</Badge>)
      const badge = screen.getByText('Success')
      expect(badge).toHaveClass('bg-green-600')
    })

    it('renders accent variant', () => {
      render(<Badge variant="accent">Accent</Badge>)
      const badge = screen.getByText('Accent')
      expect(badge).toHaveClass('bg-accent')
    })

    it('renders outline variant', () => {
      render(<Badge variant="outline">Outline</Badge>)
      const badge = screen.getByText('Outline')
      expect(badge).toHaveClass('border-primary', 'text-primary')
    })

    it('renders certification variant', () => {
      render(<Badge variant="certification">SNELL</Badge>)
      const badge = screen.getByText('SNELL')
      expect(badge).toHaveClass('bg-white/5', 'border-white/20')
    })
  })

  describe('Sizes', () => {
    it('renders small size', () => {
      render(<Badge size="sm">Small</Badge>)
      expect(screen.getByText('Small')).toHaveClass('px-2.5', 'py-0.5', 'text-xs')
    })

    it('renders medium size (default)', () => {
      render(<Badge>Medium</Badge>)
      expect(screen.getByText('Medium')).toHaveClass('px-3', 'py-1', 'text-sm')
    })

    it('renders large size', () => {
      render(<Badge size="lg">Large</Badge>)
      expect(screen.getByText('Large')).toHaveClass('px-4', 'py-2', 'text-base')
    })
  })

  describe('Styling', () => {
    it('accepts custom className', () => {
      render(<Badge className="custom-class">Custom</Badge>)
      expect(screen.getByText('Custom')).toHaveClass('custom-class')
    })

    it('merges custom className with variant classes', () => {
      render(
        <Badge variant="primary" className="custom-class">
          Merged
        </Badge>
      )
      const badge = screen.getByText('Merged')
      expect(badge).toHaveClass('bg-primary', 'custom-class')
    })
  })

  describe('Accessibility', () => {
    it('renders as span element', () => {
      const { container } = render(<Badge>Span Badge</Badge>)
      expect(container.querySelector('span')).toBeInTheDocument()
    })

    it('supports data attributes', () => {
      render(<Badge data-testid="test-badge">Test</Badge>)
      expect(screen.getByTestId('test-badge')).toBeInTheDocument()
    })
  })
})
