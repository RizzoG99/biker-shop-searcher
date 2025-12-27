'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/atoms/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()

  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Outfit Builder Error:', error)
  }, [error])

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background-dark px-4">
      <div className="max-w-md text-center">
        <span className="material-symbols-outlined text-primary text-6xl mb-4">error</span>
        <h2 className="text-white text-3xl font-black font-display mb-4">
          Something went wrong!
        </h2>
        <p className="text-text-secondary text-base font-body mb-8">
          We encountered an error while loading the outfit builder. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => reset()}
            leftIcon="refresh"
          >
            Try Again
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => router.push('/')}
            leftIcon="home"
          >
            Go Home
          </Button>
        </div>
        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="mt-8 p-4 bg-card-dark rounded-lg text-left">
            <p className="text-text-secondary text-sm font-mono">{error.message}</p>
          </div>
        )}
      </div>
    </div>
  )
}
