import { LogoutIcon } from '@/assets/images/logoutIcon'
import { PersonOutlined } from '@/assets/images/personOutlined'
import { DropdownCustomMenu } from '@/components/ui/dropdownMenu'
import { DropdownItem } from '@/components/ui/dropdownMenu/dropdownItem'
import { DropdownSeparator } from '@/components/ui/dropdownMenu/dropdownSeparator'
import { Typography } from '@/components/ui/typography'

import userLogo from '../../../assets/images/userLogo.png'

export const UserDropdown = () => {
  return (
    <DropdownCustomMenu trigger={<img alt={'user'} src={userLogo} />}>
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
