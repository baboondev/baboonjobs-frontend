import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutThunk } from '../../redux/actions/users.actions'

const Navbar = () => {
  const dispatch = useDispatch()

  const { role } = useSelector(state => state.users)

  const handleLogout = () => {
    dispatch(logoutThunk())
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to={role === "employeer" ? "/jobs-published" : "/jobs"}>
        Baboonjobs
      </Link>
      <ul className="navbar-nav ml-5">
        {role === 'employeer' ? (
          <li className="nav-item">
            <Link className="nav-link" to="/publish">
              Publicar Trabajo
            </Link>
          </li>
        ) : (
          <Link className="nav-link" to="/offers">
            Trabajos Aplicados
          </Link>
        )}
      </ul>
      <button className="btn btn-danger ml-auto" onClick={handleLogout}>
        Cerrar Sesion
      </button>
    </nav>
  )
}

export default Navbar
