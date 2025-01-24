import { Icon } from './icon.type'
import { LayoutElementType } from './layout-element-type.type'

type CommonStyles = {
  backgroundColor?: string
  color?: string
  padding?: string
  width?: string | number
}

type OuterStyles = {
  display?: string
  justifyContent?: string
  alignItems?: string
  backgroundColor?: string
  width?: string
  gap?: number
}

type TextStyles = CommonStyles & {
  textAlign?: string
  fontSize?: string
  fontWeight?: string
  textTransform?: string
}

type ImageStyles = CommonStyles & {
  height?: string
  margin?: string
  borderRadius?: string
}

type SocialIcon = {
  icon: string
  url: string
}

export type Element =
  | {
      icon: Icon
      label: string
      type: LayoutElementType
      content: string
      url: string
      style: TextStyles & {
        objectFit?: string
      }
      outerStyle: OuterStyles
    }
  | {
      icon: Icon
      type: LayoutElementType
      label: string
      textarea: string
      style: TextStyles
      outerStyle: Pick<OuterStyles, 'backgroundColor' | 'width'>
    }
  | {
      icon: Icon
      type: LayoutElementType
      label: string
      imageUrl: string
      alt: string
      url: string
      style: ImageStyles
      outerStyle: OuterStyles
    }
  | {
      icon: Icon
      type: LayoutElementType
      label: string
      content: string
      style: Pick<CommonStyles, 'color' | 'padding' | 'width'>
    }
  | {
      type: LayoutElementType
      icon: Icon
      label: string
      socialIcons: SocialIcon[]
      options: SocialIcon[]
      style: {
        width: number
        height: number
        color?: string
      }
      outerStyle: Pick<OuterStyles, 'display' | 'gap'>
    }
