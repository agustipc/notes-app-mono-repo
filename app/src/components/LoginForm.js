import PropTypes from 'prop-types'
import { Button, Form } from 'react-bootstrap'

export default function LoginForm({
  handleSubmit,
  username,
  password,
  handleUsernameChange,
  handlePasswordChange
}) {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group id="username">
        <Form.Control
          type="text"
          value={username}
          name="Username"
          placeholder="Username"
          onChange={handleUsernameChange}
        />
      </Form.Group>

      <Form.Group id="password">
        <Form.Control
          type="password"
          value={password}
          name="Password"
          placeholder="Password"
          onChange={handlePasswordChange}
        />
      </Form.Group>
      <Button id="form-login-button">Login</Button>
    </Form>
  )
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  username: PropTypes.string,
  password: PropTypes.string,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired
}
