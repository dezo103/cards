import type { Meta, StoryObj } from '@storybook/react'

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
        <DropdownUserLabel />
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
        <DropdownItem>Item 1111</DropdownItem>
        <DropdownSeparator></DropdownSeparator>
        <DropdownItem>Item 2222</DropdownItem>
      </>
    ),
    trigger: (
      <svg
        fill={'none'}
        height={'24'}
        viewBox={'0 0 24 24'}
        width={'24'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <circle cx={'12'} cy={'12'} r={'8.5'} stroke={'white'} />
        <g clipPath={'url(#clip0_5928_12620)'}>
          <path
            d={
              'M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z'
            }
            fill={'white'}
          />
          <path
            d={
              'M12 9.5C12.5523 9.5 13 9.05228 13 8.5C13 7.94772 12.5523 7.5 12 7.5C11.4477 7.5 11 7.94772 11 8.5C11 9.05228 11.4477 9.5 12 9.5Z'
            }
            fill={'white'}
          />
          <path
            d={
              'M12 16.5C12.5523 16.5 13 16.0523 13 15.5C13 14.9477 12.5523 14.5 12 14.5C11.4477 14.5 11 14.9477 11 15.5C11 16.0523 11.4477 16.5 12 16.5Z'
            }
            fill={'white'}
          />
        </g>
        <defs>
          <clipPath id={'clip0_5928_12620'}>
            <rect fill={'white'} height={'12'} transform={'translate(6 6)'} width={'12'} />
          </clipPath>
        </defs>
      </svg>
    ),
  },
}
