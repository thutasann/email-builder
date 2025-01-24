'use client'

import InputField from '@/components/atom/input-field'
import { useSelectedElement } from '@/core/providers/contexts/selected-element-context'
import { DragElementProps } from '@/core/types/email-template.type'
import { useEffect, useState } from 'react'

function Settings() {
  const { selectedElement } = useSelectedElement()
  const [element, setElement] = useState<DragElementProps | null>(null)
  console.log('element', element)

  useEffect(() => {
    if (selectedElement?.layout?.[selectedElement?.index]) {
      setElement(selectedElement?.layout?.[selectedElement?.index])
    }
  }, [selectedElement])

  return (
    <div className='p-5'>
      <h2 className='text-lg mb-2 font-semibold text-slate-700'>Settings</h2>
      {selectedElement?.layout?.content && (
        <InputField label='Label' value={selectedElement?.layout?.label} onChange={() => {}} />
      )}
    </div>
  )
}

export default Settings
