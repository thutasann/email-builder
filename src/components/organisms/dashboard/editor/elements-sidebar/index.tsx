import { Separator } from '@/components/ui/separator'
import ElementCards from './element-cards'
import LayoutCards from './layout-cards'

function ElementsSidebar() {
  return (
    <aside className='p-4 h-[90vh] pb-10 overflow-y-auto'>
      <LayoutCards />
      <Separator className='my-4' />
      <ElementCards />
    </aside>
  )
}

export default ElementsSidebar
