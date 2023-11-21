import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

// eslint-disable-next-line import/extensions
import { Card } from './index.ts'

const meta = {
  argTypes: {},
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const CardWithButtons: Story = {
  args: {
    children: [
      <Button variant={'tertiary'}>Button in the card</Button>,
      <Button variant={'primary'}>Button in the card</Button>,
      <Button variant={'secondary'}>Button in the card</Button>,
      <Button variant={'link'}>Button in the card</Button>,
    ],
  },
}
export const CardWithTypography: Story = {
  args: {
    children: [
      <Typography variant={'body1'}>Some text</Typography>,
      <Typography variant={'body2'}>Some text</Typography>,
      <Typography variant={'caption'}>Some text</Typography>,
      <Typography variant={'large'}>Some text</Typography>,
      <Typography as={'a'} variant={'link1'}>
        Some text
      </Typography>,
      <Typography as={'a'} variant={'link2'}>
        Some text
      </Typography>,
      <Typography variant={'overline'}>Some text</Typography>,
      <Typography variant={'subtitle1'}>Some text</Typography>,
      <Typography variant={'subtitle2'}>Some text</Typography>,
    ],
  },
}

export const ArticleCard: Story = {
  args: {
    as: 'article',
    children: ['ArticleCard'],
  },
}

export const SectionCard: Story = {
  args: {
    as: 'section',
    children: ['SectionCard'],
  },
}

export const StyledCard: Story = {
  args: {
    children: ['StyledCard'],
    style: {
      backgroundColor: 'lightgray',
      height: '480px',
      width: '640px',
    },
  },
}
