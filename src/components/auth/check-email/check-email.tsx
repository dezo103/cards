import { EmailIcon } from '@/assets/images/emailIcon'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from '@/components/ui/card/card.module.scss'

export const CheckEmail = () => {
  return (
    <Card className={s.loginPopUp}>
      <Typography
        style={{ color: '#fff', paddingBottom: '27px', textAlign: 'center' }}
        variant={'large'}
      >
        Check Email
      </Typography>
      <EmailIcon />
      <Typography
        style={{
          color: '#C3C1C7',
          marginBottom: '12px',
          marginTop: '19px',
          opacity: 0.5,
          textAlign: 'center',
        }}
        variant={'body2'}
      >
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
      <Button fullWidth style={{ marginBottom: '20px', marginTop: '66px' }} type={'submit'}>
        Back to Sign In
      </Button>
    </Card>
  )
}
