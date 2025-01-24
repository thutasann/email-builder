'use client'

import { elements } from '@/core/libraries/configs/elements'
import { useDNDLayout } from '@/core/providers/contexts/dnd-layout-context'
import { Element } from '@/core/types/element.type'
import { Fragment, useCallback } from 'react'
import ItemCard from './item-card'

function ElementCards() {
  const { setLayout } = useDNDLayout()

  /**
   * Handle Element Drag Start
   */
  const handleDragStart = useCallback((event: React.DragEvent<HTMLDivElement>, element: Element) => {
    setLayout((prev) => {
      return {
        ...prev,
        dragElement: {
          ...element,
          id: Date.now(),
        },
      }
    })
  }, [])

  return (
    <Fragment>
      <h2 className='text-lg mb-2 font-semibold text-slate-700'>Elements</h2>
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4'>
        {elements.map((element, index) => (
          <div key={index} draggable onDragStart={(event) => handleDragStart(event, element)}>
            <ItemCard item={element} />
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default ElementCards
