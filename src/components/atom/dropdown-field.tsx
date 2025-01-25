import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

type DropdownFieldProps = {
  label: string
  value: string
  options: string[]
  onChange: (value: string) => void
}

function DropdownField({ label, value, options, onChange }: DropdownFieldProps) {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={label} className='text-sm text-slate-700 font-semibold'>
        {label}
      </label>
      <Select onValueChange={(value) => onChange(value)} defaultValue={value}>
        <SelectTrigger className='w-auto'>
          <SelectValue placeholder='Theme' />
        </SelectTrigger>
        <SelectContent>
          {options.map((option, index) => (
            <SelectItem key={index} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default DropdownField
