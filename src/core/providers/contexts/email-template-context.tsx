'use client'

import { EmailTemplate } from '@/core/types/email-template.type'
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

type EmailTemplateContextType = {
  emailTemplate: EmailTemplate
  setEmailTemplate: Dispatch<SetStateAction<EmailTemplate>>
}

const EmailTemplateContext = createContext<EmailTemplateContextType>({
  emailTemplate: [],
  setEmailTemplate: () => {},
})

/**
 * ## Email Template Provider
 */
export const EmailTemplateProvider = ({ children }: { children: ReactNode }) => {
  const [emailTemplate, setEmailTemplate] = useState<EmailTemplate>([])

  return (
    <EmailTemplateContext.Provider value={{ emailTemplate, setEmailTemplate }}>
      {children}
    </EmailTemplateContext.Provider>
  )
}

/**
 * Use Email Template
 */
export const useEmailTemplate = () => {
  const context = useContext(EmailTemplateContext)
  if (!context) {
    throw new Error('useEmailTemplate must be used within a EmailTemplateProvider')
  }
  return context
}
