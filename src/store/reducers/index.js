import jobsReducer from "./jobsReducer";
import { combineReducers } from "redux";
const allReducer = combineReducers({
	jobs: jobsReducer,
});

export default allReducer;
