import { Typography } from '@/components/ui/typography'

import s from './dropdownMenu.module.scss'

type Props = {
  mail?: string
  name: string
  userLogo?: string
}
export const DropdownUserLabel = ({ mail, name, userLogo }: Props) => {
  return (
    <div className={s.UserLabelWrapper}>
      <img alt={'userLogo'} className={s.UserLogo} src={userLogo} />
      <div className={s.LabelInfoWrapper}>
        <Typography style={{ color: '#fff' }} variant={'subtitle2'}>
          {name}
        </Typography>
        <Typography style={{ color: '#808080' }} variant={'caption'}>
          {mail}
        </Typography>
      </div>
    </div>
  )
}
