import { Trash } from 'lucide-react'

type SelectedLayoutRibbonProps = {
  onDelete: () => void
}

function SelectedLayoutRibbon({ onDelete }: SelectedLayoutRibbonProps) {
  return (
    <>
      <div className='items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-500 text-primary-foreground hover:bg-blue-300 absolute -left-[1px] -top-[22px] rounded-none rounded-t-lg block'>
        <span className='text-xs text-white'>Layout</span>
      </div>
      <div className='absolute -right-[1px] -top-[22px] rounded-none rounded-t-lg bg-blue-500 px-2.5 py-1 text-xs font-bold'>
        <Trash size={14} className='text-white' onClick={onDelete} />
      </div>
    </>
  )
}

export default SelectedLayoutRibbon
