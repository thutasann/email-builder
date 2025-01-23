'use client'

import { useUserDetails } from '@/core/contexts/user-details-context'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import { useMutation } from 'convex/react'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { api } from '../../../convex/_generated/api'
import { Button } from '../ui/button'

/**
 * Sign in button to sign in with Google
 */
function SignInButton() {
  const createUser = useMutation(api.users.createUser)
  const { userDetails } = useUserDetails()
  const { push } = useRouter()

  /** Google Login */
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log('tokenResponse ==> ', tokenResponse)
      const userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
      })
      const user = userInfo?.data

      const result = await createUser({
        name: user?.name,
        email: user?.email,
        picture: user?.picture,
      })

      const userDetails = { ...user, _id: (result as any)?._id ?? result }

      if (typeof window !== 'undefined') {
        localStorage.setItem('userDetails', JSON.stringify(userDetails))
      }
    },
    onError: (errorResponse) => console.log('errorResponse ==> ', errorResponse),
  })

  const handleSignIn = useCallback(() => {
    if (userDetails) {
      push('/dashboard')
    } else {
      googleLogin()
    }
  }, [userDetails, push, googleLogin])

  return <Button onClick={handleSignIn}>{userDetails ? 'Go to Dashboard' : 'Get Started'}</Button>
}

export default SignInButton
