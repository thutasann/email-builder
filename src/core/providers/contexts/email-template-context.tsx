'use client'

import { FullPageLoading } from '@/components/molecules/fullpage-loading'
import { EmailTemplate } from '@/core/types/email-template.type'
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react'

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
  const [loading, setLoading] = useState(true)

  /** Save email template to localStorage */
  useEffect(() => {
    if (emailTemplate && emailTemplate.length > 0) {
      localStorage.setItem('emailTemplate', JSON.stringify(emailTemplate))
    }
  }, [emailTemplate])

  /** Load email template from localStorage */
  useEffect(() => {
    const emailTemplateFromStorage = localStorage.getItem('emailTemplate')
    if (emailTemplateFromStorage) {
      setEmailTemplate(JSON.parse(emailTemplateFromStorage))
    }

    setTimeout(() => {
      setLoading(false)
    }, 300)
  }, [])

  return (
    <EmailTemplateContext.Provider value={{ emailTemplate, setEmailTemplate }}>
      {loading ? <FullPageLoading /> : children}
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
