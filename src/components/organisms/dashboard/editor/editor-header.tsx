'use client'

import { Button } from '@/components/ui/button'
import { useScreenSize } from '@/core/contexts/screen-size-context'
import { Code, Monitor, Smartphone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback } from 'react'

function EditorHeader() {
  const { screenSize, setScreenSize } = useScreenSize()
  console.log('screenSize', screenSize)

  const handleSaveTemplate = () => {}

  const handleSendTestEmail = () => {}

  const handleToggleScreenSize = useCallback(() => {
    setScreenSize(screenSize === 'desktop' ? 'mobile' : 'desktop')
  }, [screenSize, setScreenSize])

  return (
    <header className='flex items-center justify-between px-4 py-3 shadow-sm sticky top-0 z-50 bg-white'>
      <Link href='/'>
        <Image src='/logo.png' alt='Logo' width={60} height={60} />
      </Link>

      <div className='flex items-center gap-2'>
        <Button
          variant='ghost'
          size='icon'
          className={screenSize === 'desktop' ? 'bg-accent' : ''}
          onClick={handleToggleScreenSize}
        >
          <Monitor />
        </Button>
        <Button
          variant='ghost'
          size='icon'
          className={screenSize === 'mobile' ? 'bg-accent' : ''}
          onClick={handleToggleScreenSize}
        >
          <Smartphone />
        </Button>
        <Button variant='ghost'>
          <Code />
        </Button>
      </div>

      <div className='flex items-center gap-2'>
        <Button variant='outline' onClick={handleSendTestEmail}>
          Send Test Email
        </Button>
        <Button onClick={handleSaveTemplate}>Save Template</Button>
      </div>
    </header>
  )
}

export default EditorHeader
