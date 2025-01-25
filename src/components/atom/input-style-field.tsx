'use client'

import { Input } from '@/components/ui/input'
import { useMemo } from 'react'

type InputStyleFieldProps = {
  label: string
  value: string
  onChange: (value: string) => void
  unit?: string
}

function InputStyleField({ label, value, onChange, unit = 'px' }: InputStyleFieldProps) {
  const formattedValue = useMemo(() => {
    if (!value) return ''
    return value.replace(unit, '')
  }, [value])

  return (
    <div className='flex flex-col gap-1'>
      <label className='text-sm text-slate-600 font-semibold' htmlFor={label}>
        {label} ({unit})
      </label>
      <Input type='number' value={formattedValue} onChange={(e) => onChange(e.target.value + unit)} />
    </div>
  )
}

export default InputStyleField
