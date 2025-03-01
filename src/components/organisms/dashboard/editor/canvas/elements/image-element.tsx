import { DragElementProps } from '@/core/types/email-template.type'
import { CSSProperties, memo } from 'react'

type ImageElementProps = {
  element: DragElementProps
}

/**
 * Image Element
 */
function ImageElement({ element }: ImageElementProps) {
  return (
    <div style={element.outerStyle as CSSProperties}>
      <img src={element.imageUrl} alt={element.alt} style={element.style as CSSProperties} />
    </div>
  )
}

export default memo(ImageElement)
