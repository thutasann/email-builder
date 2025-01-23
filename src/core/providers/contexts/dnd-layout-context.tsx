'use client'

import { DragLayoutProps } from '@/core/types/email-template.type'
import { createContext, ReactNode, useContext, useState } from 'react'

type DragLayout = {
  /**
   * Drag Layout
   */
  dragLayout: DragLayoutProps
}

type DNDLayoutContextType = {
  /**
   * Drag and Drop Layout
   */
  layout: DragLayout | null
  /**
   * Set Drag and Drop Layout
   */
  setLayout: (layout: DragLayout) => void
}

const DNDLayoutContext = createContext<DNDLayoutContextType>({
  layout: null,
  setLayout: () => {},
})

/**
 * ## DND Layout Provider
 */
export const DNDLayoutProvider = ({ children }: { children: ReactNode }) => {
  const [layout, setLayout] = useState<DragLayout | null>(null)

  return <DNDLayoutContext.Provider value={{ layout, setLayout }}>{children}</DNDLayoutContext.Provider>
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
