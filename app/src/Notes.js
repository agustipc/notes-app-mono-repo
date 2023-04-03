import React, { useState } from 'react'
import Note from './components/Note'
import Notification from './components/Notification'

import NoteForm from './components/NoteForm'
import { useNotes } from './hooks/useNotes'
import { useUser } from './hooks/useUser'

const Notes = () => {
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  const { logout } = useUser()

  const { notes, addNote, toggleImportanceOf } = useNotes()

  const changeImportance = (id) => {
    toggleImportanceOf(id).catch(() => {
      setErrorMessage(`Note was already removed from server`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    })
  }

  const notesToShow = showAll ? notes : notes.filter((note) => note.important)

  return (
    <div>
      <h1>Notes</h1>

      <Notification message={errorMessage} />

      <NoteForm handleLogout={logout} addNote={addNote} />

      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note, i) => (
          <Note
            key={i}
            note={note}
            toggleImportance={() => changeImportance(note.id)}
          />
        ))}
      </ul>
    </div>
  )
}

export default Notes
