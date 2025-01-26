'use client'

import { useDNDLayout } from '@/core/providers/contexts/dnd-layout-context'
import { useEmailTemplate } from '@/core/providers/contexts/email-template-context'
import { useScreenSize } from '@/core/providers/contexts/screen-size-context'
import { useSelectedElement } from '@/core/providers/contexts/selected-element-context'
import { DragLayoutElement, EmailTemplate } from '@/core/types/email-template.type'
import { cn } from '@/lib/utils'
import { useCallback, useState } from 'react'
import ColumnLayout from './layouts/column-layout'
import SelectedLayoutRibbon from './layouts/selected-layout-ribbon'

/**
 * ## Canvas Area for Email Template builder
 * - This component renders the canvas area for the email template builder
 * - It handles the drag and drop of layouts and elements
 * - It handles the selection of layouts and elements
 * - It handles the deletion of layouts and elements
 */
function Canvas() {
  const { screenSize } = useScreenSize()
  const { dragElementLayout } = useDNDLayout()
  const { emailTemplate, setEmailTemplate } = useEmailTemplate()
  const { selectedElement, selectedLayout, setSelectedLayout } = useSelectedElement()
  const [isDragOver, setIsDragOver] = useState(false)

  /** Handle Drag Over */
  const handleDragOver = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault()
      setIsDragOver(true)
    },
    [setIsDragOver],
  )

  /** Handle Drop for Layouts and Elements */
  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault()
      setIsDragOver(false)
      if (dragElementLayout?.dragLayout) {
        setEmailTemplate((prev) => {
          return [...prev, dragElementLayout.dragLayout] as EmailTemplate
        })
      }
    },
    [dragElementLayout, setEmailTemplate],
  )

  /** Handle Drag Leave */
  const handleDragLeave = useCallback(() => {
    setIsDragOver(false)
  }, [setIsDragOver])

  /** Handle Delete Layout */
  const handleDeleteLayout = useCallback(() => {
    setEmailTemplate((prev) => {
      return prev.filter((layout) => layout.id !== selectedLayout?.id)
    })
  }, [selectedLayout, setEmailTemplate])

  /** Get Layout Component */
  const getLayoutComponent = useCallback((layout: DragLayoutElement) => {
    if (layout.type === 'column') {
      return <ColumnLayout layout={layout} />
    }
  }, [])

  return (
    <div className='mt-10 flex justify-center p-2'>
      <div
        className={cn(
          'bg-white px-6 py-10 w-full transition-all duration-300 rounded-sm',
          screenSize === 'desktop' ? 'max-w-2xl' : 'max-w-sm',
          isDragOver && 'bg-slate-200',
        )}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
      >
        {emailTemplate?.length > 0 ? (
          emailTemplate?.map((layout, index) => (
            <div
              key={index}
              className='relative'
              onClick={() => {
                setSelectedLayout(layout)
              }}
            >
              {selectedLayout?.id === layout.id && !selectedElement && (
                <SelectedLayoutRibbon numOfColumns={layout.numOfCol} onDelete={handleDeleteLayout} />
              )}
              {getLayoutComponent(layout)}
            </div>
          ))
        ) : (
          <div className='flex items-center justify-center p-4 bg-gray-100 rounded-sm'>
            <h2 className='text-md font-semibold text-slate-600'>Add Layout Here</h2>
          </div>
        )}
      </div>
    </div>
  )
}

export default Canvas
