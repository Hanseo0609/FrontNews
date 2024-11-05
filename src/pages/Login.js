import * as styleD from '../styles/Login';
import { Link } from "react-router-dom";

export default function Login() {
	return (
		<div>
			<Link to="/"><styleD.LogoImg src='./source/Logo.png' /></Link>
			<styleD.Wrapper>
				<styleD.InputWarpper>
					<div>아이디</div>
					<styleD.InputDefault type='mail' />
				</styleD.InputWarpper>
				<styleD.InputWarpper>
					<div>비밀번호</div>
					<styleD.InputDefault type='password' />
				</styleD.InputWarpper>
				<button type='submit'>로그인</button>
			</styleD.Wrapper>
			<styleD.OptionWrapper>
				<Link to='/FindMyId'>아이디 찾기</Link>
				<Link to='/FindMyPassword'>비밀번호 찾기</Link>
				<Link to='/Register'>회원가입</Link>
			</styleD.OptionWrapper>
		</div>
	)
}
