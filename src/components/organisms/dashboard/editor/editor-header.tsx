'use client'

import { Button } from '@/components/ui/button'
import { Code, Monitor, Smartphone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function EditorHeader() {
  const handleSaveTemplate = () => {}

  const handleSendTestEmail = () => {}

  return (
    <header className='flex items-center justify-between px-4 py-3 shadow-sm sticky top-0 z-50 bg-white'>
      <Link href='/'>
        <Image src='/logo.png' alt='Logo' width={60} height={60} />
      </Link>

      <div className='flex items-center gap-2'>
        <Button variant='ghost'>
          <Monitor />
          <span>Desktop</span>
        </Button>
        <Button variant='ghost'>
          <Smartphone />
          <span>Mobile</span>
        </Button>
      </div>

      <div className='flex items-center gap-2'>
        <Button variant='ghost'>
          <Code />
        </Button>
        <Button variant='outline' onClick={handleSendTestEmail}>
          Send Test Email
        </Button>
        <Button onClick={handleSaveTemplate}>Save Template</Button>
      </div>
    </header>
  )
}

export default EditorHeader
