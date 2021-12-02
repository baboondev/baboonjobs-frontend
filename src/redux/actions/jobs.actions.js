import { JobService } from "../../services/jobs.service";
import { types } from "../types";

export const saveJobThunk = (job, token) => {
  return async (dispatch) => {
    await JobService.saveJob(job, token).then(() => {
      dispatch(saveJob(job));
    });
  };
};

export const deleteJobThunk = (jobId, token) => {
  return async (dispatch) => {
    await JobService.deleteJob(jobId, token).then(() => {
      dispatch(deleteJob(jobId));
    });
  };
};

export const saveJob = (job) => ({
  type: types.SAVE_JOB,
  payload: job,
});

export const deleteJob = (jobId) => ({
  type: types.DELETE_JOB,
  payload: jobId,
});
