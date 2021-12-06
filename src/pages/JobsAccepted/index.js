import { useSelector } from 'react-redux'
import JobList from '../../components/JobList'

const JobsAccepted = () => {
  const { jobsAccepted } = useSelector(state => state.jobs)
  return (
    <>
      <h3 className="text-center mt-5">Trabajos Aplicados</h3>
      <JobList jobs={jobsAccepted} />
    </>
  )
}

export default JobsAccepted
