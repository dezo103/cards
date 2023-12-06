import type { Meta, StoryObj } from '@storybook/react'

import { PackDropdown } from '@/components/layout/header/pack-dropdown/pack-dropdown'
import { DropdownCustomMenu } from '@/components/ui/dropdownMenu'

const meta = {
  component: PackDropdown,
  tags: ['autodocs'],
  title: 'Layout/PackDropdown',
} satisfies Meta<typeof DropdownCustomMenu>

export default meta
type Story = StoryObj<typeof meta>

export const PackDropDownExample: Story = {}
