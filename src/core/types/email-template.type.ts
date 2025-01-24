import { Element } from './element.type'
import { Layout } from './layout.type'

/**
 * Drag Layout Props
 * - Type Def for Layout Drag & Drop
 */
export type DragLayoutProps = Layout & {
  /**
   * Layout ID
   */
  id: number
  /**
   * Column Elements
   */
  [key: number]: DragElementProps
}

/**
 * Drag Element Props
 * - Type Def for Element Drag & Drop
 */
export type DragElementProps = Element & {
  /**
   * Element ID
   */
  id: number
}

/**
 * Drag Layout Element Props
 * - Type Def for Layout and Element Drag & Drop
 */
export type DragLayoutElement = DragLayoutProps & DragElementProps

/**
 * Email Template Props
 * - Type Def for Email Template
 */
export type EmailTemplate = DragLayoutElement[]
