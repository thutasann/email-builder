'use client'

import { useUserDetails } from '@/core/contexts/user-details-context'

function DashboardWelcome() {
  const { userDetails } = useUserDetails()

  return (
    <div className='mt-7 flex items-center justify-between w-full'>
      <h1 className='text-2xl font-bold'>Hello {userDetails?.name} 👋</h1>
    </div>
  )
}

export default DashboardWelcome
