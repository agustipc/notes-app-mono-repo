import { useState, useEffect } from 'react'

import noteService from '../services/notes'
import loginService from '../services/login'

export const useUser = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])

  const logout = () => {
    if (user) {
      setUser(null)
      noteService.setToken(null)
      window.localStorage.removeItem('loggedNoteAppUser')
    }
  }

  const login = async ({ username, password }) => {
    const newUser = await loginService.login({ username, password })

    window.localStorage.setItem('loggedNoteAppUser', JSON.stringify(newUser))
    noteService.setToken(newUser.token)

    setUser(newUser)
  }

  return { user, logout, login }
}
