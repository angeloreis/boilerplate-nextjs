import { Story, Meta } from '@storybook/react'
import Button from '.'

export default {
  title: 'Default button',
  component: Button,
  argTypes: {
    classType: {
      name: 'classType',
      options: ['primary', 'success', 'info', 'alert', 'danger', 'disable'],
      control: { type: 'select' }
    },
    width: {
      name: 'width',
      control: { type: 'text' }
    },
    textOfButton: {
      name: 'text of button',
      control: { type: 'text' }
    }
  }
} as Meta

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template = (args: any) => {
  return <Button {...args} />
}

export const Default: Story = Template.bind({})

Default.args = {
  classType: 'primary',
  width: '100%',
  textOfButton: 'Default text'
}
