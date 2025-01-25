'use client'

import { Textarea } from '../ui/textarea'

type TextAreaFieldProps = {
  label: string
  value: string
  onChange: (value: string) => void
}

function TextAreaField({ label, value, onChange }: TextAreaFieldProps) {
  return (
    <div className='flex flex-col gap-1'>
      <label className='text-sm text-slate-600 font-semibold' htmlFor={label}>
        {label}
      </label>
      <Textarea value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}

export default TextAreaField
