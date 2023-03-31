import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import Note from './Note'

test('components are rendering', () => {
  const note = {
    content: 'This is a test note',
    important: true
  }

  const view = render(<Note note={note} />)

  expect(screen.getByText('This is a test note')).toBeInTheDocument()
  expect(view.container).toHaveTextContent(note.content)
  //   view.getByText('make not important')
})

test('clicking the button calls event handler once', () => {
  const note = {
    content: 'This is a test note',
    important: true
  }

  const mockHandler = jest.fn()
  render(<Note note={note} toggleImportance={mockHandler} />)

  const button = screen.getByText('make not important')

  fireEvent.click(button)

  //   expect(mockHandler.mock.calls).toHaveLength(1)
  expect(mockHandler).toHaveBeenCalledTimes(1)
})
