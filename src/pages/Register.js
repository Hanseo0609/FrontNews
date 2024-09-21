import * as styleD from '../styles/Register';
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
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
        <button type='submit'>
          <Link to='/Login'>제출하기</Link>
        </button>
      </styleD.Wrapper>
    </div>
  )
}
