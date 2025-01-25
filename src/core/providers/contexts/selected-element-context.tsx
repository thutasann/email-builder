'use client'

import { DragLayoutElement, DragLayoutProps, EmailTemplate } from '@/core/types/email-template.type'
import { useKeyboardEvent } from '@/hooks/use-keyboard-event'
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react'
import { useEmailTemplate } from './email-template-context'

type SelectedElement = {
  /**
   * Selected Element Layout
   */
  layout: DragLayoutProps
  /**
   * Selected Element Index
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
  const { emailTemplate, setEmailTemplate } = useEmailTemplate()
  useKeyboardEvent('Escape', () => setSelectedElement(null))

  useEffect(() => {
    if (selectedElement?.layout) {
      const updatedEmailTemplate: EmailTemplate = []
      emailTemplate.forEach((item, index) => {
        if (item.id === selectedElement?.layout?.id) {
          updatedEmailTemplate.push(selectedElement.layout as DragLayoutElement)
        } else {
          updatedEmailTemplate.push(item)
        }
      })
      setEmailTemplate(updatedEmailTemplate)
    }
  }, [selectedElement])

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
