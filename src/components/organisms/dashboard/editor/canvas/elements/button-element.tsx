import { DragElementProps } from '@/core/types/email-template.type'
import { CSSProperties } from 'react'

type ButtonElementProps = {
  element: DragElementProps
}

/**
 * Button Element
 */
function ButtonElement({ element }: ButtonElementProps) {
  return (
    <a
      href={element.url}
      target={element.url !== '#' ? '_blank' : undefined}
      rel={element.url !== '#' ? 'noopener noreferrer' : undefined}
      style={element.outerStyle as CSSProperties}
    >
      <button style={element.style as CSSProperties}>{element.content || 'Button'}</button>
    </a>
  )
}

export default ButtonElement
