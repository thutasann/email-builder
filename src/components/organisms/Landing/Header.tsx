'use client'

import { Button } from '@/components/ui/button'
import { useUserDetails } from '@/core/contexts/user-details-context'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

function Header() {
  const { userDetails } = useUserDetails()
  const router = useRouter()

  const handleDashboard = useCallback(() => {
    router.push('/dashboard')
  }, [router])

  return (
    <header className='flex items-center justify-between px-4 py-3 shadow-sm sticky top-0 z-50 bg-white'>
      <Link href='/'>
        <Image src='/logo.png' alt='Logo' width={60} height={60} />
      </Link>
      {userDetails && <Button onClick={handleDashboard}>Dashboard</Button>}
    </header>
  )
}

export default Header
