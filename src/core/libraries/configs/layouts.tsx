import { Layout } from '@/core/types/layout.type'
import { Columns2, Columns3, Columns4, RectangleHorizontal } from 'lucide-react'

/**
 * Layouts
 */
export const layouts: Layout[] = [
  {
    label: 'Column',
    type: 'column',
    numOfCol: 1,
    icon: RectangleHorizontal,
  },
  {
    label: '2 Column',
    type: 'column',
    numOfCol: 2,
    icon: Columns2,
  },
  {
    label: '3 Column',
    type: 'column',
    numOfCol: 3,
    icon: Columns3,
  },
  {
    label: '4 Column',
    type: 'column',
    numOfCol: 4,
    icon: Columns4,
  },
]
