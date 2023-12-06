import { DeleteIcon } from '@/assets/images/deleteIcon'
import { EditIcon } from '@/assets/images/editIcon'
import { LearnIcon } from '@/assets/images/learnIcon'
import { PackTrigger } from '@/assets/images/pack-trigger'
import { DropdownCustomMenu } from '@/components/ui/dropdownMenu'
import { DropdownItem } from '@/components/ui/dropdownMenu/dropdownItem'
import { DropdownSeparator } from '@/components/ui/dropdownMenu/dropdownSeparator'
import { Typography } from '@/components/ui/typography'

export const PackDropdown = () => {
  return (
    <DropdownCustomMenu trigger={<PackTrigger />}>
      <DropdownItem>
        <LearnIcon />
        <Typography style={{ color: '#fff' }} variant={'caption'}>
          Learn
        </Typography>
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem>
        <EditIcon />
        <Typography style={{ color: '#fff' }} variant={'caption'}>
          Edit
        </Typography>
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem>
        <DeleteIcon />
        <Typography style={{ color: '#fff' }} variant={'caption'}>
          Delete
        </Typography>
      </DropdownItem>
    </DropdownCustomMenu>
  )
}
