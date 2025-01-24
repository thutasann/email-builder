import { CSSProperties } from 'react'
import { Element } from './element.type'
import { Layout } from './layout.type'

/**
 * Drag Layout Props
 */
export type DragLayoutProps = Layout & {
  /**
   * Layout ID
   */
  id: number
  /**
   * Column Elements
   */
  [columnId: number]: DragElementProps
}

/**
 * Drag Element Props
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
  outerStyle?: CSSProperties
  /**
   * Element Image URL
   */
  imageUrl?: string
  /**
   * Element Image Alt
   */
  alt?: string
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
