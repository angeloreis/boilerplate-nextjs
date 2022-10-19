import { Story, Meta } from '@storybook/react'
import Select from '.'

export default {
  title: 'Select',
  component: Select,
  args: {
    data: [
      {
        value: 'Audi V3',
        description: 'Audio V3 1999'
      },
      {
        value: 'Audi V4',
        description: 'Audio V4 2000'
      },
      {
        value: 'Audi V4.1',
        description: 'Audio V3 2000/2001'
      },
      {
        value: 'Audi V5',
        description: 'Audio V3 2001',
        defaultValue: true
      }
    ]
  },
  argTypes: {
    data: {
      required: true,
      name: 'Data of options',
      control: { type: 'array' }
    }
  }
} as Meta

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template = (args: any) => {
  return <Select {...args} />
}

export const Default: Story = Template.bind({})
