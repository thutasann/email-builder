import { GoogleOAuthProvider } from '@react-oauth/google'
import { ReactNode } from 'react'
import { UserDetailsProvider } from '../contexts/user-details-context'
import { ConvexClientProvider } from './convex-client-provider'

/**
 * Providers are used to wrap the app in a context provider.
 * @returns
 */
function Providers({ children }: { children: ReactNode }) {
  return (
    <ConvexClientProvider>
      <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID || ''}>
        <UserDetailsProvider>{children}</UserDetailsProvider>
      </GoogleOAuthProvider>
    </ConvexClientProvider>
  )
}

export default Providers
