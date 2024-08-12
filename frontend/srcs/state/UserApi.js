import { baseUrl } from "./state.js";

export function getUserInfo(id) {
	return new Promise((resolve) => {
		const url = `${baseUrl}/api/v1/members/${id}`;

	fetch(url, {
		method: "GET",
		headers: {
			"content-Type": "application/json",
			Authorization: `Bearer ${getAccessToken()}`,
		},
		})
		.then((res) => res.json())
		.then((data) => {
		if (data.code === 200)
			resolve(data);
		else if (data.code === 401) {
			setNewAccessToken().then((result) => {
			if (result === true) resolve(getUserInfo(id));
			});
		} else if (data.code === 404) {
			changeUrl("/404");
		}
		})
		.catch(() => {
		changeUrl("/404");
		});
	});
}