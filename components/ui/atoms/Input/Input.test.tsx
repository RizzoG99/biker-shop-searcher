import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@/lib/test/test-utils'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { Input } from './Input'

describe('Input', () => {
  describe('Rendering', () => {
    it('renders input field', () => {
      render(<Input placeholder="Enter text" />)
      expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
    })

    it('renders with label', () => {
      render(<Input label="Email Address" />)
      expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    })

    it('renders with left icon', () => {
      render(<Input leftIcon="search" placeholder="Search" />)
      const container = screen.getByPlaceholderText('Search').parentElement
      expect(container?.querySelector('.material-symbols-outlined')).toHaveTextContent('search')
    })

    it('renders with right icon', () => {
      render(<Input rightIcon="visibility" placeholder="Password" />)
      const container = screen.getByPlaceholderText('Password').parentElement
      expect(container?.querySelector('.material-symbols-outlined')).toHaveTextContent('visibility')
    })
  })

  describe('Variants', () => {
    it('renders default variant', () => {
      render(<Input variant="default" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('bg-card-graphite', 'border-border-dark')
    })

    it('renders search variant', () => {
      render(<Input variant="search" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('bg-card-graphite')
    })

    it('renders error variant when error prop is provided', () => {
      render(<Input error="Invalid input" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('border-red-500')
      expect(input).toHaveAttribute('aria-invalid', 'true')
    })
  })

  describe('Sizes', () => {
    it('renders small size', () => {
      render(<Input inputSize="sm" />)
      expect(screen.getByRole('textbox')).toHaveClass('px-3', 'py-2', 'text-xs')
    })

    it('renders medium size (default)', () => {
      render(<Input />)
      expect(screen.getByRole('textbox')).toHaveClass('px-4', 'py-3', 'text-sm')
    })

    it('renders large size', () => {
      render(<Input inputSize="lg" />)
      expect(screen.getByRole('textbox')).toHaveClass('px-4', 'py-3', 'text-base')
    })
  })

  describe('Helper Text and Errors', () => {
    it('displays helper text', () => {
      render(<Input helperText="Enter your email address" />)
      expect(screen.getByText('Enter your email address')).toBeInTheDocument()
    })

    it('displays error message', () => {
      render(<Input error="This field is required" />)
      const errorMessage = screen.getByRole('alert')
      expect(errorMessage).toHaveTextContent('This field is required')
      expect(errorMessage).toHaveClass('text-red-400')
    })

    it('error message takes precedence over helper text', () => {
      render(
        <Input
          error="Error message"
          helperText="Helper text"
        />
      )
      expect(screen.getByRole('alert')).toHaveTextContent('Error message')
      expect(screen.queryByText('Helper text')).not.toBeInTheDocument()
    })
  })

  describe('States', () => {
    it('handles disabled state', () => {
      render(<Input disabled />)
      expect(screen.getByRole('textbox')).toBeDisabled()
    })

    it('handles readonly state', () => {
      render(<Input readOnly value="Read only" />)
      const input = screen.getByRole('textbox') as HTMLInputElement
      expect(input).toHaveAttribute('readonly')
      expect(input.value).toBe('Read only')
    })

    it('applies fullWidth by default', () => {
      const { container } = render(<Input />)
      const inputContainer = container.querySelector('div.flex.flex-col')
      expect(inputContainer).toHaveClass('w-full')
    })
  })

  describe('Interactions', () => {
    it('handles user input', async () => {
      const user = userEvent.setup()
      render(<Input placeholder="Type here" />)

      const input = screen.getByPlaceholderText('Type here')
      await user.type(input, 'Hello World')

      expect(input).toHaveValue('Hello World')
    })

    it('calls onChange handler', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()
      render(<Input onChange={handleChange} />)

      const input = screen.getByRole('textbox')
      await user.type(input, 'a')

      expect(handleChange).toHaveBeenCalled()
    })

    it('calls onFocus and onBlur handlers', async () => {
      const user = userEvent.setup()
      const handleFocus = vi.fn()
      const handleBlur = vi.fn()
      render(<Input onFocus={handleFocus} onBlur={handleBlur} />)

      const input = screen.getByRole('textbox')
      await user.click(input)
      expect(handleFocus).toHaveBeenCalled()

      await user.tab()
      expect(handleBlur).toHaveBeenCalled()
    })
  })

  describe('Accessibility', () => {
    it('associates label with input', () => {
      render(<Input label="Username" />)
      const input = screen.getByLabelText('Username')
      expect(input).toBeInTheDocument()
    })

    it('associates error message with input via aria-describedby', () => {
      render(<Input error="Invalid" />)
      const input = screen.getByRole('textbox')
      const errorId = input.getAttribute('aria-describedby')

      expect(errorId).toBeTruthy()
      expect(screen.getByText('Invalid')).toHaveAttribute('id', errorId!)
    })

    it('associates helper text with input via aria-describedby', () => {
      render(<Input helperText="Help text" />)
      const input = screen.getByRole('textbox')
      const helperId = input.getAttribute('aria-describedby')

      expect(helperId).toBeTruthy()
      expect(screen.getByText('Help text')).toHaveAttribute('id', helperId!)
    })

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLInputElement>()
      render(<Input ref={ref} />)
      expect(ref.current).toBeInstanceOf(HTMLInputElement)
    })
  })
})
