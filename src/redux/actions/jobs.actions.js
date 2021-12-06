import { JobService } from '../../services/jobs.service'
import { types } from '../types'

export const loadJobsThunk = (token) => {
  return async (dispatch) => {
    await JobService.getAllJobs(token).then((jobs) => {
      dispatch(loadJobs(jobs))
    })
  }
}

export const loadEmployeerJobsThunk = (id, token) => {
  return async (dispatch) => {
    await JobService.getJobsByEmployeerId(id, token).then((jobs) => {
      dispatch(loadEmployeerJobs(jobs))
    })
  }
}

export const loadEmployeeJobsThunk = (id, token) => {
  return async (dispatch) => {
    await JobService.getJobsByEmployeeId(id, token).then((jobs) => {
      dispatch(loadEmployeeJobs(jobs))
    })
  }
}

export const publishJobThunk = (job, token) => {
  return async (dispatch) => {
    await JobService.saveJob(job, token).then((jobdb) => {
      dispatch(publishJob(jobdb))
    })
  }
}

export const addOfferThunk = (id, offer, token, job) => {
  return async (dispatch) => {
    await JobService.addOffer(offer, token).then(() => {
      dispatch(loadJobsThunk(token))
      dispatch(loadEmployeeJobsThunk(id, token))
      dispatch(addOffer(job))
    })
  }
}

export const acceptOfferThunk = (id, offer, token) => {
  return async (dispatch) => {
    await JobService.acceptOffer(offer, token).then(() => {
      dispatch(loadJobsThunk(token))
      dispatch(loadEmployeerJobsThunk(id, token))
    })
  }
}

export const deleteJobThunk = (jobId, token) => {
  return async (dispatch) => {
    await JobService.deleteJob(jobId, token).then(() => {
      dispatch(deleteJob(jobId))
    })
  }
}

export const loadJobs = (jobs) => ({
  type: types.LOAD_JOBS,
  payload: [...jobs],
})

export const loadEmployeerJobs = (jobs) => ({
  type: types.LOAD_EMPLOYEER_JOBS,
  payload: [...jobs],
})

export const loadEmployeeJobs = (jobs) => ({
  type: types.LOAD_EMPLOYEE_JOBS,
  payload: [...jobs],
})

export const publishJob = (job) => ({
  type: types.PUBLISH_JOB,
  payload: job,
})

export const addOffer = (job) => ({
  type: types.ADD_OFFER,
  payload: job,
})

export const deleteJob = (jobId) => ({
  type: types.DELETE_JOB,
  payload: jobId,
})

export const cleanJobs = () => ({
  type: types.CLEAN,
})
