import { Element } from '@/core/libraries/configs/elements'
import { Layout } from '@/core/libraries/configs/layouts'

function ItemCard({ item }: { item: Layout | Element }) {
  return (
    <div className='flex flex-col cursor-grab items-center justify-center border border-slate-300 rounded-md group hover:shadow-md p-2 hover:border-slate-400 hover:border-dashed'>
      <item.icon className='text-slate-500 group-hover:text-slate-700 rounded-md h-4 w-4' />
      <span className='text-xs text-slate-500 group-hover:text-slate-700'>{item.label}</span>
    </div>
  )
}

export default ItemCard
