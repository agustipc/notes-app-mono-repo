import React, { Suspense } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
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
    <Suspense fallback={<span>Loading component...</span>}>
      <div className="container">
        <BrowserRouter>
          <Navbar collapseOnSelect expand="lg">
            <Navbar.Toggle aria-controls=" responsive-navbar-nav" />
            <Navbar.Collapse>
              <Nav>
                <Nav.Link>
                  <Link to="/" style={inlineStyles}>
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/notes" style={inlineStyles}>
                    Notes
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/users" style={inlineStyles}>
                    Users
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  {user ? (
                    <em>Logged as {user.name}</em>
                  ) : (
                    <Link to="/login" style={inlineStyles}>
                      Login
                    </Link>
                  )}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Routes>
            <Route path="/notes" element={<Notes />} />
            <Route
              path="/notes/:noteId"
              element={<NoteDetail notes={notes} />}
            />
            <Route path="/users" element={<Users />} />
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
            />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  )
}

export default App
