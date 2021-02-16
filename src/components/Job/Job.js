import React from "react";
import Button from "../Button/Button";
import "./job.scss";
const Job = ({ job }) => {
	const { title, cities, countries, company, remotes } = job;
	return (
		<div className="job-card">
			<h3 className="job-title">
				{title} - <span className="job-company">{company && company.name}</span>
			</h3>
			<p className="job-location">
				<i className="fa fa-map-marker"></i>{" "}
				{cities.map((city, index) => (index === 0 ? "" : ", ") + city.name)}
				{cities.length > 0 && remotes.length > 0 && ", "}
				{remotes.map((remote) => remote.name)}
			</p>
			<p className="job-country">{countries.map((country) => country.name)}</p>
			<Button />
		</div>
	);
};

export default Job;
