import { Option } from '@/components/atom/toggle-group-field'
import { AArrowUp, AlignCenter, AlignLeft, AlignRight, CaseLower, CaseUpper } from 'lucide-react'

/** Text Align Options */
export const textAlignOptions: Option[] = [
  { value: 'left', icon: AlignLeft },
  { value: 'center', icon: AlignCenter },
  { value: 'right', icon: AlignRight },
]

/** Text Transform Options */
export const textTransformOptions: Option[] = [
  { value: 'uppercase', icon: CaseUpper },
  { value: 'lowercase', icon: CaseLower },
  { value: 'capitalize', icon: AArrowUp },
]

/** Font Weight Options */
export const fontWeightOptions: string[] = ['normal', 'bold', 'lighter', 'bolder']
