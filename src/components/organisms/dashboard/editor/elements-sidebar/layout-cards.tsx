'use client'

import { Layout, layouts } from '@/core/libraries/configs/layouts'
import { useDNDLayout } from '@/core/providers/contexts/dnd-layout-context'
import { Fragment, useCallback } from 'react'
import ItemCard from './item-card'

function LayoutCards() {
  const { setLayout } = useDNDLayout()

  /**
   * Handle Layout Drag Start
   */
  const handleDragStart = useCallback((event: React.DragEvent<HTMLDivElement>, layout: Layout) => {
    setLayout({
      dragLayout: {
        ...layout,
        id: Date.now(),
      },
    })
  }, [])

  return (
    <Fragment>
      <h2 className='text-lg mb-2 font-semibold text-slate-700'>Layouts</h2>
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4'>
        {layouts.map((layout, index) => (
          <div key={index} draggable onDragStart={(event) => handleDragStart(event, layout)}>
            <ItemCard item={layout} />
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default LayoutCards
