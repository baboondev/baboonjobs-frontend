import Job from '../Job'

const JobList = ({jobs = []}) => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        {jobs ? (
          jobs.map((job) => (
            <div className="col-3"  key={job._id}>
              <Job job={job} />
            </div>
          ))
        ) : (
          <div className="col-12">No jobs found</div>
        )}
      </div>
    </div>
  )
}

export default JobList
