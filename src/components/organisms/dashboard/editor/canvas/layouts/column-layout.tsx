'use client'

import { useDNDLayout } from '@/core/providers/contexts/dnd-layout-context'
import { useEmailTemplate } from '@/core/providers/contexts/email-template-context'
import { DragElementProps, DragLayoutProps } from '@/core/types/email-template.type'
import { cn } from '@/lib/utils'
import { useCallback, useState } from 'react'
import ButtonElement from '../elements/button-element'
import DividerElement from '../elements/divider-element'
import ImageElement from '../elements/image-element'
import LogoElement from '../elements/logo-element'
import LogoHeaderElement from '../elements/logo-header-element'
import SocialIconsElement from '../elements/social-icons'
import TextElement from '../elements/text-element'

/** DrageOver Local State Type */
type DragOver = {
  index: number
  columnId: number
}

/** Column Layout Props */
type ColumnLayoutProps = {
  layout: DragLayoutProps
}

/**
 * ## Column Layout
 * - This component renders the column layout and handles the drag and drop of elements
 * - It also handles the drag over, drag leave, and drop of elements
 */
function ColumnLayout({ layout }: ColumnLayoutProps) {
  const { dragElementLayout } = useDNDLayout()
  const { setEmailTemplate } = useEmailTemplate()
  const [dragOver, setDragOver] = useState<DragOver | null>(null)

  /** Handle Drag Over for Elements */
  const handleDragOver = useCallback(
    (event: React.DragEvent<HTMLDivElement>, index: number) => {
      event.preventDefault()
      setDragOver({
        index,
        columnId: layout.id,
      })
    },
    [setDragOver],
  )

  /** Handle Drag Leave for Elements */
  const handleDragLeave = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault()
      setDragOver(null)
    },
    [setDragOver],
  )

  /** Handle Drop for Elements */
  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault()
      if (!dragOver) return
      const index = dragOver.index
      setEmailTemplate((prev) => {
        return prev.map((col) => {
          if (!dragElementLayout?.dragElement) return col
          if (col.id === layout.id) {
            const updatedCol = { ...col }
            updatedCol[index] = dragElementLayout?.dragElement
            return updatedCol
          }
          return col
        })
      })
      setDragOver(null)
    },
    [dragOver, setEmailTemplate, setDragOver],
  )

  /** Get Element Component */
  const getElementComponent = useCallback((element: DragElementProps) => {
    if (!element) return null
    switch (element.type) {
      case 'Button':
        return <ButtonElement element={element} />
      case 'Text':
        return <TextElement element={element} />
      case 'Image':
        return <ImageElement element={element} />
      case 'Logo':
        return <LogoElement element={element} />
      case 'LogoHeader':
        return <LogoHeaderElement element={element} />
      case 'Divider':
        return <DividerElement element={element} />
      case 'SocialIcons':
        return <SocialIconsElement element={element} />
      default:
        return null
    }
  }, [])

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${layout?.numOfCol}, 1fr)`,
        gap: '0px',
      }}
    >
      {Array.from({ length: layout?.numOfCol }).map((_, index) => (
        <div
          key={index}
          className={cn(
            'p-2 bg-white flex items-center transition-all duration-300 justify-center border border-white hover:border hover:border-dashed hover:border-slate-400',
            dragOver?.index === index && dragOver?.columnId === layout.id && 'bg-slate-300',
            !layout?.[index]?.type && 'bg-slate-200 border border-dashed border-slate-400',
          )}
          onDragOver={(event) => handleDragOver(event, index)}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {layout?.[index] ? (
            getElementComponent(layout?.[index])
          ) : (
            <span className='text-sm font-semibold text-slate-600'>Drag Element Here</span>
          )}
        </div>
      ))}
    </div>
  )
}

export default ColumnLayout
