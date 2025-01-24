import { DragElementProps } from '@/core/types/email-template.type'

type LogoHeaderElementProps = {
  element: DragElementProps
}

/**
 * Logo Header Element
 */
function LogoHeaderElement({ element }: LogoHeaderElementProps) {
  return <div>{element.label}</div>
}

export default LogoHeaderElement
