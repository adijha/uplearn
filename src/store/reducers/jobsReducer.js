import { JOBS_ACTION } from "../actions/jobsAction";

const jobsReducer = (state = [], action) => {
	switch (action.type) {
		case `${JOBS_ACTION.LIST}_FULFILLED`:
			return action.payload.data ? action.payload.data : [];
		default:
			return state;
	}
};

export default jobsReducer;
