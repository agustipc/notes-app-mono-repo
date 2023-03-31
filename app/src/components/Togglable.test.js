import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'
import Togglable from './Togglable'

describe('<Toggable />', () => {
  test('render children', () => {
    const view = render(
      <Togglable buttonLabel="show">
        <div>testDivContent</div>
      </Togglable>
    )

    expect(view.container).toBeDefined()
    expect(screen.getByText('testDivContent')).toBeInTheDocument()
  })

  test('have the styles', () => {
    render(
      <Togglable buttonLabel="show">
        <div>testDivContent</div>
      </Togglable>
    )

    // const el = screen.getByText('testDivContent')
    // expect(el.parentNode).toHaveStyle('display: none')
  })
})
