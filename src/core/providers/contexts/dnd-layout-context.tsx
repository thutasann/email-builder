'use client'

import { DragElementProps, DragLayoutProps } from '@/core/types/email-template.type'
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

type DragLayoutElement = {
  /**
   * Drag Layout
   */
  dragLayout: DragLayoutProps | null
  /**
   * Drag Element
   */
  dragElement: DragElementProps | null
}

type DNDLayoutContextType = {
  /**
   * Drag and Drop Layout
   */
  layout: DragLayoutElement | null
  /**
   * Set Drag and Drop Layout and Element
   */
  setLayout: Dispatch<SetStateAction<DragLayoutElement>>
}

const DNDLayoutContext = createContext<DNDLayoutContextType>({
  layout: null,
  setLayout: () => {},
})

/**
 * ## DND Layout Provider
 */
export const DNDLayoutProvider = ({ children }: { children: ReactNode }) => {
  const [layout, setLayout] = useState<DragLayoutElement>({
    dragLayout: null,
    dragElement: null,
  })
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
