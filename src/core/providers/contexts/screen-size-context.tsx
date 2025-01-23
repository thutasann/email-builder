'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

type ScreenSizeContextType = {
  screenSize: 'mobile' | 'desktop'
  setScreenSize: (screenSize: 'mobile' | 'desktop') => void
}

const ScreenSizeContext = createContext<ScreenSizeContextType>({
  screenSize: 'desktop',
  setScreenSize: () => {},
})

/**
 * ## Screen size provider
 */
export const ScreenSizeProvider = ({ children }: { children: ReactNode }) => {
  const [screenSize, setScreenSize] = useState<'mobile' | 'desktop'>('desktop')

  return <ScreenSizeContext.Provider value={{ screenSize, setScreenSize }}>{children}</ScreenSizeContext.Provider>
}

/**
 * Use screen size
 */
export const useScreenSize = () => {
  const context = useContext(ScreenSizeContext)
  if (!context) {
    throw new Error('useScreenSize must be used within a ScreenSizeProvider')
  }
  return context
}
