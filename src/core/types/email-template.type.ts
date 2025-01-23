import { Element } from './element.type'
import { Layout } from './layout.type'

/**
 * Drag Layout Props
 * - Type Def for Layout Drag & Drop
 */
export type DragLayoutProps = Layout & {
  id: number
}

/**
 * Drag Element Props
 * - Type Def for Element Drag & Drop
 */
export type DragElementProps = Element & {
  id: number
}

/**
 * Drag Layout Element Props
 * - Type Def for Layout and Element Drag & Drop
 */
export type DragLayoutElement = DragLayoutProps | DragElementProps

/**
 * Email Template Props
 * - Type Def for Email Template
 */
export type EmailTemplate = DragLayoutElement[]
