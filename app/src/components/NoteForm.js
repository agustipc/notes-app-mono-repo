import { useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import Togglable from './Togglable'

export default function NoteForm({ handleLogout, addNote }) {
  const [newNote, setNewNote] = useState('')
  const togglableRef = useRef()

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const noteObject = {
      content: newNote,
      important: false
    }
    addNote(noteObject)
    setNewNote('')
    togglableRef.current.toggleVisibility()
  }

  return (
    <>
      <h3>Create a new note</h3>
      <Togglable buttonLabel={'New Note'} ref={togglableRef}>
        <form data-cy="note-form" onSubmit={handleSubmit}>
          <input
            name="Add note"
            placeholder="Write your note content"
            value={newNote}
            onChange={handleChange}
          />
          <Button type="submit">save</Button>
        </form>
        <div>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </Togglable>
    </>
  )
}
