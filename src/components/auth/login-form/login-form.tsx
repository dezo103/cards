import { useController, useForm } from 'react-hook-form'

import { loginSchema } from '@/components/auth/login-form/validator'
import { Button } from '@/components/ui/button'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'
import { Input } from '@/components/ui/input'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

// type FormValues = {
//   email: string
//   password: string
//   rememberMe: boolean
// }

// OR

export type FormValues = z.infer<typeof loginSchema>
type Props = {
  onSubmit: (values: FormValues) => void
}

export const LoginForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
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
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control} />
      <Input {...register('email')} error={errors.email?.message} label={'email'} type={'email'} />
      <Input
        {...register('password')}
        error={errors.password?.message}
        label={'password'}
        type={'password'}
      />
      <ControlledCheckbox
        {...register('rememberMe')}
        checked={value}
        control={control}
        label={'remember me'}
        onValueChange={onChange}
      />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
