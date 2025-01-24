'use client'

import { DragElementProps, DragLayoutProps } from '@/core/types/email-template.type'
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

type DragElementLayout = Partial<{
  /**
   * Drag Layout
   */
  dragLayout: DragLayoutProps
  /**
   * Drag Element
   */
  dragElement: DragElementProps
}>

type DNDLayoutContextType = {
  /**
   * Drag and Drop Layout Element
   */
  dragElementLayout: DragElementLayout
  /**
   * Set Drag and Drop Layout and Element
   */
  setDragElementLayout: Dispatch<SetStateAction<DragElementLayout>>
}

const DNDLayoutContext = createContext<DNDLayoutContextType>({
  dragElementLayout: {},
  setDragElementLayout: () => {},
})

/**
 * ## DND Layout Provider
 */
export const DNDLayoutProvider = ({ children }: { children: ReactNode }) => {
  const [dragElementLayout, setDragElementLayout] = useState<DragElementLayout>({})

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
