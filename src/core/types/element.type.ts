import { Icon } from './icon.type'
import { LayoutElementType } from './layout-element-type.type'

export type CommonStyles = {
  backgroundColor?: string
  color?: string
  padding?: string
  width?: string | number
  height?: string | number
  fontSize?: string
  fontWeight?: string
  textTransform?: string
  textAlign?: string
  lineHeight?: string
  letterSpacing?: string
  borderRadius?: string
  border?: string
  borderWidth?: string
  borderColor?: string
  objectFit?: string
  margin?: string
  borderStyle?: string
  borderTop?: string
  borderBottom?: string
  borderLeft?: string
  borderRight?: string
  gap?: string | number
  display?: string
  justifyContent?: string
  alignItems?: string
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
      style: CommonStyles
      outerStyle: CommonStyles
    }
  | {
      icon: Icon
      type: LayoutElementType
      label: string
      textarea: string
      style: CommonStyles
      outerStyle: Pick<CommonStyles, 'backgroundColor' | 'width'>
    }
  | {
      icon: Icon
      type: LayoutElementType
      label: string
      imageUrl: string
      alt: string
      url: string
      style: CommonStyles
      outerStyle: CommonStyles
    }
  | {
      icon: Icon
      type: LayoutElementType
      label: string
      content: string
      style: Pick<CommonStyles, 'color' | 'padding' | 'width' | 'backgroundColor'>
    }
  | {
      type: LayoutElementType
      icon: Icon
      label: string
      socialIcons: SocialIcon[]
      options: SocialIcon[]
      style: CommonStyles
      outerStyle: Pick<CommonStyles, 'display' | 'gap'>
    }
