import axios from "axios";

// const jobsMicroServiceUrl = "https://baboonjobs-ms-jobs.herokuapp.com/auth";
const jobsMicroServiceUrl = "http://localhost:8080";

export const JobService = {
  saveJob: async (job, token) => {
    const { data } = await axios.post(`${jobsMicroServiceUrl}/jobs`, job, { headers: { token } });
    return data;
  },
  getAllJobs: async (token) => {
    const { data } = await axios.get(`${jobsMicroServiceUrl}/jobs`, { headers: { token } });
    return data;
  },
  getJobById: async (jobId, token) => {
    const { data } = await axios.get(`${jobsMicroServiceUrl}/jobs/${jobId}`, { headers: { token } });
    return data;
  },
  getJobsByEmployeerId: async (employeerId, token) => {
    const { data } = await axios.get(`${jobsMicroServiceUrl}/jobs/${employeerId}`, { headers: { token } });
    return data;
  },
  getJobsByEmployeeId: async (employeeId, token) => {
    const { data } = await axios.get(`${jobsMicroServiceUrl}/jobs/${employeeId}`, { headers: { token } });
    return data;
  },
  deleteJobById: async (jobId, token) => {
    const { data } = await axios.delete(`${jobsMicroServiceUrl}/jobs/${jobId}`, { headers: { token } });
    return data;
  },
};
