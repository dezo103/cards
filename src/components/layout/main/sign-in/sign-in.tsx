import { useNavigate } from 'react-router-dom'

import { LoginForm } from '@/components/auth/login-form/login-form'
import { useLoginMutation } from '@/services/auth.service'
import { LoginArgs } from '@/services/auth.types'

export const SignIn = () => {
  const [login] = useLoginMutation()
  const navigate = useNavigate()
  const handleLogin = async (args: LoginArgs) => {
    try {
      await login(args)
      navigate('/')
    } catch (e) {
      console.error(e)
    }
  }

  return <LoginForm onSubmit={handleLogin} />
}
