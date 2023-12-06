import type { Meta, StoryObj } from '@storybook/react'

import { UserDropdown } from '@/components/layout/header/user-dropdown/user-dropdown'
import { DropdownCustomMenu } from '@/components/ui/dropdownMenu'

const meta = {
  component: UserDropdown,
  tags: ['autodocs'],
  title: 'Layout/UserDropdown',
} satisfies Meta<typeof DropdownCustomMenu>

export default meta
type Story = StoryObj<typeof meta>

export const UserDropDownExample: Story = {}
