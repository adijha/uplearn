import {fetchJobsApi} from '../../Services/API/jobApi';

export const JOBS_ACTION = {
  LIST: 'LIST_JOBS',
};

export const listJobs = () => ({
  type: JOBS_ACTION.LIST,
  payload: async () => {
    try {
      let jobs = await fetchJobsApi();
      return {data: jobs};
    } catch (e) {
      return {errors: e, data: []};
    }
  },
});
