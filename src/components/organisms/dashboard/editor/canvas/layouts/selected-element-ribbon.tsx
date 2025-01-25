import { DragElementProps } from '@/core/types/email-template.type'
import { Trash } from 'lucide-react'

type SelectedElementRibbonProps = {
  element: DragElementProps
  onDelete: () => void
}

function SelectedElementRibbon({ element, onDelete }: SelectedElementRibbonProps) {
  return (
    <>
      <div className='items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-500 text-primary-foreground hover:bg-blue-600 absolute -left-[1px] -top-[22px] rounded-none rounded-t-lg block'>
        <span className='text-xs text-white'>{element?.type || 'Element'}</span>
      </div>

      <div className='absolute -right-[1px] -top-[22px] rounded-none rounded-t-lg bg-blue-500 hover:bg-blue-600 px-2.5 py-1 text-xs font-bold'>
        <Trash size={14} className='text-white' onClick={onDelete} />
      </div>
    </>
  )
}

export default SelectedElementRibbon
