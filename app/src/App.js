import React from 'react'
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'
import { NoteDetail } from './components/NoteDetail'
import { useNotes } from './hooks/useNotes'
import { useUser } from './hooks/useUser'
import Login from './Login'
import Notes from './Notes'

const Home = () => <h1>Home Pape</h1>
const Users = () => <h1>Users</h1>

const inlineStyles = {
  padding: 5
}

const App = () => {
  const { user } = useUser()
  const { notes } = useNotes()

  return (
    <BrowserRouter>
      <header>
        <Link to="/" style={inlineStyles}>
          Home
        </Link>
        <Link to="/notes" style={inlineStyles}>
          Notes
        </Link>
        <Link to="/users" style={inlineStyles}>
          Users
        </Link>
        {user ? (
          <em>Logged as {user.name}</em>
        ) : (
          <Link to="/login" style={inlineStyles}>
            Login
          </Link>
        )}
      </header>

      <Routes>
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:noteId" element={<NoteDetail notes={notes} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
