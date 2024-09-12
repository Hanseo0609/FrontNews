import sd from '../styles/Register';

export default function Register() {
return (
    <div>
        <styleD.LogoImg src='./images/Logo.png' />
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
					<a href='#'>아이디 찾기</a>
					<a href='#'>비밀번호 찾기</a>
					<a href='#'>회원가입</a>
				</styleD.OptionWrapper>
    </div>    
)
}
