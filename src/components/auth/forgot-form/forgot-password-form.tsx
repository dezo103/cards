import { useForm } from 'react-hook-form'

import { loginSchema } from '@/components/auth/login-form/validator'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from '../../ui/card/card.module.scss'

export type FormValues = z.infer<typeof loginSchema>
type Props = {
  onSubmit: (values: FormValues) => void
}
const ForgotPasswordForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  return (
    <Card className={s.loginPopUp}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <Typography
          style={{ color: '#fff', paddingBottom: '51px', textAlign: 'center' }}
          variant={'large'}
        >
          Forgot your password
        </Typography>
        <Input
          {...register('email')}
          error={errors.email?.message}
          label={'Email'}
          styles={{ marginBottom: '24px' }}
          type={'email'}
        />
        <Typography style={{ color: '#C3C1C7', marginBottom: '12px' }} variant={'body2'}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button
          disabled={isSubmitting}
          fullWidth
          style={{ marginBottom: '20px', marginTop: '66px' }}
          type={'submit'}
        >
          Send Instruction
        </Button>
        <Typography
          style={{ color: '#C3C1C7', marginBottom: '12px', textAlign: 'center' }}
          variant={'body2'}
        >
          Did you remember your password?
        </Typography>
        <Typography
          as={'a'}
          style={{
            color: '#8C61FF',
            fontSize: '16px',
            fontWeight: 700,
            textAlign: 'center',
            textDecoration: 'underline',
          }}
          variant={'link1'}
        >
          Try logging in
        </Typography>
      </form>
    </Card>
  )
}

export default ForgotPasswordForm
