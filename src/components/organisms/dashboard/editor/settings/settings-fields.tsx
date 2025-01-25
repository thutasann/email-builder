'use client'

import ColorPickerField from '@/components/atom/color-picker-field'
import InputField from '@/components/atom/input-field'
import InputStyleField from '@/components/atom/input-style-field'
import SlideField from '@/components/atom/slider-field'
import TextAreaField from '@/components/atom/text-area-field'
import ToggleGroupField from '@/components/atom/toggle-group-field'
import { textAlignOptions } from '@/core/libraries/configs/settings.config'
import { CommonStyles } from '@/core/types/element.type'
import { DragElementProps } from '@/core/types/email-template.type'

export type FieldName = 'content' | 'url' | 'textarea'
export type StyleFieldName = keyof CommonStyles

type SettingsFieldsProps = {
  element: DragElementProps
  handleInputChange: (field: FieldName, value: string) => void
  handleStyleChange: (field: StyleFieldName, value: string) => void
}

function SettingsFields({ element, handleInputChange, handleStyleChange }: SettingsFieldsProps) {
  return (
    <section className='space-y-6'>
      {element?.content && (
        <InputField
          label='Content'
          value={element?.content}
          onChange={(value) => handleInputChange('content', value)}
        />
      )}

      {element?.textarea && (
        <TextAreaField
          label='TextArea'
          value={element?.textarea}
          onChange={(value) => handleInputChange('textarea', value)}
        />
      )}

      {element?.url && (
        <InputField label='URL' value={element?.url as string} onChange={(value) => handleInputChange('url', value)} />
      )}

      {element?.style?.backgroundColor && (
        <ColorPickerField
          label='Background Color'
          value={element?.style?.backgroundColor}
          onChange={(value) => handleStyleChange('backgroundColor', value)}
        />
      )}

      {element?.style?.color && (
        <ColorPickerField
          label='Text Color'
          value={element?.style?.color}
          onChange={(value) => handleStyleChange('color', value)}
        />
      )}

      {element?.style?.fontSize && (
        <InputStyleField
          label='Font Size'
          value={element?.style?.fontSize}
          onChange={(value) => handleStyleChange('fontSize', value)}
        />
      )}

      {element?.style?.padding && (
        <InputStyleField
          label='Padding'
          value={element?.style?.padding}
          onChange={(value) => handleStyleChange('padding', value)}
        />
      )}

      {element?.style?.borderRadius && (
        <SlideField
          label='Border Radius'
          value={element?.style?.borderRadius as number}
          onChange={(value) => handleStyleChange('borderRadius', value.toString())}
        />
      )}

      {element?.style?.width && (
        <SlideField
          label='Width'
          value={element?.style?.width as number}
          unit='%'
          onChange={(value) => handleStyleChange('width', value.toString())}
        />
      )}

      {element?.style?.textAlign && (
        <ToggleGroupField
          label='Text Align'
          options={textAlignOptions}
          value={element?.style?.textAlign}
          onChange={(value) => handleStyleChange('textAlign', value)}
        />
      )}
    </section>
  )
}

export default SettingsFields
