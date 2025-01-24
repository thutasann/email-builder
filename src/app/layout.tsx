import Providers from '@/core/providers'
import { GoogleOAuthProvider } from '@react-oauth/google'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'AI Powered Email Builder',
  description: 'AI Powered Email Builder',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden`}>
        <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID || ''}>
          <Providers>{children}</Providers>
        </GoogleOAuthProvider>
      </body>
    </html>
  )
}
