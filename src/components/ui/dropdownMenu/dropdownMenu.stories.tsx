import type { Meta, StoryObj } from '@storybook/react'

import { PackTrigger } from '@/assets/images/pack-trigger'
import { DropdownItem } from '@/components/ui/dropdownMenu/dropdownItem'
import { DropdownSeparator } from '@/components/ui/dropdownMenu/dropdownSeparator'
import { DropdownUserLabel } from '@/components/ui/dropdownMenu/dropdownUserLabel'

import userLogo from '../../../assets/images/userLogo.png'
// eslint-disable-next-line import/extensions
import { DropdownCustomMenu } from './index.ts'

const meta = {
  // argTypes: {
  //   trigger: ,
  // },
  component: DropdownCustomMenu,
  tags: ['autodocs'],
  title: 'Components/DropdownCustomMenu',
} satisfies Meta<typeof DropdownCustomMenu>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryDropDown: Story = {
  args: {
    children: (
      <>
        <DropdownUserLabel name={'name'} />
        <DropdownItem>Item 1 User</DropdownItem>
        <DropdownSeparator></DropdownSeparator>
        <DropdownItem>Item 2 User</DropdownItem>
        <DropdownSeparator></DropdownSeparator>
        <DropdownItem asChild>
          <a href={'https://google.com'}>Item 3 User</a>
        </DropdownItem>
      </>
    ),
    trigger: <img alt={'userLogo'} src={userLogo} />,
  },
}

export const SecondaryDropDown: Story = {
  args: {
    children: (
      <>
        <DropdownItem> Item 1111 Item 1111 Item 1111</DropdownItem>
        <DropdownSeparator></DropdownSeparator>
        <DropdownItem>Item 2222</DropdownItem>
      </>
    ),
    trigger: <PackTrigger />,
  },
}
