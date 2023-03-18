import type {Meta, StoryObj} from '@storybook/react'
import Foo from 'components/Foo'

const meta = {
  title: 'Components/Foo',
  component: Foo,
} satisfies Meta<typeof Foo>

export default meta

type Story = StoryObj<typeof meta>

export const foo: Story = {}
