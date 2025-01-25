'use client'

import { Input } from '../ui/input'

type ColorPickerFieldProps = {
  label: string
  value: string
  onChange: (value: string) => void
}

function ColorPickerField({ label, value, onChange }: ColorPickerFieldProps) {
  return (
    <div className='flex flex-col gap-1'>
      <label className='text-sm text-slate-600 font-semibold' htmlFor={label}>
        {label}
      </label>
      <Input type='color' value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}

export default ColorPickerField
