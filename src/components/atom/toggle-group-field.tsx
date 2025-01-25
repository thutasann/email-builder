'use client'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export type Option = {
  value: string
  icon: React.ElementType
}

type ToggleGroupFieldProps = {
  options: Option[]
  value: string
  onChange: (value: string) => void
  label: string
}

function ToggleGroupField({ options, value, onChange, label }: ToggleGroupFieldProps) {
  return (
    <div className='flex flex-col gap-1'>
      <label className='text-sm text-slate-600 font-semibold' htmlFor={label}>
        {label}
      </label>
      <ToggleGroup type='single' value={value} onValueChange={(v) => onChange(v)}>
        {options.map((option, index) => (
          <ToggleGroupItem key={index} value={option.value} disabled={value === option.value}>
            <option.icon className='w-4 h-4' />
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  )
}

export default ToggleGroupField
