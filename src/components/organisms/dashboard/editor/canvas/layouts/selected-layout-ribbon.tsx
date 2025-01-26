import { Trash } from 'lucide-react'
import { Fragment } from 'react'

type SelectedLayoutRibbonProps = {
  numOfColumns: number
  onDelete: () => void
}

/**
 * ## Ribbon for Selected Layout
 */
function SelectedLayoutRibbon({ numOfColumns, onDelete }: SelectedLayoutRibbonProps) {
  return (
    <Fragment>
      <div className='items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-500 text-primary-foreground hover:bg-blue-600 absolute -left-[1px] -top-[22px] rounded-none rounded-t-lg block'>
        <span className='text-xs text-white'>
          {numOfColumns} {numOfColumns === 1 ? 'Column' : 'Columns'}
        </span>
      </div>
      <div className='absolute -right-[1px] -top-[22px] rounded-none rounded-t-lg bg-blue-500 px-2.5 py-1 text-xs font-bold'>
        <Trash size={14} className='text-white' onClick={onDelete} />
      </div>
    </Fragment>
  )
}

export default SelectedLayoutRibbon
