// import changeUrl from '../router';

export const baseUrl = "https://localhost";
export const socketUrl = "wss://localhost";

const setLoginState = (
	state,
	userId,
	accessToken,
	email,
	nickname,
	image_url
	) => {
	localStorage.setItem("isLogin", state);
	localStorage.setItem("accessToken", accessToken);
	localStorage.setItem("userId", userId);
	localStorage.setItem("email", email);
	localStorage.setItem("nickname", nickname);
	localStorage.setItem("image", image_url);
};

const setLogoutState = () => {
	localStorage.removeItem("isLogin");
	localStorage.removeItem("accessToken");
	localStorage.removeItem("userId");
	localStorage.removeItem("email");
	localStorage.removeItem("nickname");
	localStorage.removeItem("image");
};

const setisLogin = (state) => {
	localStorage.setItem("isLogin", state);
};

const setAccessToken = (accessToken) => {
	localStorage.setItem("accessToken", accessToken);
};

const setNickname = (nickname) => {
	localStorage.setItem("nickname", nickname);
};

const setImage = (image) => {
	localStorage.setItem("image", image);
};

const setNewAccessToken = () => {
	return new Promise((resolve) => {
		const url = `${baseUrl}/api/v2/token/refresh`;
	
		fetch(url, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.code === 201 || data.code === 200) {
					setisLogin(true);
					setAccessToken(data.result.accessToken);
					resolve(true);
				} else {
					logout();
					resolve(false);
				}
			})
	})
};

//get
const getIsLogin = () => {
	return localStorage.getItem("isLogin");
};

const getAccessToken = () => {
	return localStorage.getItem("accessToken");
};

const getUserId = () => {
	return localStorage.getItem("userId");
};

const getEmail = () => {
	return localStorage.getItem("email");
};

const getNickname = () => {
	return localStorage.getItem("nickname");
};

const getImage = () => {
	return localStorage.getItem("image");
};

const getMyinfo = () => {
	return {
		userId: getUserId(),
		nickname: getNickname(),
		email: getEmail(),
		image: getImage(),
	};
};

const logout = () => {
	return new Promise((resolve) => {
		const url = `${baseUrl}/api/v2/auth/logout`;

		// NotifySocketManager.closeInstance();
		// JoinSocketManager.closeInstance();
		// ChatSocketManager.closeInstance();

		fetch(url, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getAccessToken()}`,
			},
			// credentials: "include",
		})
			.then((res) => res.json())
			.then((data) => {
				setLogoutState();
				changeUrl("/");
				resolve();
		});
	})
};

export {
	setLoginState,
	setLogoutState,
	setisLogin,
	setNewAccessToken,
	setNickname,
	setImage,
	getIsLogin,
	getAccessToken,
	getMyinfo,
	getUserId,
	getEmail,
	getNickname,
	getImage,
	logout
};
