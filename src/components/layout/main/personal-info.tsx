import { EditIcon } from '@/assets/images/editIcon.tsx'
import { LogoutIcon } from '@/assets/images/logoutIcon'
import userLogoMain from '@/assets/images/userLogoMain.png'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from '@/components/layout/main/personal-info.module.scss'

export const PersonalInfo = () => {
  return (
    <Card className={s.personalInfo}>
      <Typography
        style={{ color: '#fff', paddingBottom: '27px', textAlign: 'center' }}
        variant={'large'}
      >
        Personal Information
      </Typography>
      <div className={s.editUserLogoWrapper}>
        <img alt={'user'} className={s.userLogo} src={userLogoMain} />
        <div className={s.editIconContainer}>
          <EditIcon />
        </div>
      </div>
      <div className={s.editInfoWrapper}>
        <Typography as={'h1'} style={{ color: '#fff', textAlign: 'center' }} variant={'h1'}>
          Ivan
        </Typography>
        <div className={s.editInfoIcon}>
          <EditIcon />
        </div>
      </div>
      <Typography style={{ color: '#808080', paddingBottom: '13px' }} variant={'body2'}>
        jdfge@skdfd.tj
      </Typography>
      <Button variant={'secondary'}>
        <LogoutIcon />
        Logout
      </Button>
    </Card>
  )
}
