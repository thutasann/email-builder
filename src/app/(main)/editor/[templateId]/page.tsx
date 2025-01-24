import Canvas from '@/components/organisms/dashboard/editor/canvas'
import EditorHeader from '@/components/organisms/dashboard/editor/editor-header'
import ElementsSidebar from '@/components/organisms/dashboard/editor/elements-sidebar'
import Settings from '@/components/organisms/dashboard/editor/settings'

function EditorPage() {
  return (
    <div>
      <EditorHeader />
      <div className='grid grid-cols-5 mt-3 gap-4'>
        <ElementsSidebar />
        <div className='col-span-3 bg-gray-100 h-[90vh] overflow-y-auto'>
          <Canvas />
        </div>
        <Settings />
      </div>
    </div>
  )
}

export default EditorPage
