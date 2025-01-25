'use client'

import { Button } from '@/components/ui/button'
import { useScreenSize } from '@/core/providers/contexts/screen-size-context'
import { useSelectedElement } from '@/core/providers/contexts/selected-element-context'
import { Code, Eye, EyeOff, Monitor, Smartphone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback } from 'react'

function EditorHeader() {
  const { screenSize, setScreenSize, mode, setMode } = useScreenSize()
  const { setSelectedElement } = useSelectedElement()

  /** handle save template */
  const handleSaveTemplate = useCallback(() => {}, [])

  /** handle send test email */
  const handleSendTestEmail = useCallback(() => {}, [])

  /** handle toggle screen size */
  const handleToggleScreenSize = useCallback(
    (size: 'mobile' | 'desktop') => {
      setScreenSize(size)
    },
    [setScreenSize],
  )

  /** handle toggle preview */
  const handleTogglePreview = useCallback(() => {
    setSelectedElement(null)
    setMode(mode === 'preview' ? 'edit' : 'preview')
  }, [mode, setMode, setSelectedElement])

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
          onClick={() => handleToggleScreenSize('desktop')}
        >
          <Monitor />
        </Button>
        <Button
          variant='ghost'
          size='icon'
          className={screenSize === 'mobile' ? 'bg-accent' : ''}
          onClick={() => handleToggleScreenSize('mobile')}
        >
          <Smartphone />
        </Button>
        <Button variant='ghost' size='icon'>
          <Code />
        </Button>
        <Button variant='ghost' size='icon' onClick={handleTogglePreview}>
          {mode === 'preview' ? <EyeOff /> : <Eye />}
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
