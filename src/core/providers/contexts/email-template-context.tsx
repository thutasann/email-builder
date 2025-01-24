'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

type EmailTemplateContextType = {
  emailTemplate: any[]
  setEmailTemplate: Dispatch<SetStateAction<any[]>>
}

const EmailTemplateContext = createContext<EmailTemplateContextType>({
  emailTemplate: [],
  setEmailTemplate: () => {},
})

/**
 * ## Email Template Provider
 */
export const EmailTemplateProvider = ({ children }: { children: ReactNode }) => {
  const [emailTemplate, setEmailTemplate] = useState<any[]>([])

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
