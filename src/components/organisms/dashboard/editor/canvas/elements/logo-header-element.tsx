import { DragElementProps } from '@/core/types/email-template.type'
import { memo } from 'react'
type LogoHeaderElementProps = {
  element: DragElementProps
}

/**
 * Logo Header Element
 */
function LogoHeaderElement({ element }: LogoHeaderElementProps) {
  return <h1 className='text-2xl font-bold'>{element.label}</h1>
}

export default memo(LogoHeaderElement)
