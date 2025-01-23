'use client'

import { elements } from '@/core/libraries/configs/elements'
import { Fragment } from 'react'
import ItemCard from './item-card'

function ElementCards() {
  return (
    <Fragment>
      <h2 className='text-lg mb-2 font-semibold text-slate-700'>Elements</h2>
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4'>
        {elements.map((element, index) => (
          <div key={index} draggable>
            <ItemCard item={element} />
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default ElementCards
