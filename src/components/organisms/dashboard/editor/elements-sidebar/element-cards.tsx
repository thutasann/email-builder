'use client'

import { elements } from '@/core/libraries/configs/elements'
import { useDNDLayout } from '@/core/providers/contexts/dnd-layout-context'
import { DragElementProps } from '@/core/types/email-template.type'
import { Fragment, useCallback } from 'react'
import ItemCard from './item-card'

function ElementCards() {
  const { setDragElementLayout } = useDNDLayout()

  /**
   * Handle Element Drag Start
   */
  const handleDragStart = useCallback(
    (event: React.DragEvent<HTMLDivElement>, element: DragElementProps) => {
      setDragElementLayout({
        dragElement: {
          ...element,
          id: Date.now(),
        },
      })
    },
    [setDragElementLayout],
  )

  return (
    <Fragment>
      <h2 className='text-lg mb-2 font-semibold text-slate-700'>Elements</h2>
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4'>
        {elements.map((element, index) => (
          <div key={index} draggable onDragStart={(event) => handleDragStart(event, element as DragElementProps)}>
            <ItemCard item={element} />
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default ElementCards
