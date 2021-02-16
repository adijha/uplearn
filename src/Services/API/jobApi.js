import { request, gql } from "graphql-request";

export const fetchJobsApi = async () => {
	const query = gql`
		{
			jobs {
				id
				title
				company {
					name
				}
				cities {
					name
				}
				countries {
					name
				}
				remotes {
					name
				}
			}
		}
	`;

	try {
		const { jobs } = await request("https://api.graphql.jobs/", query);
		return jobs;
	} catch (error) {
		console.error(error);
	}
};
