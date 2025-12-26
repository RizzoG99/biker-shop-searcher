import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

/**
 * Custom render function that wraps components with necessary providers
 */
function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return <div className="dark">{children}</div>
  }

  return render(ui, { wrapper: Wrapper, ...options })
}

// Re-export everything from @testing-library/react
export * from '@testing-library/react'

// Override render method
export { customRender as render }
