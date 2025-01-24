'use client'

import { useDNDLayout } from '@/core/providers/contexts/dnd-layout-context'
import { useEmailTemplate } from '@/core/providers/contexts/email-template-context'
import { useScreenSize } from '@/core/providers/contexts/screen-size-context'
import { DragLayoutElement, DragLayoutProps } from '@/core/types/email-template.type'
import { cn } from '@/lib/utils'
import { useCallback, useState } from 'react'
import ColumnLayout from '../layout-elements/column-layout'

/**
 * ## Canvas Area for Email Template builder
 */
function Canvas() {
  const { screenSize } = useScreenSize()
  const { layout } = useDNDLayout()
  const { emailTemplate, setEmailTemplate } = useEmailTemplate()
  const [isDragOver, setIsDragOver] = useState(false)

  /** Handle Drag Over */
  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragOver(true)
  }, [])

  /** Handle Drop for Layouts and Elements */
  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault()
      setIsDragOver(false)
      setEmailTemplate((prev) => {
        if (!layout?.dragLayout) return prev
        if (prev) {
          return [...prev, layout.dragLayout]
        }
        return [layout.dragLayout]
      })
    },
    [layout],
  )

  /** Get Layout Component */
  const getLayoutComponent = useCallback((layout: DragLayoutElement) => {
    if (layout.type === 'column') {
      return <ColumnLayout layout={layout as DragLayoutProps} />
    }
    return <div key={layout.id}>Element {layout.id}</div>
  }, [])

  return (
    <div className='mt-20 flex justify-center p-2'>
      <div
        className={cn(
          'bg-white p-6 w-full transition-all duration-300 rounded-sm',
          screenSize === 'desktop' ? 'max-w-2xl' : 'max-w-sm',
          isDragOver && 'bg-slate-200',
        )}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {emailTemplate?.length > 0 ? (
          emailTemplate?.map((layout, index) => <div key={index}>{getLayoutComponent(layout)}</div>)
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
