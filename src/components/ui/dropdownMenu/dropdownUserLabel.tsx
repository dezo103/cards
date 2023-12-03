import { Typography } from '@/components/ui/typography'

import s from './dropdownMenu.module.scss'

import userLogo from '../../../assets/images/userLogo.png'

export const DropdownUserLabel = () => {
  return (
    <div className={s.UserLabelWrapper}>
      <img alt={'userLogo'} className={s.UserLogo} src={userLogo} />
      <div className={s.LabelInfoWrapper}>
        <Typography style={{ color: '#fff' }} variant={'subtitle2'}>
          Ivan
        </Typography>
        <Typography style={{ color: '#808080' }} variant={'caption'}>
          j&johnson@gmail.com
        </Typography>
      </div>
    </div>
  )
}
