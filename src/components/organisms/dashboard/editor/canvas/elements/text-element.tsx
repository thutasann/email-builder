import { DragElementProps } from '@/core/types/email-template.type'
import { CSSProperties, memo } from 'react'

type TextElementProps = {
  element: DragElementProps
}

/**
 * Text Element
 */
function TextElement({ element }: TextElementProps) {
  return (
    <div>
      <h4 style={element.style as CSSProperties}>{element.label}</h4>
    </div>
  )
}

export default memo(TextElement)
