import { useRef, useState } from 'react'
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
          <button type="submit">save</button>
        </form>
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </Togglable>
    </>
  )
}
