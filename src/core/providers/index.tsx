import { GoogleOAuthProvider } from '@react-oauth/google'
import { ReactNode } from 'react'
import { DNDLayoutProvider } from './contexts/dnd-layout-context'
import { EmailTemplateProvider } from './contexts/email-template-context'
import { ScreenSizeProvider } from './contexts/screen-size-context'
import { UserDetailsProvider } from './contexts/user-details-context'
import { ConvexClientProvider } from './convex-client-provider'

/**
 * Providers are used to wrap the app in a context provider.
 * @returns
 */
function Providers({ children }: { children: ReactNode }) {
  return (
    <ConvexClientProvider>
      <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID || ''}>
        <UserDetailsProvider>
          <ScreenSizeProvider>
            <DNDLayoutProvider>
              <EmailTemplateProvider>{children}</EmailTemplateProvider>
            </DNDLayoutProvider>
          </ScreenSizeProvider>
        </UserDetailsProvider>
      </GoogleOAuthProvider>
    </ConvexClientProvider>
  )
}

export default Providers
