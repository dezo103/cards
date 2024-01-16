import { useController, useForm } from 'react-hook-form'

import { loginSchema } from '@/components/auth/login-form/validator'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
// import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from '../../ui/card/card.module.scss'

export type FormValues = z.infer<typeof loginSchema>
type Props = {
  onSubmit: (values: FormValues) => void
}

export const LoginForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: false,
    name: 'rememberMe',
  })

  return (
    <Card className={s.loginPopUp}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        {/*<DevTool control={control} />*/}
        <Typography
          style={{ color: '#fff', paddingBottom: '27px', textAlign: 'center' }}
          variant={'large'}
        >
          Sign In
        </Typography>
        <Input
          {...register('email')}
          error={errors.email?.message}
          label={'Email'}
          styles={{ marginBottom: '24px' }}
          type={'email'}
        />
        <Input
          {...register('password')}
          error={errors.password?.message}
          label={'Password'}
          styles={{ marginBottom: '12px' }}
          type={'password'}
        />
        <ControlledCheckbox
          {...register('rememberMe')}
          checked={value}
          control={control}
          label={'Remember me'}
          onValueChange={onChange}
        />
        <Typography style={{ color: '#fff', textAlign: 'right' }} variant={'body2'}>
          Forgot Password?
        </Typography>
        <Button
          disabled={isSubmitting}
          fullWidth
          style={{ marginBottom: '20px', marginTop: '66px' }}
          type={'submit'}
        >
          Sign In
        </Button>
        <Typography
          style={{ color: '#C3C1C7', marginBottom: '12px', textAlign: 'center' }}
          variant={'body2'}
        >
          Don't have an account?
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
          Sign Up
        </Typography>
      </form>
    </Card>
  )
}
