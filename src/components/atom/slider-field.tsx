'use client'

import { Slider } from '../ui/slider'

type SlideFieldProps = {
  label: string
  value: number
  onChange: (value: string) => void
  unit?: string
}

function SlideField({ label, value, onChange, unit = 'px' }: SlideFieldProps) {
  const formattedValue = (value_: number) => {
    return Number(value_.toString().replace(unit, ''))
  }

  return (
    <div className='flex flex-col gap-1'>
      <label className='text-sm text-slate-600 font-semibold' htmlFor={label}>
        {label} ({value})
      </label>
      <Slider
        defaultValue={[formattedValue(value)]}
        max={100}
        step={1}
        onValueChange={(value) => onChange(value + unit)}
      />
    </div>
  )
}

export default SlideField
