import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className='bg-gradient-to-r from-purple-600 to-blue-600 h-screen'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div className='text-center md:text-left'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>AI Powered Email Builder</h1>
            <p className='text-xl md:text-2xl text-purple-100 mb-8'>Build emails in minutes, not hours.</p>
            <Link
              href='/signup'
              className='inline-block bg-white text-purple-600 font-bold py-2 px-8 rounded-full text-md hover:bg-purple-100 transition duration-300'
            >
              Get Started
            </Link>
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
