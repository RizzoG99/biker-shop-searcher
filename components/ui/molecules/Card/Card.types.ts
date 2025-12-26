import { HTMLAttributes, ReactNode } from 'react'
import { VariantProps } from 'class-variance-authority'
import { cardVariants } from './Card'

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  /** Card content */
  children: ReactNode
  /** Whether card is recommended/featured */
  isRecommended?: boolean
  /** Header content */
  header?: ReactNode
  /** Footer content */
  footer?: ReactNode
  /** Additional CSS classes */
  className?: string
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}
