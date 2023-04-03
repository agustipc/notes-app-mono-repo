import { useState, useEffect } from 'react'
import noteService from '../services/notes'

export const useNotes = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    noteService.getAll().then((notes) => {
      setNotes(notes)
    })
  })

  return {
    notes
  }
}
