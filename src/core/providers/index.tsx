'use client'

import { ReactNode } from 'react'
import { ConvexClientProvider } from './convex-client-provider'

/**
 * Providers are used to wrap the app in a context provider.
 * @returns
 */
function Providers({ children }: { children: ReactNode }) {
  return (
    <ConvexClientProvider>
      <div>{children}</div>
    </ConvexClientProvider>
  )
}

export default Providers
