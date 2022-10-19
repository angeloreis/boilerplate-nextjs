import { Story, Meta } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main Content Page',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default'
  },
  argTypes: {
    title: {
      control: { type: 'text' }
    },
    description: {
      control: { type: 'text' }
    }
  }
} as Meta

export const Default: Story = (args) => <Main {...args} />
