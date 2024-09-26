import * as styleD from '../styles/Register';
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

export default function Login() {

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState("");
  const [userName, setUserName] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [userAge, setUserAge] = useState(NaN);

  function onChangeEmail(evevt){
    setUserEmail(evevt.target.value)
  }

  function onChangePassword(evevt){
    setUserPassword(evevt.target.value)
  }

  function onChangePasswordConfirm(evevt){
    setUserPasswordConfirm(evevt.target.value)
  }

  function onChangeName(evevt){
    setUserName(evevt.target.value)
  }

  function onChangeNumber(evevt){
    setUserNumber(evevt.target.value)
  }

  function onChangeNickname(evevt){
    setUserNickname(evevt.target.value)
  }

  function onChangeAge(evevt){
    setUserAge(evevt.target.value)
  }

  async function postResiter() {
    try {
      const response = await axios.post('http://210.181.138.119/users/register', {
        user_email: userEmail,  // 이메일 형식 권장
        user_password: userPassword,
        user_name: userName,
        user_number: userNumber,  // 숫자 형식이 기대된다면 수정
        user_nickname: userNickname,
        user_age: userAge,  // 숫자값
      });
      console.log(response.data);  // response.data로 출력
    } catch (error) {
      console.error(error);  // 에러 메시지 출력
    }
  }

  return (
    <div>
      <Link to='/'><styleD.LogoImg src='./source/Logo.png' /></Link>
      <styleD.Wrapper>

        <styleD.InputWarpper>
          <div>아이디(메일)</div>
          <styleD.InputDefault type='mail' onChange={onChangeEmail}/>
        </styleD.InputWarpper>

        <styleD.InputWarpper>
          <div>비밀번호</div>
          <styleD.InputDefault type='password' onChange={onChangePassword}/>
        </styleD.InputWarpper>

        <styleD.InputWarpper>
          <div>비밀번호 확인</div>
          <styleD.InputDefault type='password' onChange={onChangePasswordConfirm}/>
        </styleD.InputWarpper>

        <styleD.InputWarpper>
          <div>닉네임</div>
          <styleD.InputDefault type='text' onChange={onChangeNickname}/>
        </styleD.InputWarpper>

        <styleD.InputWarpper>
          <div>이름</div>
          <styleD.InputDefault type='text' onChange={onChangeName}/>
        </styleD.InputWarpper>

        <styleD.InputWarpper>
          <div>나이</div>
          <styleD.InputDefault type='number' onChange={onChangeAge}/>
        </styleD.InputWarpper>

        <styleD.InputWarpper>
          <div>전화번호</div>
          <styleD.InputDefault type='text' onChange={onChangeNumber}/>
        </styleD.InputWarpper>

        <button type='submit' onClick={postResiter}>
          <Link to='/Login'>제출하기</Link>
        </button>
      </styleD.Wrapper>
    </div>
  )
}
