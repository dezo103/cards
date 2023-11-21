import type { Meta, StoryObj } from '@storybook/react'

// eslint-disable-next-line import/extensions
import { Checkbox } from './index.ts'

const meta = {
  argTypes: {
    disabled: {
      control: { type: 'radio' },
      options: [true, false],
    },
    label: {
      control: { type: 'text' },
    },
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const CheckedCheckbox: Story = {
  args: {
    checked: true,
  },
}
export const UncheckedCheckbox: Story = {
  args: {
    checked: false,
  },
}
export const LabeledCheckbox: Story = {
  args: {
    checked: true,
    label: 'This is a Label',
  },
}
