import { useEffect, useState } from 'react'
import { JobService } from '../../services/jobs.service'
import { useDispatch, useSelector } from 'react-redux'
import { UserService } from '../../services/users.service'
import {
  acceptOfferThunk,
  addOfferThunk,
} from '../../redux/actions/jobs.actions'
import moment from 'moment'

const JobDetail = ({ match }) => {
  const dispatch = useDispatch()

  const [job, setJob] = useState()

  const { token, role, id } = useSelector((state) => state.users)

  const [state, setState] = useState({
    jobId: '',
    authorId: '',
    description: '',
    price: 0,
  })

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    async function getJob() {
      const jobDB = await JobService.getJobById(match.params.id, token)
      const userDB = await UserService.getUserById(jobDB.authorId)
      setJob({ ...jobDB, author: userDB })
    }
    getJob()
  }, [])

  const handlePublishOfert = (e) => {
    e.preventDefault()
    const offer = {
      jobId: job._id,
      authorId: id,
      description: state.description,
      price: state.price,
    }
    dispatch(addOfferThunk(id, offer, token, job))
  }

  const estaDisponible = (job) => {
    if (!job.offers) {
      return true;
    }
    return !job.offers.some((offer) => offer.authorId === id);
  }

  const handleAcceptOffer = (job, index) => {
    const offer = job.offers[index]
    dispatch(acceptOfferThunk(id, offer, token))
  }

  return job ? (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h4 className="text-center">Trabajo</h4>
          <div className="card mb-5" style={{ width: '100%' }}>
            <div className="card-header">
              <h5 className="card-title">
                {job.groupJob}
                {job.acceptedOffer && job.acceptedOffer.authorId === id && role === "employee" && (
                  <span className="text-success"> - Aceptada</span>
                )}
                {job.acceptedOffer && job.acceptedOffer.authorId !== id && role === "employee" && (
                  <span className="text-danger"> - Deprecada</span>
                )}
              </h5>
            </div>
            <div className="card-body">
              <p className="card-text text-dark">
                <strong>Ubicacion</strong>: {job.location}
              </p>
              <p className="card-text text-dark">
                <strong>Fecha</strong>: 15/10/2019s
              </p>
              <p className="card-text text-dark">
                <strong>Descripcion:</strong> {job.description}
              </p>
              <p className="card-text text-dark">
                <strong>Publicado por:</strong>{' '}
                {`${job.author.firstname} ${job.author.lastname}`}
              </p>
            </div>
          </div>
          {role === 'employeer' && job.acceptedOffer && (
            <>
              <h4 className="text-center">Ofertas</h4>
              <li className="list-group-item">
                <p>
                  <strong>Autor: </strong>
                  {job.acceptedOffer?.authorId}
                </p>
                <p>
                  <strong>Presupuesto: </strong>${job.acceptedOffer?.price}
                </p>
                <p>
                  <strong>Descripcion: </strong>
                  {job.acceptedOffer?.description}
                </p>
                <p>
                  <strong>Publicado el: </strong>
                  {moment(job.acceptedOffer?.createdAt).format('DD/MM/yyyy')}
                </p>
              </li>
              <div className="alert alert-success" role="alert">
                Aceptada
              </div>
            </>
          )}
          {role === 'employeer' && !job.acceptedOffer && (
            <>
             {job.offers && <h4 className="text-center">Ofertas</h4>}
              {job?.offers?.map((offer, index) => (
                <div key={offer._id}>
                  <div className="card mb-2" style={{ width: '100%' }}>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <p>
                          <strong>Autor: </strong>
                          {offer.authorId}
                        </p>
                        <p>
                          <strong>Presupuesto: </strong>${offer.price}
                        </p>
                        <p>
                          <strong>Descripcion: </strong>
                          {offer.description}
                        </p>
                        <p>
                          <strong>Publicado el: </strong>
                          {moment(offer.createdAt).format('DD/MM/yyyy')}
                        </p>
                      </li>
                    </ul>
                    <button
                      className="btn btn-block btn-primary"
                      onClick={() => handleAcceptOffer(job, index)}
                    >
                      Aceptar
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
          {estaDisponible(job) && role === 'employee' && !job.acceptedOffer ? (
            <form className="form-group mt-4" onSubmit={handlePublishOfert}>
              <textarea
                className="form-control mb-4"
                type="text"
                placeholder="Descripcion"
                name="description"
                onChange={handleInputChange}
              />
              <input
                className="form-control mb-4"
                type="number"
                placeholder="Presupuesto"
                name="price"
                onChange={handleInputChange}
              />
              <button className="btn btn-block btn-primary">
                Publicar Oferta
              </button>
            </form>
          ) : null}
        </div>
      </div>
    </div>
  ) : null
}

export default JobDetail
