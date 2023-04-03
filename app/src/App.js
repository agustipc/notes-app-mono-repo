import React, { useState } from 'react'

const Home = () => <h1>Home Pape</h1>
const Notes = () => <h1>Notes</h1>
const Users = () => <h1>Users</h1>

const inlineStyles = {
  padding: 5
}

const App = () => {
  const [page, setPage] = useState(() => {
    const { pathname } = window.location
    const page = pathname.slice(1)
    return page
  })

  const getContent = () => {
    switch (page) {
      case 'users':
        return <Users />
      case 'notes':
        return <Notes />
      default:
        return <Home />
    }
  }

  const toPage = (page) => (event) => {
    event.preventDefault()
    window.history.pushState(null, '', `/${page}`)
    setPage(page)
  }

  return (
    <div>
      <header>
        <a href="#" onClick={toPage('')} style={inlineStyles}>
          Home
        </a>
        <a href="#" onClick={toPage('notes')} style={inlineStyles}>
          Notes
        </a>
        <a href="#" onClick={toPage('users')} style={inlineStyles}>
          Users
        </a>
      </header>
      {getContent()}
    </div>
  )
}

export default App
