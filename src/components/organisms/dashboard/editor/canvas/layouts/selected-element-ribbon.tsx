import { DragElementProps } from '@/core/types/email-template.type'
import { ArrowDown, ArrowUp, Copy, Trash } from 'lucide-react'
import { Fragment } from 'react'

type SelectedElementRibbonProps = {
  element: DragElementProps
  onDelete: () => void
  onMoveUp: () => void
  onMoveDown: () => void
  onDuplicate: () => void
}

/**
 * ## Ribbon for Selected Element
 * - Display the selected element type
 * - Delete the selected element
 * - Move the selected element up
 * - Move the selected element down
 * - Duplicate the selected element
 */
function SelectedElementRibbon({ element, onDelete, onMoveUp, onMoveDown, onDuplicate }: SelectedElementRibbonProps) {
  return (
    <Fragment>
      <div className='items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-500 text-primary-foreground hover:bg-blue-600 absolute -left-[1px] -top-[22px] rounded-none rounded-t-lg block'>
        <span className='text-xs text-white'>{element?.type || 'Element'}</span>
      </div>

      <div className='absolute -right-[1px] -top-[22px] rounded-none rounded-t-lg bg-red-500 hover:bg-blue-600 px-2.5 py-1 text-xs font-bold'>
        <Trash size={14} className='text-white' onClick={onDelete} />
      </div>

      <div className='absolute right-[35px] -top-[22px] rounded-none rounded-t-lg bg-blue-500 hover:bg-blue-600 px-2.5 py-1 text-xs font-bold'>
        <Copy size={14} className='text-white' onClick={onDuplicate} />
      </div>

      <div className='absolute left-[45%] z-10  -top-[22px] rounded-full bg-blue-500 hover:bg-blue-600 p-2 text-xs font-bold'>
        <ArrowUp size={14} className='text-white' onClick={onMoveUp} />
      </div>

      <div className='absolute left-[45%] z-10 -bottom-[20px] rounded-full bg-blue-500 hover:bg-blue-600 p-2 text-xs font-bold'>
        <ArrowDown size={14} className='text-white' onClick={onMoveDown} />
      </div>
    </Fragment>
  )
}

export default SelectedElementRibbon
