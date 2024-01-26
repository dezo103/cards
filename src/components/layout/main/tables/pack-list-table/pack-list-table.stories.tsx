import type { Meta, StoryObj } from '@storybook/react'

import { PackListTable } from '@/components/layout/main/tables/pack-list-table/pack-list-table'

const meta = {
  component: PackListTable,
  tags: ['autodocs'],
  title: 'Common/Tables/PackListTable',
} satisfies Meta<typeof PackListTable>

export default meta
type Story = StoryObj<typeof meta>

const data = [
  {
    author: { id: '3c79d729-9019-4aa1-8050-223b02bf238a', name: 'tazalov' },
    cardsCount: 8,
    cover:
      'https://andrii-flashcards.s3.eu-central-1.amazonaws.com/aa0ca970-e426-4803-a358-3ee46b751146-boston.jpg',
    created: '2024-01-16T06:04:06.240Z',
    id: 'clrfy83c00boszk2v2wqcy45v',
    isPrivate: false,
    name: 'Породы собак!',
    updated: '2024-01-26T16:34:07.076Z',
    userId: '3c79d729-9019-4aa1-8050-223b02bf238a',
  },
  {
    author: { id: '3c79d729-9019-4aa1-8050-223b02bf238a', name: 'tazalov' },
    cardsCount: 8,
    cover:
      'https://andrii-flashcards.s3.eu-central-1.amazonaws.com/aa0ca970-e426-4803-a358-3ee46b751146-boston.jpg',
    created: '2024-01-16T06:04:06.240Z',
    id: 'clrfy83c00boszk2v2wqcy45v',
    isPrivate: false,
    name: 'Породы собак!',
    updated: '2024-01-26T16:34:07.076Z',
    userId: '3c79d729-9019-4aa1-8050-223b02bf238a',
  },
  {
    author: { id: '3c79d729-9019-4aa1-8050-223b02bf238a', name: 'tazalov' },
    cardsCount: 8,
    cover:
      'https://andrii-flashcards.s3.eu-central-1.amazonaws.com/aa0ca970-e426-4803-a358-3ee46b751146-boston.jpg',
    created: '2024-01-16T06:04:06.240Z',
    id: 'clrfy83c00boszk2v2wqcy45v',
    isPrivate: false,
    name: 'Породы собак!',
    updated: '2024-01-26T16:34:07.076Z',
    userId: '3c79d729-9019-4aa1-8050-223b02bf238a',
  },
  {
    author: { id: '3c79d729-9019-4aa1-8050-223b02bf238a', name: 'tazalov' },
    cardsCount: 8,
    cover:
      'https://andrii-flashcards.s3.eu-central-1.amazonaws.com/aa0ca970-e426-4803-a358-3ee46b751146-boston.jpg',
    created: '2024-01-16T06:04:06.240Z',
    id: 'clrfy83c00boszk2v2wqcy45v',
    isPrivate: false,
    name: 'Породы собак!',
    updated: '2024-01-26T16:34:07.076Z',
    userId: '3c79d729-9019-4aa1-8050-223b02bf238a',
  },
]

export const TableOfPackList: Story = {
  args: { data },
}
