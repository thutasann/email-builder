'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { getModifiedHTMLCode } from '@/lib/utils'
import { Check, Copy } from 'lucide-react'
import { useCallback, useMemo, useState } from 'react'

type ViewHTMLDialogProps = {
  htmlCode: string
  open: boolean
  onClose: () => void
}

function ViewHTMLDialog({ htmlCode, open, onClose }: ViewHTMLDialogProps) {
  const [copied, setCopied] = useState(false)
  const modifiedHTMLCode = useMemo(() => getModifiedHTMLCode(htmlCode), [htmlCode])

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(modifiedHTMLCode)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }, [modifiedHTMLCode])

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className='max-w-4xl max-h-[80vh]'>
        <DialogHeader>
          <DialogTitle className='flex items-center gap-2'>
            HTML Email Template
            <Button variant='ghost' size='icon' onClick={copyToClipboard}>
              {copied ? <Check /> : <Copy />}
            </Button>
          </DialogTitle>
        </DialogHeader>
        <div className='mt-4 relative w-[450px] md:w-full'>
          <pre className='bg-slate-800 text-slate-50 p-4 rounded-lg overflow-auto max-h-[60vh]'>
            <code className='text-sm font-mono whitespace-pre-wrap break-words'>{modifiedHTMLCode}</code>
          </pre>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ViewHTMLDialog
