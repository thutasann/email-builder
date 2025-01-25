'use client'

import { useSelectedElement } from '@/core/providers/contexts/selected-element-context'
import { CommonStyles } from '@/core/types/element.type'
import { DragElementProps } from '@/core/types/email-template.type'
import { useCallback, useEffect, useState } from 'react'
import SettingsFields, { FieldName, StyleFieldName } from './settings-fields'

function Settings() {
  const { selectedElement, setSelectedElement } = useSelectedElement()
  const [element, setElement] = useState<DragElementProps | null>(null)

  /** set element based on the selected element */
  useEffect(() => {
    if (selectedElement?.layout?.[selectedElement?.index]) {
      setElement(selectedElement?.layout?.[selectedElement?.index])
    } else {
      setElement(null)
    }
  }, [selectedElement])

  /** Handle Input Change */
  const handleInputChange = useCallback(
    (fieldName: FieldName, value: string) => {
      const updatedData = { ...selectedElement }
      if (!updatedData.layout || !selectedElement) return

      const updatedLayout = { ...updatedData.layout }

      updatedLayout[selectedElement.index] = {
        ...updatedLayout[selectedElement.index],
        [fieldName]: value,
      }

      setSelectedElement({
        layout: updatedLayout,
        index: selectedElement.index,
      })
    },
    [selectedElement, setSelectedElement],
  )

  /** Handle Style Change */
  const handleStyleChange = useCallback(
    (fieldName: StyleFieldName, value: string, isOuterStyle: boolean = false) => {
      const updatedData = { ...selectedElement }
      if (!updatedData.layout || !selectedElement) return

      const updatedLayout = { ...updatedData.layout }
      const updatedElement = { ...updatedLayout[selectedElement.index] }
      const updatedStyle = { ...updatedElement.style } as CommonStyles
      const updatedOuterStyle = { ...updatedElement.outerStyle } as CommonStyles

      if (isOuterStyle) {
        updatedOuterStyle[fieldName] = value
      } else {
        updatedStyle[fieldName] = value
      }

      updatedElement.style = updatedStyle
      updatedElement.outerStyle = updatedOuterStyle

      console.log(updatedElement.outerStyle)

      updatedLayout[selectedElement.index] = updatedElement

      setSelectedElement({
        layout: updatedLayout,
        index: selectedElement.index,
      })
    },
    [selectedElement, setSelectedElement],
  )

  return (
    <aside className='px-5 py-10'>
      <h2 className='text-lg mb-2 font-semibold text-slate-700'>{element ? element.type : 'Settings'}</h2>
      {element ? (
        <SettingsFields element={element} handleInputChange={handleInputChange} handleStyleChange={handleStyleChange} />
      ) : (
        <p className='text-sm text-slate-700'>Select an element to view its settings</p>
      )}
    </aside>
  )
}

export default Settings
