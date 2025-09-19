import { Link } from 'react-router-dom'
import { useState } from 'react'
import './auth.css'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Register with: ${email} / ${password}`)
  }

  return (
    <div className="auth-wrap">
      <div className="panel">
        <div className="panel-left">
          <div className="brand">Gradiator</div>
          <h2>Create Account</h2>
          <p className="sub">Join us to get started</p>

          <div className="tabs">
            <Link to="/" className="tab">Sign in</Link>
            <button className="tab active">Sign Up</button>
          </div>

          <form onSubmit={handleSubmit} className="form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="btn-primary">Create Account</button>
          </form>

          <p className="foot">
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>

        <div className="panel-right" />
      </div>
    </div>
  )
}
