import React, { useState, useEffect } from 'react'
import loginService from './services/login'
import LoginForm from './components/LoginForm'
import noteService from './services/notes'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const newUser = await loginService.login({ username, password })

      window.localStorage.setItem('loggedNoteAppUser', JSON.stringify(newUser))
      noteService.setToken(newUser.token)

      setUser(newUser)
      setUsername('')
      setPassword('')

      navigate('/')
    } catch (e) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>
  }

  if (user) {
    return <p>User is logged</p>
  }

  return (
    <LoginForm
      username={username}
      password={password}
      handleUsernameChange={(event) => setUsername(event.target.value)}
      handlePasswordChange={(event) => setPassword(event.target.value)}
      handleSubmit={handleLogin}
    />
  )
}
