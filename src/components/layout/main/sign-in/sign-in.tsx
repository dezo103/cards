import { useNavigate } from 'react-router-dom'

import { LoginForm } from '@/components/auth/login-form/login-form'
import { useLoginMutation } from '@/services/auth.service'
import { LoginArgs } from '@/services/auth.types'

export const SignIn = () => {
  const [login] = useLoginMutation()
  const navigate = useNavigate()
  const handleLogin = async ({ email, password, rememberMe }: LoginArgs) => {
    try {
      await login({ email, password, rememberMe })
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  return <LoginForm onSubmit={handleLogin} />
}
