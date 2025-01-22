import Image from 'next/image'

function Header() {
  return (
    <header className='flex items-center justify-between px-4 shadow-sm sticky top-0 z-50 bg-white'>
      <Image src='/logo.png' alt='Logo' width={60} height={60} />
    </header>
  )
}

export default Header
