import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { EditIcon } from '@/assets/images/editIcon.tsx'
import { LogoutIcon } from '@/assets/images/logoutIcon.tsx'
import { personalInfoSchema } from '@/components/layout/main/personal-info-editor/validator.ts'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from '@/components/layout/main/personal-info-editor/personal-info.module.scss'

export type FormValues = z.infer<typeof personalInfoSchema>
type Props = {
  onSubmit: (values: FormValues) => void
  userName: string
  userPhoto?: string
}
export const PersonalInfo = ({ onSubmit, userName, userPhoto }: Props) => {
  const [editNicknameMode, setEditNicknameMode] = useState(false)

  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(personalInfoSchema),
  })
  const onEditionalInfoSubmit = async (values: FormValues) => {
    try {
      onSubmit(values)
    } catch (e) {
      console.log(e)
    } finally {
      setEditNicknameMode(!editNicknameMode)
    }
  }

  return (
    <Card className={s.personalInfo}>
      <Typography
        style={{ color: '#fff', paddingBottom: '27px', textAlign: 'center' }}
        variant={'large'}
      >
        Personal Information
      </Typography>
      <div className={s.editUserLogoWrapper}>
        <img alt={'user'} className={s.userLogo} src={userPhoto} />
        {!editNicknameMode && (
          <div className={s.editIconContainer}>
            <EditIcon />
          </div>
        )}
      </div>
      <div className={s.editInfoWrapper}>
        {!editNicknameMode ? (
          <Typography as={'h1'} style={{ color: '#fff', textAlign: 'center' }} variant={'h1'}>
            {userName}
          </Typography>
        ) : (
          <form noValidate onSubmit={handleSubmit(onEditionalInfoSubmit)}>
            <DevTool control={control} />
            <Input
              {...register('nickname')}
              error={errors.nickname?.message}
              label={'Nickname'}
              styles={{ paddingBottom: '16px', paddingTop: '12px' }}
              type={'text'}
            />
            <Button disabled={isSubmitting} fullWidth type={'submit'}>
              Save Changes
            </Button>
          </form>
        )}
        <div
          className={s.editInfoIcon}
          onClick={() => {
            setEditNicknameMode(!editNicknameMode)
          }}
        >
          {!editNicknameMode && <EditIcon />}
        </div>
      </div>
      {!editNicknameMode && (
        <>
          <Typography style={{ color: '#808080', paddingBottom: '13px' }} variant={'body2'}>
            jdfge@skdfd.tj
          </Typography>
          <Button variant={'secondary'}>
            <LogoutIcon />
            Logout
          </Button>
        </>
      )}
    </Card>
  )
}
