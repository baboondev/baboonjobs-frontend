import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { signUpThunk } from '../../redux/actions/users.actions'

const SignIn = () => {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState('')

  const [state, setState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: '',
  })

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    const user = {
      firstname: state.firstname,
      lastname: state.lastname,
      email: state.email,
      password: state.password,
    }
    dispatch(signUpThunk(user, state.role, setLoading, setError))
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 offset-3 mt-5">
          <form className="form-group border p-5 mt-5" onSubmit={handleSignUp}>
            <h3 className="text-center mb-5">Registrarse</h3>
            <input
              className="form-control mb-4"
              onChange={handleInputChange}
              name="firstname"
              type="text"
              placeholder="Nombre"
            />
            <input
              className="form-control mb-4"
              onChange={handleInputChange}
              name="lastname"
              type="text"
              placeholder="Apellido"
            />
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
            <div class="input-group mb-3 mb-4">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">
                  Que desea?
                </label>
              </div>
              <select
                class="custom-select"
                id="inputGroupSelect01"
                onChange={handleInputChange}
                name="role"
              >
                <option selected>Elegir...</option>
                <option value="employee">Aplicar</option>
                <option value="employeer">Contratar</option>
              </select>
            </div>
            <button className="btn btn-block btn-primary mb-4">
              Registrarse
            </button>
            <Link to="/signin" className="text-center">
              Ya estas registrado? Inicia sesion
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
