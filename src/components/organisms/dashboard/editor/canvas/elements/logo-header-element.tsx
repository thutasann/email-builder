import { DragElementProps } from '@/core/types/email-template.type'
import { CSSProperties, memo } from 'react'
type LogoHeaderElementProps = {
  element: DragElementProps
}

/**
 * Logo Header Element
 */
function LogoHeaderElement({ element }: LogoHeaderElementProps) {
  return (
    <div style={element.outerStyle as CSSProperties}>
      <h1 style={element.style as CSSProperties}>{element.label}</h1>
    </div>
  )
}

export default memo(LogoHeaderElement)
