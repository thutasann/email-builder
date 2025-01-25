import { DragElementProps } from '@/core/types/email-template.type'
import { CSSProperties } from 'react'

type TextElementProps = {
  element: DragElementProps
}

/**
 * Text Element
 */
function TextElement({ element }: TextElementProps) {
  return (
    <div style={element.outerStyle as CSSProperties}>
      <h4 style={element.style as CSSProperties}>{element.textarea}</h4>
    </div>
  )
}

export default TextElement
