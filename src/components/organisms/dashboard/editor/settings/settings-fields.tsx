'use client'

import ColorPickerField from '@/components/atom/color-picker-field'
import DropdownField from '@/components/atom/dropdown-field'
import ImagePreview from '@/components/atom/image/image-preview'
import InputField from '@/components/atom/input-field'
import InputStyleField from '@/components/atom/input-style-field'
import SlideField from '@/components/atom/slider-field'
import TextAreaField from '@/components/atom/text-area-field'
import ToggleGroupField from '@/components/atom/toggle-group-field'
import { Separator } from '@/components/ui/separator'
import { fontWeightOptions, textAlignOptions, textTransformOptions } from '@/core/libraries/configs/settings.config'
import { CommonStyles } from '@/core/types/element.type'
import { DragElementProps } from '@/core/types/email-template.type'

export type FieldName = 'content' | 'url' | 'textarea' | 'imageUrl'
export type StyleFieldName = keyof CommonStyles

type SettingsFieldsProps = {
  element: DragElementProps
  handleInputChange: (field: FieldName, value: string) => void
  handleStyleChange: (field: StyleFieldName, value: string, isOuterStyle?: boolean) => void
}

/**
 * Settings Fields that will be used to edit the element
 */
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

      {element?.style?.textAlign && (
        <ToggleGroupField
          label='Text Align'
          options={textAlignOptions}
          value={element?.style?.textAlign}
          onChange={(value) => handleStyleChange('textAlign', value)}
        />
      )}

      {element?.style?.textTransform && (
        <ToggleGroupField
          label='Text Transform'
          options={textTransformOptions}
          value={element?.style?.textTransform}
          onChange={(value) => handleStyleChange('textTransform', value)}
        />
      )}

      {element?.style?.fontWeight && (
        <DropdownField
          label='Font Weight'
          value={element?.style?.fontWeight}
          options={fontWeightOptions}
          onChange={(value) => handleStyleChange('fontWeight', value)}
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

      {element?.style?.margin && (
        <InputStyleField
          label='Margin'
          unit='px'
          value={element?.style?.margin}
          onChange={(value) => handleStyleChange('margin', value)}
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

      {element?.imageUrl && (
        <ImagePreview
          label='Image Preview'
          image={element?.imageUrl}
          onChange={(value) => handleInputChange('imageUrl', value)}
        />
      )}

      <Separator className='my-4' />

      <div className='space-y-6'>
        <h3 className='text-md text-slate-600 font-semibold'>Outer Styles</h3>
        {element?.outerStyle?.backgroundColor && (
          <ColorPickerField
            label='Background Color'
            value={element?.outerStyle?.backgroundColor}
            onChange={(value) => handleStyleChange('backgroundColor', value, true)}
          />
        )}

        {element?.outerStyle?.justifyContent && (
          <ToggleGroupField
            label='Justify Content'
            value={element?.outerStyle?.justifyContent}
            options={textAlignOptions}
            onChange={(value) => handleStyleChange('justifyContent', value, true)}
          />
        )}
      </div>
    </section>
  )
}

export default SettingsFields
