import { Icon } from './icon.type'
import { LayoutElementType } from './layout-element-type.type'

/**
 * Element Props
 */
export type Element =
  | {
      icon: Icon
      label: string
      type: LayoutElementType
      content: string
      url: string
      style: {
        textAlign: string
        backgroundColor: string
        color: string
        padding: string
        width: string
        fontSize: string
        borderRadius: string
        fontWeight: string
        objectFit: string
      }
      outerStyle: {
        display: string
        justifyContent: string
        alignItems: string
        width: string
      }
    }
  | {
      icon: Icon
      type: LayoutElementType
      label: string
      textarea: string
      style: {
        backgroundColor: string
        color: string
        padding: string
        textAlign: string
        fontSize: string
        fontWeight: string
        textTransform: string
      }
      outerStyle: {
        backgroundColor: string
        width: string
      }
    }
  | {
      icon: Icon
      type: LayoutElementType
      label: string
      imageUrl: string
      alt: string
      url: string
      style: {
        backgroundColor: string
        padding: string
        height: string
        width: string
        margin?: string
        borderRadius: string
      }
      outerStyle: {
        display: string
        justifyContent: string
        alignItems: string
        backgroundColor: string
        width: string
      }
    }
  | {
      icon: Icon
      type: LayoutElementType
      label: string
      content: string
      style: {
        color: string
        padding: string
        width: string
      }
    }
  | {
      type: LayoutElementType
      icon: Icon
      label: string
      socialIcons: {
        icon: string
        url: string
      }[]
      options: {
        icon: string
        url: string
      }[]
      style: {
        width: number
        height: number
      }
      outerStyle: {
        display: string
        gap: number
      }
    }
