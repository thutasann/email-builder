import { DragElementProps } from '@/core/types/email-template.type'
import { CSSProperties, memo } from 'react'

type DividerElementProps = {
  element: DragElementProps
}

/**
 * Divider Element
 */
function DividerElement({ element }: DividerElementProps) {
  return <hr style={{ ...element.style, border: `1px solid ${element.style.color}` } as CSSProperties} />
}

export default memo(DividerElement)
