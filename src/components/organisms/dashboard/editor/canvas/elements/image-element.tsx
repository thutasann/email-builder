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
    <div style={element.outerStyle}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={element.imageUrl} alt={element.alt} style={element.style as CSSProperties} />
    </div>
  )
}

export default memo(ImageElement)
