'use client'

import { Layout } from '@/core/libraries/configs/layouts'
import { createContext, ReactNode, useContext, useState } from 'react'

type DragLayout = {
  /**
   * Drag Layout
   */
  dragLayout: Layout & {
    /**
     * Unique Id
     */
    id: number
  }
}

type DNDLayoutContextType = {
  /**
   * Layout
   */
  layout: DragLayout | null
  /**
   * Set Layout
   */
  setLayout: (layout: DragLayout) => void
}

const DNDLayoutContext = createContext<DNDLayoutContextType>({
  layout: null,
  setLayout: () => {},
})

/**
 * DND Layout Provider
 */
export const DNDLayoutProvider = ({ children }: { children: ReactNode }) => {
  const [layout, setLayout] = useState<DragLayout | null>(null)

  return <DNDLayoutContext.Provider value={{ layout, setLayout }}>{children}</DNDLayoutContext.Provider>
}

/**
 * Use DND Layout
 */
export const useDNDLayout = () => {
  const context = useContext(DNDLayoutContext)
  if (!context) {
    throw new Error('useDNDLayout must be used within a DNDLayoutProvider')
  }
  return context
}
