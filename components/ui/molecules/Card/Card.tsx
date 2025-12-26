import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import {
  CardProps,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps,
} from './Card.types'

export const cardVariants = cva(
  'rounded-2xl overflow-hidden transition-all duration-300',
  {
    variants: {
      variant: {
        default:
          'bg-card-dark border border-border-dark hover:border-text-secondary',
        pricing:
          'bg-card-dark border border-border-dark hover:border-text-secondary',
        product:
          'bg-card-dark border border-border-dark hover:border-primary/50 cursor-pointer',
        feature:
          'bg-card-dark border border-border-dark hover:border-primary',
        elevated:
          'bg-card-dark border border-border-dark shadow-lg hover:shadow-xl',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'none',
    },
  }
)

export const Card: React.FC<CardProps> & {
  Header: React.FC<CardHeaderProps>
  Body: React.FC<CardBodyProps>
  Footer: React.FC<CardFooterProps>
} = ({
  className,
  variant,
  padding,
  children,
  isRecommended,
  header,
  footer,
  ...props
}) => {
  return (
    <div
      className={cn(
        cardVariants({ variant, padding }),
        isRecommended &&
          'border-2 border-primary shadow-lg shadow-primary/20 -translate-y-2',
        className
      )}
      {...props}
    >
      {header && <CardHeader>{header}</CardHeader>}
      {children}
      {footer && <CardFooter>{footer}</CardFooter>}
    </div>
  )
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'p-6 border-b border-border-dark bg-[#1e1915]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export const CardBody: React.FC<CardBodyProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn('p-6', className)} {...props}>
      {children}
    </div>
  )
}

export const CardFooter: React.FC<CardFooterProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'p-6 border-t border-border-dark bg-[#1e1915]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter
Card.displayName = 'Card'
