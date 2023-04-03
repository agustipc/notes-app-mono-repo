import PropTypes from 'prop-types'

export default function LoginForm({
  handleSubmit,
  username,
  password,
  handleUsernameChange,
  handlePasswordChange
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={username}
          name="Username"
          placeholder="Username"
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          name="Password"
          placeholder="Password"
          onChange={handlePasswordChange}
        />
      </div>
      <button id="form-login-button">Login</button>
    </form>
  )
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  username: PropTypes.string,
  password: PropTypes.string,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired
}
