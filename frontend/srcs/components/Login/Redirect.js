import changeUrl from '../../router.js';
import { baseUrl, setLoginState } from '../../state/state.js';
import TimerRing from '../GameRoom/Timer.js';

import sidebar from '../Sidebar.js';


export function setupMockAPI() {
	const originalFetch = window.fetch;
	window.fetch = function(url, options) {
		if (url.includes('/api/v2/auth/login')) {
		return Promise.resolve({
			json: () => Promise.resolve({
			status: 200,
			result: {
				userId: '123',
				accessToken: 'fake-token',
				email: 'user@example.com',
				nickname: 'TestUser',
				image_url: 'https://example.com/avatar.jpg'
			}
			})
		});
		}
		return originalFetch(url, options);
	};
}
export default function Redirect() {
	console.log("Redirect");
  

	const $app = document.querySelector("#app");
	$app.innerHTML = "";

	const $timer = TimerRing();
	$app.appendChild($timer);
	// 가짜 로그인 정보
	const fakeLoginData = {
	  userId: '123',
	  accessToken: 'fake-token',
	  email: 'user@example.com',
	  nickname: 'TestUser',
	  image_url: 'https://example.com/avatar.jpg'
	};
  
	// 로그인 상태 설정
	setLoginState(
	  true,
	  fakeLoginData.userId,
	  fakeLoginData.accessToken,
	  fakeLoginData.email,
	  fakeLoginData.nickname,
	  fakeLoginData.image_url
	);
  
	console.log("login success");
	// 로그인 성공 시 사이드바 페이지로 이동
	changeUrl("/sidebar");
  }

// export default function Redirect() {
// 	// console.log("Redirect");

// 	const $app = document.querySelector(".App");
// 	$app.innerHTML = "";

// 	const $timer = TimerRing();
// 	$app.appendChild($timer);

// 	const authCode = new URL(location.href).searchParams.get("code");
// 	const url = `${baseUrl}/api/v2/auth/login`;
// 	console.log(window.location.href);
// 	console.log(authCode);

// 	fetch(url, {
// 		method: "POST",
// 		credentials: "include",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify({
// 			code: authCode,
// 		}),
// 	})
// 		.then((res) => res.json())
// 		.then((data) => {
// 			if (res.status === 200) {
// 				setLoginState(
// 					true,
// 					data.result.userId,
// 					data.result.accessToken,
// 					data.result.email,
// 					data.result.nickname,
// 					data.result.image_url
// 				);
// 				console.log("login success");
// 				const $app = document.querySelector(".App");
// 				$app.innerHTML = "";
// 				sidebar();
// 				// if () 2factor
// 				// localStorage.setItem("token", res.token);
// 				// localStorage.setItem("user", JSON.stringify(res.user));

// 				// else if (data.code === 201) {
// 				// 	// changeUrl("2factor");
// 				// 	setLoginState(
// 				// 		true,
// 				// 		data.result.userId,
// 				// 		data.result.accessToken,
// 				// 		data.result.email,
// 				// 		data.result.nickname,
// 				// 		data.result.image_url
// 				// 	);
// 				// };
// 			}
// 			//  else {
// 			// 	changeUrl("sidebar");
// 			// }
// 		})

// }