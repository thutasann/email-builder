import { DragElementProps } from '@/core/types/email-template.type'
import { CSSProperties } from 'react'

type LogoElementProps = {
  element: DragElementProps
}

/**
 * Logo Element
 */
function LogoElement({ element }: LogoElementProps) {
  return (
    <div style={element.outerStyle as CSSProperties}>
      <img src={element.imageUrl} alt={element.alt} style={element.style as CSSProperties} />
    </div>
  )
}

export default LogoElement
