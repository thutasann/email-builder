import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface FullPageLoadingProps {
  message?: string
}

export function FullPageLoading({ message = 'Loading...' }: FullPageLoadingProps) {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <Card className='w-[300px] p-6 border-none shadow-none'>
        <div className='flex flex-col items-center space-y-4'>
          <Spinner className='h-8 w-8' />
          {message && <p className='text-center text-sm text-muted-foreground'>{message}</p>}
        </div>
      </Card>
    </div>
  )
}

function Spinner({ className }: React.HTMLAttributes<SVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={cn('animate-spin', className)}
    >
      <path d='M21 12a9 9 0 1 1-6.219-8.56' />
    </svg>
  )
}
