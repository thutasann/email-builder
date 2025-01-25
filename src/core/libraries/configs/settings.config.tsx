import { Option } from '@/components/atom/toggle-group-field'
import { AlignCenter, AlignLeft, AlignRight } from 'lucide-react'

/** Text Align Options */
export const textAlignOptions: Option[] = [
  { value: 'left', icon: AlignLeft },
  { value: 'center', icon: AlignCenter },
  { value: 'right', icon: AlignRight },
]
