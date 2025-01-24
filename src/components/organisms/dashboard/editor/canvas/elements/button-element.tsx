import { DragElementProps } from '@/core/types/email-template.type'
import { CSSProperties, memo } from 'react'

type ButtonElementProps = {
  element: DragElementProps
}

/**
 * Button Element
 */
function ButtonElement({ element }: ButtonElementProps) {
  return (
    <a href={element.url}>
      <button style={element.style as CSSProperties}>{element.label}</button>
    </a>
  )
}

export default memo(ButtonElement)
