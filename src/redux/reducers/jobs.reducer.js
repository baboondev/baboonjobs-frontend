import { types } from "../types";

const initialState = {
  jobs: [],
  my_jobs: [],
};

export const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
        my_jobs: [...state.my_jobs, action.payload],
      };
    case types.DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((job) => job._id !== action.payload),
      };
    default:
      return state;
  }
};
