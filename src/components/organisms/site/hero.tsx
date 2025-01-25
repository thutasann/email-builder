import SignInButton from '@/components/molecules/sign-in-button'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='h-screen'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div className='text-center md:text-left'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4'>AI Powered Email Builder</h1>
            <p className='text-xl md:text-2xl text-primary mb-8'>Build emails in minutes, not hours.</p>
            <SignInButton />
          </div>
          <div className='mt-8 md:mt-0'>
            <Image
              src='/hero.png'
              alt='Hero Image'
              width={600}
              height={400}
              className='rounded-lg shadow-xl'
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
