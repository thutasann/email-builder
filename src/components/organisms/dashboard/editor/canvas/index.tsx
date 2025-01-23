'use client'

import { useScreenSize } from '@/core/providers/contexts/screen-size-context'
import { cn } from '@/lib/utils'

function Canvas() {
  const { screenSize } = useScreenSize()

  return (
    <div className='mt-20 flex justify-center p-2'>
      <div
        className={cn(
          'bg-white p-6 w-full transition-all duration-300',
          screenSize === 'desktop' ? 'max-w-2xl' : 'max-w-sm',
        )}
      ></div>
    </div>
  )
}

export default Canvas
