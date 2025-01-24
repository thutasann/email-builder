import { DragElementProps } from '@/core/types/email-template.type'

function SelectedElementBadge({ element }: { element: DragElementProps }) {
  return (
    <div className='items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-500 text-primary-foreground hover:bg-blue-300 absolute -left-[1px] -top-[26px] rounded-none rounded-t-lg block'>
      <span className='text-sm text-white'>{element?.type}</span>
    </div>
  )
}

export default SelectedElementBadge
