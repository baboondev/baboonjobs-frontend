import { useSelector } from 'react-redux'
import JobList from '../../components/JobList'

const JobsPublished = () => {
  const { jobsPublished } = useSelector(state => state.jobs)
  return (
    <>
      <h3 className="text-center mt-5">Trabajos Publicados</h3>
      <JobList jobs={jobsPublished} />
    </>
  )
}

export default JobsPublished
