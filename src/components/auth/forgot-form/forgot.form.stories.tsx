import type { Meta, StoryObj } from '@storybook/react'

import ForgotForm from '@/components/auth/forgot-form/forgot-form'

const meta = {
  argTypes: {
    onSubmit: { action: 'submitted' },
  },
  component: ForgotForm,
  tags: ['autodocs'],
  title: 'Auth/ForgotForm',
} satisfies Meta<typeof ForgotForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
