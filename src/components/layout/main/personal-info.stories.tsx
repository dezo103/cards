import type { Meta, StoryObj } from '@storybook/react'

import { PersonalInfo } from '@/components/layout/main/personal-info'

const meta = {
  component: PersonalInfo,
  tags: ['autodocs'],
  title: 'Common/PersonalInfo',
} satisfies Meta<typeof PersonalInfo>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
