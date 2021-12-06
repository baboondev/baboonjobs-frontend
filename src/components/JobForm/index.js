import { DatePicker } from 'antd'
import moment from 'moment'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { publishJobThunk } from '../../redux/actions/jobs.actions'

const JobForm = () => {
  const { token, id } = useSelector((state) => state.users)

  const dispatch = useDispatch()

  const [state, setState] = useState({
    groupJob: '',
    dateToWork: '',
    location: '',
    description: '',
  })

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleDateChange = (e) => {
    setState({
      ...state,
      dateToWork: e
    })
  }

  const handlePublishJob = (e) => {
    e.preventDefault()
    const job = { ...state, authorId: id }
    dispatch(publishJobThunk(job, token))
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 offset-3 mt-5">
          <form
            className="form-group border p-5 mt-5"
            onSubmit={handlePublishJob}
          >
            <h3 className="text-center mb-5">Publicar Trabajo</h3>
            <div className="input-group mb-3 mb-4">
              <div className="input-group-prepend">
                <label className="input-group-text">Tipo de trabajo</label>
              </div>
              <select
                className="custom-select"
                id="inputGroupSelect01"
                onChange={handleInputChange}
                name="groupJob"
              >
                <option selected="Mecanica">Mecanica</option>
                <option value="Limpieza">Limpieza</option>
                <option value="Seguridad">Seguridad</option>
                <option value="Salud">Salud</option>
                <option value="Educacion">Educacion</option>
                <option value="Mantenimiento">Mantenimiento</option>
                <option value="Carpinteria">Carpinteria</option>
                <option value="Soldadura">Soldadura</option>
              </select>
            </div>
            <DatePicker
              className="form-control mb-4"
              onChange={handleDateChange}
              placeholder="Seleccionar fecha"
            />
            <input
              className="form-control mb-4"
              onChange={handleInputChange}
              name="location"
              type="text"
              placeholder="Ubicacion"
            />
            <textarea
              className="form-control mb-4"
              onChange={handleInputChange}
              name="description"
              type="text"
              placeholder="Descripcion"
            />
            <button className="btn btn-block btn-primary mb-4">Publicar</button>
          </form>
          {/* {loading && <div className="text-center">Cargando...</div>}
          {error && <div className="text-center">{error}</div>} */}
        </div>
      </div>
    </div>
  )
}

export default JobForm
