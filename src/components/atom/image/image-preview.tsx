import { Input } from '@/components/ui/input'

type ImagePreviewProps = {
  image: string
  label: string
  onChange: (image: string) => void
}

function ImagePreview({ label, image, onChange }: ImagePreviewProps) {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-col gap-1'>
        <label htmlFor={label} className='text-sm text-slate-700 font-semibold'>
          {label}
        </label>
        <img src={image} alt='image' className='w-full h-auto object-cover border border-slate-200 rounded-md p-2' />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='image-url' className='text-sm text-slate-700 font-semibold'>
          Enter Image URL
        </label>
        <Input id='image-url' value={image} onChange={(e) => onChange(e.target.value)} />
      </div>
    </div>
  )
}

export default ImagePreview
