import React, { useCallback, useEffect, useState } from "react";
import Job from "../components/Job/Job";
import "./jobList.scss";
import { useSelector, useDispatch } from "react-redux";
import { listJobs } from "../store/actions/jobsAction";

export default function JobList() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const dispatch = useDispatch();
	const jobs = useSelector((state) => state.jobs);

	const fetchJobs = useCallback(async () => {
		try {
			await dispatch(listJobs());
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError(true);
		}
	}, [dispatch]);

	useEffect(() => {
		fetchJobs();
	}, [fetchJobs]);
	return (
		<div className="job-page">
			<h1>Here are Jobs</h1>
			{loading ? (
				<h3 className="job-page-loading">
					Loading... <i className="fa fa-spinner fa-spin job-page-spinner"></i>
				</h3>
			) : error ? (
				<h3 className="job-fetch-error">Sorry, Something went wrong!</h3>
			) : (
				jobs && jobs.map((job) => <Job key={job.id} job={job} />)
			)}
		</div>
	);
}
