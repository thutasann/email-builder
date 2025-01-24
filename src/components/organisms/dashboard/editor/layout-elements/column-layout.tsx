'use client'

import { useDNDLayout } from '@/core/providers/contexts/dnd-layout-context'
import { useEmailTemplate } from '@/core/providers/contexts/email-template-context'
import { DragElementProps, DragLayoutProps } from '@/core/types/email-template.type'
import { cn } from '@/lib/utils'
import { useCallback, useState } from 'react'

type ColumnLayoutProps = {
  layout: DragLayoutProps
}

type DragOver = {
  index: number
  columnId: number
}

/**
 * ## Column Layout Component
 * - This component renders the column layout and handles the drag and drop of elements
 */
function ColumnLayout({ layout }: ColumnLayoutProps) {
  console.log('layout', layout)
  const { dragElementLayout } = useDNDLayout()
  const { emailTemplate, setEmailTemplate } = useEmailTemplate()
  const [dragOver, setDragOver] = useState<DragOver | null>(null)

  /**
   * Handle Drag Over for Elements
   */
  const handleDragOver = useCallback(
    (event: React.DragEvent<HTMLDivElement>, index: number) => {
      event.preventDefault()
      setDragOver({
        index,
        columnId: layout.id,
      })
    },
    [setDragOver],
  )

  /**
   * Handle Drop for Elements
   */
  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      if (!dragOver) return
      const index = dragOver.index
      setEmailTemplate((prev) => {
        return prev.map((col) => {
          if (!dragElementLayout?.dragElement) return col
          if (col.id === layout.id) {
            const updatedCol = { ...col }
            updatedCol[index] = dragElementLayout?.dragElement
            return updatedCol
          }
          return col
        })
      })
      setDragOver(null)
    },
    [dragOver, setEmailTemplate, setDragOver],
  )

  /**
   * Get Element Component
   */
  const getElementComponent = useCallback((element: DragElementProps) => {
    if (!element) return null
    return <div key={element?.id}>Element {element?.id}</div>
  }, [])

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${layout?.numOfCol}, 1fr)`,
        gap: '0px',
      }}
    >
      {Array.from({ length: layout?.numOfCol }).map((_, index) => (
        <div
          key={index}
          className={cn(
            'p-2 bg-slate-200 border border-dashed border-slate-400 flex items-center justify-center',
            dragOver?.index === index && dragOver?.columnId === layout.id && 'bg-slate-400',
          )}
          onDragOver={(event) => handleDragOver(event, index)}
          onDrop={handleDrop}
        >
          {layout?.[index] ? (
            getElementComponent(layout?.[index])
          ) : (
            <span className='text-sm font-semibold text-slate-600'>Drag Element Here</span>
          )}
        </div>
      ))}
    </div>
  )
}

export default ColumnLayout
