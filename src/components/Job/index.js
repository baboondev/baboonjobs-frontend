import moment from 'moment'
import { Link } from 'react-router-dom'

const Job = ({ job }) => {
  return (
    <Link to={`/job/${job._id}`}>
      <div
        className={'card mb-5'}
        style={{ width: '25rem' }}
      >
        <div className="card-header">
          <h5 className="card-title">{job.groupJob}</h5>
        </div>
        <div className="card-body">
          <p className="card-text text-dark">
            <strong>Ubicacion</strong>: {job.location}
          </p>
          <p className="card-text text-dark">
            <strong>Fecha</strong>:{' '}
            {moment(job.dateToWork).format('DD/MM/YYYY')}
          </p>
          <p className="card-text text-dark">
            <strong>Descripcion:</strong> {job.description}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Job
