import { render, screen } from '@testing-library/react'

import Spin from '.'

describe('<Spin />', () => {
  it('should render the heading', () => {
    const { container } = render(<Spin />)

    const spinContainer = screen.getByLabelText('spin-loading')

    expect(spinContainer).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
