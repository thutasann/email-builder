'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

type ScreenSizeContextType = {
  screenSize: 'mobile' | 'desktop'
  mode: 'preview' | 'edit'
  setScreenSize: (screenSize: 'mobile' | 'desktop') => void
  setMode: (mode: 'preview' | 'edit') => void
}

const ScreenSizeContext = createContext<ScreenSizeContextType>({
  screenSize: 'desktop',
  mode: 'edit',
  setScreenSize: () => {},
  setMode: () => {},
})

/**
 * ## Screen size provider
 */
export const ScreenSizeProvider = ({ children }: { children: ReactNode }) => {
  const [screenSize, setScreenSize] = useState<'mobile' | 'desktop'>('desktop')
  const [mode, setMode] = useState<'preview' | 'edit'>('edit')

  return (
    <ScreenSizeContext.Provider value={{ screenSize, setScreenSize, mode, setMode }}>
      {children}
    </ScreenSizeContext.Provider>
  )
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
