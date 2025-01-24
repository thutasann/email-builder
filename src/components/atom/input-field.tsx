import { Input } from '@/components/ui/input'

type InputFieldProps = {
  label: string
  value: string
  onChange: (value: string) => void
}

function InputField({ label, value, onChange }: InputFieldProps) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <Input value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}

export default InputField
