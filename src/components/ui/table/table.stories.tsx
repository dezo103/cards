import type { Meta, StoryObj } from '@storybook/react'

import { DeleteIcon } from '@/assets/images/deleteIcon'
import { EditIcon } from '@/assets/images/editIcon'
import { PersonOutlined } from '@/assets/images/personOutlined'
import { Table } from '@/components/ui/table/table'
import { Typography } from '@/components/ui/typography'

import s from './table.module.scss'

const meta = {
  component: Table.Root,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table.Root>

export default meta
type Story = StoryObj<typeof meta>

export const TableExample: Story = {
  args: {
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Название</Table.HeadCell>
            <Table.HeadCell align={'center'}>Описание</Table.HeadCell>
            <Table.HeadCell>Ссылка</Table.HeadCell>
            <Table.HeadCell>Тип</Table.HeadCell>
            <Table.HeadCell>Вид</Table.HeadCell>
            <Table.HeadCell />
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Web Basic</Table.Cell>
            <Table.Cell>
              <PersonOutlined />
            </Table.Cell>
            <Table.Cell>
              <Typography
                as={'a'}
                href={'https://it-incubator.io/'}
                target={'_blank'}
                variant={'link1'}
              >
                Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то
                источник
              </Typography>
            </Table.Cell>
            <Table.Cell>Основной</Table.Cell>
            <Table.Cell>Читать</Table.Cell>
            <Table.Cell>
              <div className={s.serviceCell}>
                <EditIcon />
                <DeleteIcon />
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Web Basic</Table.Cell>
            <Table.Cell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut sed do eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed
              do...
            </Table.Cell>
            <Table.Cell>
              <Typography
                as={'a'}
                href={'https://it-incubator.io/'}
                target={'_blank'}
                variant={'link1'}
              >
                Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то
                источник
              </Typography>
            </Table.Cell>
            <Table.Cell>Основной</Table.Cell>
            <Table.Cell>Читать</Table.Cell>
            <Table.Cell>
              <div className={s.serviceCell}>
                <EditIcon />
                <DeleteIcon />
              </div>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </>
    ),
  },
}
