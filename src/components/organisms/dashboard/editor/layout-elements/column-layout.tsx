'use client'

import { DragLayoutElement, DragLayoutProps } from '@/core/types/email-template.type'
import { cn } from '@/lib/utils'
import { useCallback, useState } from 'react'

type ColumnLayoutProps = {
  layout: DragLayoutProps
}

function ColumnLayout({ layout }: ColumnLayoutProps) {
  const [isDragOver, setIsDragOver] = useState<{
    index: number
    columnId: number
  } | null>({
    index: 0,
    columnId: 0,
  })

  /**
   * Handle Drag Over for Elements
   */
  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>, index: number) => {
    event.preventDefault()
    setIsDragOver({
      index,
      columnId: layout.id,
    })
  }, [])

  /**
   * Handle Drop for Elements
   */
  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      if (!isDragOver) return
      const index = isDragOver.index
      setIsDragOver(null)
    },
    [isDragOver],
  )

  const getElementComponent = useCallback((element: DragLayoutElement) => {
    return <div key={element.id}>Element {element.id}</div>
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
          onDragOver={(event) => handleDragOver(event, index)}
          onDrop={handleDrop}
          className={cn(
            'p-2 bg-slate-200 border border-dashed border-slate-400 flex items-center justify-center',
            isDragOver?.index === index && isDragOver?.columnId === layout.id && 'bg-slate-400',
          )}
        >
          {index + 1}
        </div>
      ))}
    </div>
  )
}

export default ColumnLayout
