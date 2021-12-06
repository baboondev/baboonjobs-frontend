import axios from 'axios'

const jobsMicroServiceUrl = 'https://baboonjobs-ms-jobs.herokuapp.com'

export const JobService = {
  saveJob: async (job, token) => {
    const { data } = await axios.post(`${jobsMicroServiceUrl}/jobs`, job, {
      headers: { token },
    })
    return data
  },
  getAllJobs: async (token) => {
    const { data } = await axios.get(`${jobsMicroServiceUrl}/jobs`, {
      headers: { token },
    })
    return data
  },
  getJobById: async (jobId, token) => {
    const { data } = await axios.get(`${jobsMicroServiceUrl}/jobs/${jobId}`, {
      headers: { token },
    })
    return data
  },
  getJobsByEmployeerId: async (employeerId, token) => {
    const { data } = await axios.get(
      `${jobsMicroServiceUrl}/jobs/employeer/${employeerId}`,
      { headers: { token } }
    )
    return data
  },
  getJobsByEmployeeId: async (employeeId, token) => {
    const { data } = await axios.get(
      `${jobsMicroServiceUrl}/jobs/employee/${employeeId}`,
      { headers: { token } }
    )
    return data
  },
  deleteJobById: async (jobId, token) => {
    const { data } = await axios.delete(
      `${jobsMicroServiceUrl}/jobs/${jobId}`,
      { headers: { token } }
    )
    return data
  },
  addOffer: async (offer, token) => {
    const { data } = await axios.post(
      `${jobsMicroServiceUrl}/offers/add`,
      offer,
      { headers: { token } }
    )
    return data
  },
  acceptOffer: async (offer, token) => {
    const { data } = await axios.post(
      `${jobsMicroServiceUrl}/offers/accept`,
      offer,
      { headers: { token } }
    )
    return data
  },
}
