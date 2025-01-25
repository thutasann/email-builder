'use client'

import Canvas from '@/components/organisms/dashboard/editor/canvas'
import EditorHeader from '@/components/organisms/dashboard/editor/editor-header'
import ElementsSidebar from '@/components/organisms/dashboard/editor/elements-sidebar'
import Settings from '@/components/organisms/dashboard/editor/settings'
import { useScreenSize } from '@/core/providers/contexts/screen-size-context'
import { cn } from '@/lib/utils'

function EditorPage() {
  const { mode } = useScreenSize()

  return (
    <div>
      <EditorHeader />
      <div className='grid grid-cols-5 mt-3 gap-4'>
        {mode === 'edit' && <ElementsSidebar />}
        <div className={cn('bg-gray-100 h-[90vh] overflow-y-auto', mode === 'preview' ? 'col-span-12' : 'col-span-3')}>
          <Canvas />
        </div>
        {mode === 'edit' && (
          <div className='h-[90vh] overflow-y-auto'>
            <Settings />
          </div>
        )}
      </div>
    </div>
  )
}

export default EditorPage
