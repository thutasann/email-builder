import { Icon } from './icon.type'
import { LayoutElementType } from './layout-element-type.type'

/**
 * Layout Props
 */
export type Layout = {
  /**
   * Label
   */
  label: string

  /**
   * Type
   */
  type: LayoutElementType

  /**
   * Number of Columns
   */
  numOfCol: number

  /**
   * Icon
   */
  icon: Icon
}
