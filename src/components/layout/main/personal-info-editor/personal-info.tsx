import { useState } from 'react'

import { EditIcon } from '@/assets/images/editIcon'
import { LogoutIcon } from '@/assets/images/logoutIcon'
import { EditNicknameForm } from '@/components/layout/main/personal-info-editor/edit-props'
import { personalInfoSchema } from '@/components/layout/main/personal-info-editor/validator'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { z } from 'zod'

import s from '@/components/layout/main/personal-info-editor/personal-info.module.scss'

export type FormValues = z.infer<typeof personalInfoSchema>
type Props = {
  onSubmit: () => void
  userName: string
  userPhoto?: string
}
export const PersonalInfo = ({ onSubmit, userName, userPhoto }: Props) => {
  const [editNicknameMode, setEditNicknameMode] = useState(false)

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
          <EditNicknameForm
            editNicknameMode={editNicknameMode}
            onSubmit={onSubmit}
            setEditNicknameMode={setEditNicknameMode}
            userName={userName}
          />
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
