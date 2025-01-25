'use client'

import { useDNDLayout } from '@/core/providers/contexts/dnd-layout-context'
import { useEmailTemplate } from '@/core/providers/contexts/email-template-context'
import { useScreenSize } from '@/core/providers/contexts/screen-size-context'
import { useSelectedElement } from '@/core/providers/contexts/selected-element-context'
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
import SelectedElementRibbon from './selected-element-ribbon'

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
  const { mode } = useScreenSize()
  const { selectedElement, setSelectedElement } = useSelectedElement()
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
    [setDragOver, layout.id],
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
            updatedCol[index] = dragElementLayout?.dragElement as DragElementProps
            return updatedCol
          }
          return col
        })
      })
      setDragOver(null)
    },
    [dragOver, setEmailTemplate, setDragOver, layout.id],
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

  /** Handle Delete Element */
  const handleDeleteElement = useCallback(
    (index: number) => {
      setEmailTemplate((prev) => {
        return prev.map((col) => {
          if (col.id === layout.id) {
            const updatedCol = { ...col }
            delete updatedCol[index]
            return updatedCol
          }
          return col
        })
      })

      setSelectedElement((prev) => {
        if (!prev?.layout) return null
        delete prev?.layout?.[index]
        return {
          ...prev,
          layout: {
            ...prev?.layout,
          },
        }
      })
    },
    [layout.id, setSelectedElement],
  )

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
            'p-2 bg-white relative flex items-center justify-center border border-white',

            mode === 'edit' ? 'hover:border-blue-500 cursor-pointer' : 'cursor-default',

            dragOver?.index === index && dragOver?.columnId === layout.id && 'bg-slate-300',

            !layout?.[index]?.type && 'bg-slate-100 border border-dashed border-slate-400 cursor-default',

            selectedElement?.layout?.id === layout.id &&
              selectedElement?.index === index &&
              layout?.[index]?.type &&
              'border-blue-500',
          )}
          onDragOver={(event) => handleDragOver(event, index)}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => {
            if (layout?.[index]?.type && mode === 'edit') {
              setSelectedElement({
                layout,
                index,
              })
            }
          }}
        >
          {selectedElement?.layout?.id === layout.id && selectedElement?.index === index && layout?.[index]?.type && (
            <SelectedElementRibbon
              element={selectedElement?.layout?.[index]}
              onDelete={() => handleDeleteElement(index)}
            />
          )}

          {layout?.[index] ? (
            getElementComponent(layout?.[index])
          ) : (
            <span className='text-xs lg:text-sm font-semibold text-slate-600 py-2 w-full justify-center items-center flex'>
              Drag Element Here
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

export default ColumnLayout
