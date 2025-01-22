'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { UserDetails } from '../types/users.type'

/**
 * User details context
 */
const UserDetailsContext = createContext<UserDetails | null>(null)

/**
 * User details provider
 * @param {ReactNode} children - The children to render
 */
export const UserDetailsProvider = ({ children }: { children: ReactNode }) => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null)

  useEffect(() => {
    const userDetails = localStorage.getItem('userDetails')
    if (userDetails) {
      setUserDetails(JSON.parse(userDetails))
    } else {
      setUserDetails(null)
    }
  }, [])

  return <UserDetailsContext.Provider value={userDetails}>{children}</UserDetailsContext.Provider>
}

/**
 * Use user details
 * @returns {UserDetails | null} - The user details
 */
export const useUserDetails = (): UserDetails | null => {
  const context = useContext(UserDetailsContext)
  if (!context) {
    throw new Error('useUserDetails must be used within a UserDetailsProvider')
  }
  return context
}
