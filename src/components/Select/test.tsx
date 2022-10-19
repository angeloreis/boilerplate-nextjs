import { render, screen } from '@testing-library/react'

import Select from '.'

describe('<Select />', () => {
  it('should render the heading', () => {
    const data = [
      {
        value: 'Audi V3',
        description: 'Audi V3 1999'
      },
      {
        value: 'Audi V4',
        description: 'Audi V4 2000'
      },
      {
        value: 'Audi V4.1',
        description: 'Audi V3 2000/2001'
      },
      {
        value: 'Audi V5',
        description: 'Audi V3 2001',
        defaultValue: true
      }
    ]
    const { container } = render(<Select data={data} />)
    const componentSelect = screen.getByRole('option', { name: /uma/i })

    expect(componentSelect).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
