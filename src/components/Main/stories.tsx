import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main component',
  component: Main,
  args: {
    title: 'Default Title component',
    description: 'Default Description component'
  }
} as Meta

export const BasicMain: Story = (args) => <Main {...args} />
