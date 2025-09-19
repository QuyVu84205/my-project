import { Link } from 'react-router-dom'
import { useState } from 'react'
import './auth.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Login with: ${email} / ${password}`)
  }

  return (
    <div className="auth-wrap">
      <div className="panel">
        <div className="panel-left">
          <div className="brand">Gradiator</div>
          <h2>Welcome Back Creative!</h2>
          <p className="sub">We Are Happy To See You Again</p>

          <div className="tabs">
            <button className="tab active">Sign in</button>
            <Link to="/register" className="tab">Sign Up</Link>
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

            <div className="row">
              <label className="remember">
                <input type="checkbox" /> Remember me
              </label>
              <a className="link" href="#">Forgot Password?</a>
            </div>

            <button type="submit" className="btn-primary">Login</button>

            <div className="divider">OR</div>

            <button type="button" className="btn-apple">
               Log in with Apple
            </button>
            <button type="button" className="btn-google">
              G Log in with Google
            </button>
          </form>

          <p className="foot">
            © 2025 Gradiator. All rights reserved.
          </p>
        </div>

        <div className="panel-right">
          {/* khu vực ảnh nền xanh kiểu “fluid” */}
        </div>
      </div>
    </div>
  )
}
