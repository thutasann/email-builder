'use client'

import { DragLayoutProps } from '@/core/types/email-template.type'
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

type SelectedElement = {
  /**
   * Selected ElementLayout
   */
  layout: DragLayoutProps
  /**
   * Index
   */
  index: number
}

type SelectedElementContextType = {
  selectedElement: SelectedElement | null
  setSelectedElement: Dispatch<SetStateAction<SelectedElement | null>>
}

const SelectedElementContext = createContext<SelectedElementContextType>({
  selectedElement: null,
  setSelectedElement: () => {},
})

/**
 * ## Selected Element Provider
 */
export const SelectedElementProvider = ({ children }: { children: ReactNode }) => {
  const [selectedElement, setSelectedElement] = useState<SelectedElement | null>(null)

  return (
    <SelectedElementContext.Provider value={{ selectedElement, setSelectedElement }}>
      {children}
    </SelectedElementContext.Provider>
  )
}

/**
 * Use Selected Element
 * @description use this hook to get the selected element
 */
export const useSelectedElement = () => {
  const context = useContext(SelectedElementContext)
  if (!context) {
    throw new Error('useSelectedElement must be used within a SelectedElementProvider')
  }
  return context
}
