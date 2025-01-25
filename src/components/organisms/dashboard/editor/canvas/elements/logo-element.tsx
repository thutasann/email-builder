import { DragElementProps } from '@/core/types/email-template.type'
import { CSSProperties, memo } from 'react'

type LogoElementProps = {
  element: DragElementProps
}

/**
 * Logo Element
 */
function LogoElement({ element }: LogoElementProps) {
  return (
    <div style={element.outerStyle as CSSProperties}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={element.imageUrl} alt={element.alt} style={element.style as CSSProperties} />
    </div>
  )
}

export default memo(LogoElement)
