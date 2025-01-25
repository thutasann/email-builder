'use client'

import ColorPickerField from '@/components/atom/color-picker-field'
import InputField from '@/components/atom/input-field'
import { useSelectedElement } from '@/core/providers/contexts/selected-element-context'
import { CommonStyles } from '@/core/types/element.type'
import { DragElementProps } from '@/core/types/email-template.type'
import { useCallback, useEffect, useState } from 'react'

type FieldName = 'content'
type StyleFieldName = keyof CommonStyles

function Settings() {
  const { selectedElement, setSelectedElement } = useSelectedElement()
  const [element, setElement] = useState<DragElementProps | null>(null)

  useEffect(() => {
    if (selectedElement?.layout?.[selectedElement?.index]) {
      setElement(selectedElement?.layout?.[selectedElement?.index])
    }
  }, [selectedElement])

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

  const handleStyleChange = useCallback(
    (fieldName: StyleFieldName, value: string) => {
      const updatedData = { ...selectedElement }
      if (!updatedData.layout || !selectedElement) return

      const updatedLayout = { ...updatedData.layout }
      const updatedElement = { ...updatedLayout[selectedElement.index] }
      const updatedStyle = { ...updatedElement.style } as CommonStyles

      updatedStyle[fieldName] = value

      updatedElement.style = updatedStyle
      updatedLayout[selectedElement.index] = updatedElement

      setSelectedElement({
        layout: updatedLayout,
        index: selectedElement.index,
      })
    },
    [selectedElement, setSelectedElement],
  )

  return (
    <div className='p-5'>
      <h2 className='text-lg mb-2 font-semibold text-slate-700'>Settings</h2>
      <section className='space-y-4'>
        {element?.content && (
          <InputField
            label='Content'
            value={element?.content}
            onChange={(value) => handleInputChange('content', value)}
          />
        )}

        {element?.style?.backgroundColor && (
          <ColorPickerField
            label='Background Color'
            value={element?.style?.backgroundColor}
            onChange={(value) => handleStyleChange('backgroundColor', value)}
          />
        )}
      </section>
    </div>
  )
}

export default Settings
