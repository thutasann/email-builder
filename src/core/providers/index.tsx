import { GoogleOAuthProvider } from '@react-oauth/google'
import { ReactNode } from 'react'
import { ConvexClientProvider } from './convex-client-provider'

/**
 * Providers are used to wrap the app in a context provider.
 * @returns
 */
function Providers({ children }: { children: ReactNode }) {
  return (
    <ConvexClientProvider>
      <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID || ''}>{children}</GoogleOAuthProvider>
    </ConvexClientProvider>
  )
}

export default Providers
