import { useSelector } from 'react-redux'
import JobList from '../../components/JobList'

const Jobs = () => {
  const { jobs } = useSelector(state => state.jobs)
  return (
    <>
      <h3 className="text-center mt-5">Trabajos Disponibles</h3>
      <JobList jobs={jobs} />
    </>
  )
}

export default Jobs
