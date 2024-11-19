import * as styleD from '../styles/Register';
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

export default function Login() {

  //백엔드 서버
  const serverURL = process.env.REACT_APP_SERVER_URL;

  //아이디 & 비밀번호 입력 제한
  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState("");
  const [userName, setUserName] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [userAge, setUserAge] = useState(NaN);

  function onChangeEmail(evevt) {
    setUserEmail(evevt.target.value)
  }

  function onChangePassword(evevt) {
    setUserPassword(evevt.target.value)
  }

  function onChangePasswordConfirm(evevt) {
    setUserPasswordConfirm(evevt.target.value)
  }

  function onChangeName(evevt) {
    setUserName(evevt.target.value)
  }

  function onChangeNumber(evevt) {
    setUserNumber(evevt.target.value)
  }

  function onChangeNickname(evevt) {
    setUserNickname(evevt.target.value)
  }

  function onChangeAge(evevt) {
    setUserAge(evevt.target.value)
  }

  function idCheck() {
    if (userEmail != "") {
      return (
        <div>
          {emailRegEx.test(userEmail) ?
            <styleD.registerText>올바른 아이디입니다.</styleD.registerText> :
            <styleD.registerText>올바른 형식으로 입력해 주세요.</styleD.registerText>}
        </div>
      )
    } else {
      return (
        <div>
          <styleD.registerText></styleD.registerText>
        </div>
      )
    }
  }

  function passwordCheck() {
    if (userPassword != "") {
      return (
        <div>
          {passwordRegEx.test(userPassword) ?
            <styleD.registerText>올바른 비밀번호입니다.</styleD.registerText> :
            <styleD.registerText>올바른 형식으로 입력해 주세요.</styleD.registerText>}
        </div>
      )
    } else {
      return (
        <div>
          <styleD.registerText>비밀번호는 영문, 숫자를 혼합하여 8~20자로 입력해주세요</styleD.registerText>
        </div>
      )
    }
  }


  function passwordDoubleCheck() {
    if (userPassword != "" && userPasswordConfirm != "") {
      return (
        <div>
          {userPassword === userPasswordConfirm ?
            <styleD.registerText>비밀번호가 일치합니다.</styleD.registerText> :
            <styleD.registerText>비밀번호가 일치하지 않습니다</styleD.registerText>}
        </div>
      )
    }
  }

  async function postResiter() {
    if (emailRegEx.test(userEmail) && passwordRegEx.test(userPassword) && userPassword == userPasswordConfirm) {
      try {
        const response = await axios.post(`${serverURL}/users/register`, {
          user_email: userEmail,  // 이메일 형식 권장
          user_password: userPassword,
          user_name: userName,
          user_number: userNumber.toString(),
          user_nickname: userNickname,
          user_age: userAge,  // 숫자값
        });
        if(response.data['status'] === 201){
          alert("회원가입 성공!!")
        document.location.href = '/LoginPage'
        }else if(response.data['status'] === 418){
          alert('아이디 중복입니다.');
        }else if(response.data['status'] === 419){
          alert('닉네임 중복입니다.');
        }
        
      } catch (error) {
        console.error(error);  // 에러 메시지 출력
      }
    } else {
      alert("올바른 형식이 아닙니다.")
    }
  }

  const [isVisible, setIsVisible] = useState(false);

  function sendEmailCode() {
    console.log('클릭됨');
    setIsVisible(true);
  }

  return (
    <div>
      <Link to='/'><styleD.LogoImg src='./source/Logo.png' /></Link>
      <styleD.Wrapper>
        <styleD.InputWarpper>
          <div>아이디(메일)</div>
          <div>
            <styleD.InputDefault type='mail' onChange={onChangeEmail} />
            <styleD.EmailConfirmBtn onClick={sendEmailCode}>인증하기</styleD.EmailConfirmBtn>
            {idCheck()}
            <styleD.InputDefault visible={isVisible}/>
            <styleD.EmailConfirmBtn onClick={sendEmailCode}>확인하기</styleD.EmailConfirmBtn>
          </div>
          
          <styleD.InputConfirmCode placeholder=' 이메일로 발송된 인증코드를 입력하세요.' name='add' type='text'/>
        </styleD.InputWarpper>

        <styleD.InputWarpper>
          <div>비밀번호</div>
          <styleD.InputDefault2 type='password' onChange={onChangePassword} />
          {passwordCheck()}
        </styleD.InputWarpper>

        <styleD.InputWarpper>
          <div>비밀번호 확인</div>
          <styleD.InputDefault2 type='password' onChange={onChangePasswordConfirm} />
          {passwordDoubleCheck()}
        </styleD.InputWarpper>

        <styleD.InputWarpper>
          <div>닉네임</div>
          <styleD.InputDefault2 type='text' onChange={onChangeNickname} />
        </styleD.InputWarpper>

        <styleD.InputWarpper>
          <div>이름</div>
          <styleD.InputDefault2 type='text' onChange={onChangeName} />
        </styleD.InputWarpper>

        <styleD.InputWarpper>
          <div>나이</div>
          <styleD.InputDefault2 type='number' onChange={onChangeAge} />
        </styleD.InputWarpper>

        <styleD.InputWarpper>
          <div>전화번호</div>
          <styleD.InputDefault2 type='number' onChange={onChangeNumber} />
        </styleD.InputWarpper>

        <styleD.SummitBtn type='submit' onClick={postResiter}>
          제출하기
        </styleD.SummitBtn>
      </styleD.Wrapper>
    </div>
  )
}
