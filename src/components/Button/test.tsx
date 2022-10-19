import { render, screen } from '@testing-library/react'

import Button from '.'

describe('Testing default button', () => {
  it('should render a primary button with width 210px and text Text of Test', () => {
    const width = '210px'
    const text = 'Text of Test'
    const type = 'primary'

    const { container } = render(
      <Button classType={type} width={width} textOfButton={text} />
    )

    expect(screen.getByRole('button', { name: /text/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('render an button with alert class and width 210px and text say Alert: test procced', () => {
    const width = '210px'
    const text = 'Alert: test procced'
    const type = 'alert'

    const { container } = render(
      <Button classType={type} width={width} textOfButton={text} />
    )

    const alertButton = screen.getByRole('button', { name: /alert/i })

    expect(alertButton).toBeInTheDocument()
    expect(alertButton).toHaveStyle('background: #fa9806; width: 210px;')
    expect(alertButton).toHaveTextContent('Alert: test procced')
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render an button with disable class and text say Operation suspended', () => {
    const text = 'Operation suspended'
    const type = 'disable'

    const { container } = render(
      <Button classType={type} textOfButton={text} />
    )

    const disableButton = screen.getByRole('button', { name: /suspended/i })

    expect(disableButton).toBeInTheDocument()
    expect(disableButton).toHaveStyle('width: 100%;')
    expect(disableButton).toHaveStyle('background:#dddddd;')
    expect(disableButton).toHaveTextContent('Operation suspended')
    expect(container.firstChild).toMatchSnapshot()
  })
})
