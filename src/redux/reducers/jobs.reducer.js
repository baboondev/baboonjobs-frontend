import { types } from '../types'

const initialState = {
  jobs: [],
  jobsPublished: [],
  jobsAccepted: [],
}

export const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_JOBS:
      return {
        ...state,
        jobs: action.payload,
      }
    case types.LOAD_EMPLOYEER_JOBS:
      return {
        ...state,
        jobsPublished: action.payload,
      }
    case types.LOAD_EMPLOYEE_JOBS:
      return {
        ...state,
        jobsAccepted: action.payload,
      }
    case types.PUBLISH_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
        jobsPublished: [...state.jobsPublished, action.payload],
      }
    case types.ACCEPT_JOB:
      return {
        ...state,
        jobsAccepted: [...state.jobsAccepted, action.payload],
      }
    case types.ADD_OFFER:
      return {
        ...state,
        jobsAccepted: [...state.jobsAccepted, action.payload],
    }
    case types.DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((job) => job._id !== action.payload),
      }
    case types.CLEAN:
      return {
        jobs: [],
        jobsPublished: [],
        jobsAccepted: [],
        offers: [],
      }
    default:
      return state
  }
}
