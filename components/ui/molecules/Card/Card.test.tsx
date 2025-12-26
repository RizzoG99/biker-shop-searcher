import { describe, it, expect } from 'vitest'
import { render, screen } from '@/lib/test/test-utils'
import { Card, CardHeader, CardBody, CardFooter } from './Card'

describe('Card', () => {
  describe('Rendering', () => {
    it('renders with children', () => {
      render(<Card>Card content</Card>)
      expect(screen.getByText('Card content')).toBeInTheDocument()
    })

    it('renders with header prop', () => {
      render(<Card header={<div>Header</div>}>Content</Card>)
      expect(screen.getByText('Header')).toBeInTheDocument()
      expect(screen.getByText('Content')).toBeInTheDocument()
    })

    it('renders with footer prop', () => {
      render(<Card footer={<div>Footer</div>}>Content</Card>)
      expect(screen.getByText('Footer')).toBeInTheDocument()
      expect(screen.getByText('Content')).toBeInTheDocument()
    })

    it('renders with compound components', () => {
      render(
        <Card>
          <Card.Header>Header</Card.Header>
          <Card.Body>Body</Card.Body>
          <Card.Footer>Footer</Card.Footer>
        </Card>
      )
      expect(screen.getByText('Header')).toBeInTheDocument()
      expect(screen.getByText('Body')).toBeInTheDocument()
      expect(screen.getByText('Footer')).toBeInTheDocument()
    })
  })

  describe('Variants', () => {
    it('renders default variant', () => {
      render(<Card data-testid="card">Default</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('bg-card-dark', 'border-border-dark')
    })

    it('renders pricing variant', () => {
      render(<Card variant="pricing" data-testid="card">Pricing</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('bg-card-dark')
    })

    it('renders product variant', () => {
      render(<Card variant="product" data-testid="card">Product</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('cursor-pointer')
    })

    it('renders feature variant', () => {
      render(<Card variant="feature" data-testid="card">Feature</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('hover:border-primary')
    })

    it('renders elevated variant', () => {
      render(<Card variant="elevated" data-testid="card">Elevated</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('shadow-lg')
    })
  })

  describe('Padding', () => {
    it('renders with no padding', () => {
      render(<Card padding="none" data-testid="card">None</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('p-0')
    })

    it('renders with small padding', () => {
      render(<Card padding="sm" data-testid="card">Small</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('p-4')
    })

    it('renders with medium padding', () => {
      render(<Card padding="md" data-testid="card">Medium</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('p-6')
    })

    it('renders with large padding', () => {
      render(<Card padding="lg" data-testid="card">Large</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('p-8')
    })
  })

  describe('Recommended State', () => {
    it('applies recommended styles', () => {
      render(<Card isRecommended data-testid="card">Recommended</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('border-2', 'border-primary', '-translate-y-2')
    })

    it('does not apply recommended styles by default', () => {
      render(<Card data-testid="card">Not recommended</Card>)
      const card = screen.getByTestId('card')
      expect(card).not.toHaveClass('border-2', 'border-primary')
    })
  })

  describe('Compound Components', () => {
    it('CardHeader has correct styles', () => {
      render(<CardHeader data-testid="header">Header</CardHeader>)
      const header = screen.getByTestId('header')
      expect(header).toHaveClass('p-6', 'border-b', 'border-border-dark')
    })

    it('CardBody has correct styles', () => {
      render(<CardBody data-testid="body">Body</CardBody>)
      const body = screen.getByTestId('body')
      expect(body).toHaveClass('p-6')
    })

    it('CardFooter has correct styles', () => {
      render(<CardFooter data-testid="footer">Footer</CardFooter>)
      const footer = screen.getByTestId('footer')
      expect(footer).toHaveClass('p-6', 'border-t', 'border-border-dark')
    })
  })

  describe('Styling', () => {
    it('accepts custom className', () => {
      render(<Card className="custom-class" data-testid="card">Custom</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('custom-class')
    })

    it('accepts custom className on compound components', () => {
      render(
        <Card>
          <Card.Header className="header-class" data-testid="header">Header</Card.Header>
          <Card.Body className="body-class" data-testid="body">Body</Card.Body>
          <Card.Footer className="footer-class" data-testid="footer">Footer</Card.Footer>
        </Card>
      )
      expect(screen.getByTestId('header')).toHaveClass('header-class')
      expect(screen.getByTestId('body')).toHaveClass('body-class')
      expect(screen.getByTestId('footer')).toHaveClass('footer-class')
    })
  })

  describe('Accessibility', () => {
    it('supports data attributes', () => {
      render(<Card data-testid="test-card">Test</Card>)
      expect(screen.getByTestId('test-card')).toBeInTheDocument()
    })

    it('supports ARIA attributes', () => {
      render(<Card role="article" aria-label="Featured card">Content</Card>)
      const card = screen.getByRole('article')
      expect(card).toHaveAttribute('aria-label', 'Featured card')
    })
  })
})
