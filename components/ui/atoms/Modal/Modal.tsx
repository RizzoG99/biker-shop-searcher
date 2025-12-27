'use client'

import React, { useEffect, useRef, useCallback, useId } from 'react'
import { createPortal } from 'react-dom'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import type { ModalProps } from './Modal.types'

/**
 * Modal size variants using CVA
 */
const modalVariants = cva(
  // Base styles - common to all modals
  'relative bg-card-dark border border-border-dark rounded-2xl shadow-2xl flex flex-col max-h-[90vh]',
  {
    variants: {
      size: {
        default: 'w-full max-w-lg',
        large: 'w-full max-w-3xl',
        fullscreen: 'w-[95vw] h-[95vh] max-h-[95vh]',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

/**
 * Get all focusable elements within a container
 */
function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const selector =
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  return Array.from(container.querySelectorAll<HTMLElement>(selector))
}

/**
 * Modal Component
 *
 * A fully accessible modal dialog with portal rendering, focus trap,
 * keyboard navigation, and customizable styling.
 *
 * Features:
 * - Portal rendering (renders outside DOM hierarchy)
 * - Focus trap (keeps focus within modal)
 * - ESC key to close
 * - Click backdrop to close
 * - Body scroll lock when open
 * - WCAG 2.2 AA compliant
 */
export function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  footer,
  size = 'default',
  closeOnBackdrop = true,
  closeOnEscape = true,
  showCloseButton = true,
  className,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const titleId = useId()
  const descId = useId()

  /**
   * Handle ESC key press
   */
  const handleEscape = useCallback(
    (event: KeyboardEvent) => {
      if (closeOnEscape && event.key === 'Escape') {
        onClose()
      }
    },
    [closeOnEscape, onClose]
  )

  /**
   * Handle backdrop click
   */
  const handleBackdropClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (closeOnBackdrop && event.target === event.currentTarget) {
        onClose()
      }
    },
    [closeOnBackdrop, onClose]
  )

  /**
   * Focus trap implementation
   * Keeps focus within modal by cycling through focusable elements
   */
  const handleTabKey = useCallback((event: KeyboardEvent) => {
    if (!modalRef.current || event.key !== 'Tab') return

    const focusableElements = getFocusableElements(modalRef.current)
    if (focusableElements.length === 0) return

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    // If shift+tab on first element, focus last
    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault()
      lastElement.focus()
    }
    // If tab on last element, focus first
    else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault()
      firstElement.focus()
    }
  }, [])

  /**
   * Effect: Lock body scroll when modal is open
   */
  useEffect(() => {
    if (isOpen) {
      // Lock scroll
      document.body.style.overflow = 'hidden'

      return () => {
        // Unlock scroll
        document.body.style.overflow = ''
      }
    }
  }, [isOpen])

  /**
   * Effect: Focus management and keyboard listeners
   */
  useEffect(() => {
    if (!isOpen) return

    // Store the element that had focus before modal opened
    previousFocusRef.current = document.activeElement as HTMLElement

    // Focus first focusable element in modal
    setTimeout(() => {
      if (modalRef.current) {
        const focusableElements = getFocusableElements(modalRef.current)
        if (focusableElements.length > 0) {
          focusableElements[0].focus()
        } else {
          // If no focusable elements, focus the modal itself
          modalRef.current.focus()
        }
      }
    }, 0)

    // Add keyboard listeners
    document.addEventListener('keydown', handleEscape)
    document.addEventListener('keydown', handleTabKey)

    // Cleanup: restore focus and remove listeners
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('keydown', handleTabKey)

      // Restore focus to previous element
      if (previousFocusRef.current) {
        previousFocusRef.current.focus()
      }
    }
  }, [isOpen, handleEscape, handleTabKey])

  // Don't render if not open
  if (!isOpen) return null

  // Ensure we're in the browser (not SSR)
  if (typeof window === 'undefined') return null

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
      aria-labelledby={title ? titleId : undefined}
      aria-describedby={subtitle ? descId : undefined}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#120f0d]/80 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className={cn(
          modalVariants({ size }),
          'animate-in zoom-in-95 duration-200',
          className
        )}
        tabIndex={-1}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-border-dark">
            <div className="flex-1">
              {title && (
                <h2
                  id={titleId}
                  className="text-xl font-bold text-white font-display"
                >
                  {title}
                </h2>
              )}
              {subtitle && (
                <p id={descId} className="mt-1 text-sm text-text-secondary">
                  {subtitle}
                </p>
              )}
            </div>

            {showCloseButton && (
              <button
                type="button"
                onClick={onClose}
                className="text-text-secondary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-1"
                aria-label="Close modal"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="px-6 py-4 border-t border-border-dark flex items-center justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  )

  // Render in portal
  return createPortal(modalContent, document.body)
}
