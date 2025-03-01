'use client'

import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

function EmailTemplateList() {
  const [emailList, setEmailList] = useState<any[]>([])
  const router = useRouter()

  const handleCreateNewEmail = () => {
    router.push('/editor/123')
  }

  return (
    <div className='h-[70vh] border border-slate-300 rounded-lg shadow-md p-4'>
      {emailList?.length === 0 && (
        <div className='flex flex-col gap-2 items-center justify-center h-full'>
          <p className='text-slate-500'>No emails templates found</p>
          <Button onClick={handleCreateNewEmail}>
            <PlusIcon className='w-4 h-4' />
            Create New Email Template
          </Button>
        </div>
      )}
    </div>
  )
}

export default EmailTemplateList
