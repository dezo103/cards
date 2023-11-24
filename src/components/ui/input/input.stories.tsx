import type { Meta, StoryObj } from '@storybook/react'

// eslint-disable-next-line import/extensions
import { Input } from './index.ts'

const meta = {
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    // title: {
    //   control: { type: 'text' },
    //   },
    //   variant: {
    //     control: { type: 'radio' },
    //     options: ['primary', 'secondary', 'tertiary', 'link'],
    // },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const BaseInput: Story = {
  args: {
    label: 'label',
    placeholder: 'placeholder',
    type: 'text',
  },
}

export const ErrorInput: Story = {
  args: {
    error: 'Error',
    label: 'label',
    placeholder: 'placeholder',
    type: 'text',
  },
}
export const DisabledInput: Story = {
  args: {
    disabled: true,
    label: 'disabled',
    placeholder: 'placeholder',
    type: 'text',
  },
}
