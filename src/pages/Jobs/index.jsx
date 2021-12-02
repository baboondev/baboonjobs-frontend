import { useSelector } from "react-redux";
import JobsList from "../../components/JobList";

const Jobs = () => {
  const { my_jobs } = useSelector(state => state.jobs);
  return (
    <JobsList jobs={my_jobs} />
  )
};

export default Jobs;