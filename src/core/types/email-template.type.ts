import { CommonStyles, Element } from './element.type'
import { Layout } from './layout.type'

/**
 * Extended Drag Layout Props
 * @todo: Refactor this
 */
export type DragLayoutProps = Layout & {
  /**
   * Layout ID
   */
  id: number
  /**
   * Layout Content
   */
  content?: string
  /**
   * Column Elements
   */
  [columnId: number]: DragElementProps
}

/**
 * Extended Drag Element Props
 * @todo: Refactor this
 */
export type DragElementProps = Element & {
  /**
   * Element ID
   */
  id: number
  /**
   * Element Link
   */
  url?: string
  /**
   * Element Outer Style
   */
  outerStyle?: CommonStyles
  /**
   * Element Image URL
   */
  imageUrl?: string
  /**
   * Element Image Alt
   */
  alt?: string
  /**
   * Element Content
   */
  content?: string
  /**
   * Element TextArea
   */
  textarea?: string
}

/**
 * Drag Layout Element Props
 */
export type DragLayoutElement = DragLayoutProps & DragElementProps

/**
 * Email Template Props
 * - Type Def for Email Template
 */
export type EmailTemplate = DragLayoutElement[]
