'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { UserDetails } from '../../types/users.type'

type UserDetailsContextType = {
  userDetails: UserDetails | null
}

/**
 * User details context
 */
const UserDetailsContext = createContext<UserDetailsContextType>({
  userDetails: null,
})

/**
 * User details provider
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

  return (
    <UserDetailsContext.Provider
      value={{
        userDetails,
      }}
    >
      {children}
    </UserDetailsContext.Provider>
  )
}

/**
 * Use user details
 */
export const useUserDetails = () => {
  const context = useContext(UserDetailsContext)
  if (!context) {
    throw new Error('useUserDetails must be used within a UserDetailsProvider')
  }
  return context
}
