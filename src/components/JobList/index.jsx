import JobDetail from "../JobDetail";

const JobsList = ({jobs = []}) => {
  return jobs ? (
    jobs.map((job) => <JobDetail key={job.id} job={job} />)
  ) : (
    <div>No jobs</div>
  );
};

export default JobsList;
