import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { signInThunk } from '../../redux/actions/users.actions'

const SignIn = () => {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState('')

  const [state, setState] = useState({ email: '', password: '' })

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    const { email, password } = state
    dispatch(signInThunk(email, password, setLoading, setError))
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 offset-3 mt-5">
          <form className="form-group border p-5 mt-5" onSubmit={handleSignIn}>
            <h3 className="text-center mb-5">Iniciar Sesion</h3>
            <input
              className="form-control mb-4"
              onChange={handleInputChange}
              name="email"
              type="email"
              placeholder="Email"
            />
            <input
              className="form-control mb-4"
              onChange={handleInputChange}
              name="password"
              type="password"
              placeholder="Password"
            />
            <button className="btn btn-block btn-primary mb-4">
              Iniciar Sesion
            </button>
            <Link to="/signup" className="text-center">
              No estas registrado? Registrate
            </Link>
          </form>
          {loading && <div className="text-center">Cargando...</div>}
          {error && <div className="text-center">{error}</div>}
        </div>
      </div>
    </div>
  )
}

export default SignIn
