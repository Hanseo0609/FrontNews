import * as styleD from '../styles/Login';
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

export default function Login() {

	const serverURL = process.env.REACT_APP_SERVER_URL;

	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");

	//access 토큰 쿠키 저장
	// var setAccessToken = function (accessToken, exp) {
	// 	var date = new Date();
	// 	date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
	// 	document.cookie = 'accessToken=' + accessToken + ';expires=' + date.toUTCString() + ';path=/'
	// }

	//refresh 토큰 쿠키 저장
	// var setRefreshToken = function (refreshToken, exp) {
	// 	var date = new Date();
	// 	date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
	// 	document.cookie = 'refreshToken=' + refreshToken + ';expires=' + date.toUTCString() + ';path=/'
	// }

	//토큰 로컬 스토리지 저장
	var setToken = function(accessToken, refreshToken){
		localStorage.setItem("accessToken", accessToken);
		localStorage.setItem("refreshToken", refreshToken);
	}

	function onChangeEmail(evevt) {
		setUserEmail(evevt.target.value)
	}

	function onChangePassword(evevt) {
		setUserPassword(evevt.target.value)
	}

	async function postLogin() {
		try {
			const response = await axios.post(`${serverURL}/users/login`, {
				email: userEmail,  // 이메일 형식 권장
				password: userPassword,
			});
			if (response.data["status"] === 201) {
				console.log(response.data);
				alert('로그인 성공!!');
				localStorage.setItem("nickname", response.data["data"]["nickname"]);
				localStorage.setItem("userEmail", response.data["data"]["email"]);
				localStorage.setItem("phoneNumber", response.data["data"]["number"]);
				setToken(response.data["data"]["access_token"], response.data["data"]["refresh_token"]);
				// setAccessToken(response.data["data"]["access_token"], 1);
				// setRefreshToken(response.data["data"]["refresh_token"], 100);
				document.location.href = '/';

			} else{
				console.log(response.data)
			}
		} catch (error) {
			console.error(error);  // 에러 메시지 출력
			alert('계정 또는 비밀번호를 다시 확인하세요!!')
		}
	}

	return (
		<div>
			<Link to="/"><styleD.LogoImg src='./source/Logo.png' /></Link>
			<styleD.Wrapper>
				<styleD.InputWarpper>
					<div>아이디</div>
					<styleD.InputDefault type='mail' onChange={onChangeEmail} />
				</styleD.InputWarpper>
				<styleD.InputWarpper>
					<div>비밀번호</div>
					<styleD.InputDefault type='password' onChange={onChangePassword} />
				</styleD.InputWarpper>
				<button type='submit' onClick={postLogin}>로그인</button>
			</styleD.Wrapper>
			<styleD.OptionWrapper>
				<Link to='/FindMyIdPage'>아이디 찾기</Link>
				<Link to='/FindMyPasswordPage'>비밀번호 찾기</Link>
				<Link to='/RegisterPage'>회원가입</Link>
			</styleD.OptionWrapper>
		</div>
	)
}
