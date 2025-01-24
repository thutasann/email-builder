'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

type DNDLayoutContextType = {
  /**
   * Drag and Drop Layout
   */
  dragElementLayout: any
  /**
   * Set Drag and Drop Layout and Element
   */
  setDragElementLayout: Dispatch<SetStateAction<any>>
}

const DNDLayoutContext = createContext<DNDLayoutContextType>({
  dragElementLayout: null,
  setDragElementLayout: () => {},
})

/**
 * ## DND Layout Provider
 */
export const DNDLayoutProvider = ({ children }: { children: ReactNode }) => {
  const [dragElementLayout, setDragElementLayout] = useState<any>(null)
  return (
    <DNDLayoutContext.Provider value={{ dragElementLayout, setDragElementLayout }}>
      {children}
    </DNDLayoutContext.Provider>
  )
}

/**
 * Use DND Layout
 * @description use this hook to get the layout
 */
export const useDNDLayout = () => {
  const context = useContext(DNDLayoutContext)
  if (!context) {
    throw new Error('useDNDLayout must be used within a DNDLayoutProvider')
  }
  return context
}
