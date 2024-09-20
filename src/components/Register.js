<<<<<<< HEAD
=======

>>>>>>> origin/develop
import * as styleD from '../styles/Register';

export default function Login() {
  return (
    <div>
<<<<<<< HEAD
      <styleD.LogoImg src='./source/Logo.png' />
      <styleD.Wrapper>
        <styleD.InputWarpper>
          <div>아이디(메일)</div>
          <styleD.InputDefault type='mail' />
        </styleD.InputWarpper>
        <styleD.InputWarpper>
          <div>비밀번호</div>
          <styleD.InputDefault type='password' />
        </styleD.InputWarpper>
        <styleD.InputWarpper>
          <div>비밀번호 확인</div>
          <styleD.InputDefault type='password' />
        </styleD.InputWarpper>
        <styleD.InputWarpper>
          <div>닉네임</div>
          <styleD.InputDefault type='password' />
        </styleD.InputWarpper>
        <styleD.InputWarpper>
          <div>이름</div>
          <styleD.InputDefault type='password' />
        </styleD.InputWarpper>

        <p style={{margin: '0'}}>생년월일</p>
        <div style={{display: 'flex', marginBottom: '20px'}}>
          <styleD.SelectBox>
            <option disabled selected>출생 연도</option>
          </styleD.SelectBox>
          <styleD.SelectBox>
            <option disabled selected>월</option>
          </styleD.SelectBox>
          <styleD.SelectBox>
            <option disabled selected>일</option>
          </styleD.SelectBox>
        </div>

        <styleD.InputWarpper>
          <div>전화번호</div>
          <styleD.InputDefault type='password' />
        </styleD.InputWarpper>

        <button type='submit'>제출하기</button>
      </styleD.Wrapper>
    </div>
  )
=======
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
>>>>>>> origin/develop
}
