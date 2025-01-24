import { ReactNode } from 'react'
import { ConvexClientProvider } from './contexts/convex-client-context'
import { DNDLayoutProvider } from './contexts/dnd-layout-context'
import { EmailTemplateProvider } from './contexts/email-template-context'
import { ScreenSizeProvider } from './contexts/screen-size-context'
import { SelectedElementProvider } from './contexts/selected-element-context'
import { UserDetailsProvider } from './contexts/user-details-context'

/**
 * Providers are used to wrap the app in a context provider.
 * - ConvexClientProvider: provides the convex client
 * - UserDetailsProvider: provides the user details
 * - ScreenSizeProvider: provides the screen size
 * - DNDLayoutProvider: provides the drag and drop layout
 * - EmailTemplateProvider: provides the email template
 * - SelectedElementProvider: provides the selected element
 */
function Providers({ children }: { children: ReactNode }) {
  return (
    <ConvexClientProvider>
      <UserDetailsProvider>
        <ScreenSizeProvider>
          <DNDLayoutProvider>
            <EmailTemplateProvider>
              <SelectedElementProvider>{children}</SelectedElementProvider>
            </EmailTemplateProvider>
          </DNDLayoutProvider>
        </ScreenSizeProvider>
      </UserDetailsProvider>
    </ConvexClientProvider>
  )
}

export default Providers
