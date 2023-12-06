import { LogoutIcon } from '@/assets/images/logoutIcon'
import { PersonOutlined } from '@/assets/images/personOutlined'
import { DropdownCustomMenu } from '@/components/ui/dropdownMenu'
import { DropdownItem } from '@/components/ui/dropdownMenu/dropdownItem'
import { DropdownSeparator } from '@/components/ui/dropdownMenu/dropdownSeparator'
import { DropdownUserLabel } from '@/components/ui/dropdownMenu/dropdownUserLabel'
import { Typography } from '@/components/ui/typography'

import userLogo from '../../../../assets/images/userLogo.png'

// type Props = {
//   mail?: string
//   name: string
// }

export const UserDropdown = () => {
  return (
    <DropdownCustomMenu trigger={<img alt={'user'} src={userLogo} />}>
      <DropdownUserLabel mail={'mail@gh.oi'} name={'Ivan'} userLogo={userLogo} />
      <DropdownSeparator />
      <DropdownItem>
        <PersonOutlined />
        <Typography style={{ color: '#fff' }} variant={'caption'}>
          My Profile
        </Typography>
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem>
        <LogoutIcon />
        <Typography style={{ color: '#fff' }} variant={'caption'}>
          Sign Out
        </Typography>
      </DropdownItem>
    </DropdownCustomMenu>
  )
}
