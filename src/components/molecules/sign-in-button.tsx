'use client'

import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import { Button } from '../ui/button'

/**
 * Sign in button to sign in with Google
 */
function SignInButton() {
  /** Google Login */
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log('tokenResponse ==> ', tokenResponse)
      const userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
      })

      console.log('userInfo ==> ', userInfo)
    },
    onError: (errorResponse) => console.log('errorResponse ==> ', errorResponse),
  })

  return (
    <Button
      className='bg-white text-purple-600 font-bold py-2 px-8 rounded-full text-md hover:bg-purple-100 transition duration-300'
      onClick={() => googleLogin()}
    >
      Get Started
    </Button>
  )
}

export default SignInButton
