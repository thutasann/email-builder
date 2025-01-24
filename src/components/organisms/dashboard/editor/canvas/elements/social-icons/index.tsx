import { DragElementProps } from '@/core/types/email-template.type'

type SocialIconsElementProps = {
  element: DragElementProps
}

/**
 * Social Icons Element
 */
function SocialIconsElement({ element }: SocialIconsElementProps) {
  return <div>{element.label}</div>
}

export default SocialIconsElement
