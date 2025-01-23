import { layouts } from '@/core/libraries/configs/layouts'

function LayoutCards() {
  return (
    <div>
      <h2 className='text-lg mb-2 font-semibold text-slate-700'>Layouts</h2>
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4'>
        {layouts.map((layout, index) => (
          <div
            key={index}
            className='flex flex-col cursor-pointer items-center justify-center border border-slate-300 rounded-md group hover:shadow-md p-2 hover:border-slate-400'
          >
            <layout.icon className='text-slate-500 group-hover:text-slate-700 rounded-md h-4 w-4' />
            <span className='text-xs text-slate-500 group-hover:text-slate-700'>{layout.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LayoutCards
