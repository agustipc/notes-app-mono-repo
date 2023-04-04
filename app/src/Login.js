import React, { useState } from 'react'
import LoginForm from './components/LoginForm'
import { useNavigate } from 'react-router-dom'
import { useUser } from './hooks/useUser'

export default function Login() {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  const { user, login } = useUser()

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      login()
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
    <div className="container">
      <LoginForm
        username={username}
        password={password}
        handleUsernameChange={(event) => setUsername(event.target.value)}
        handlePasswordChange={(event) => setPassword(event.target.value)}
        handleSubmit={handleLogin}
      />
    </div>
  )
}
