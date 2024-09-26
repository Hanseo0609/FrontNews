import * as styleD from '../styles/Register';
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

export default function Login() {

  async function postResiter() {
    try {
      const response = await axios.post('http://210.181.138.119/users/register', {
        user_email: "aa1@example.com",  // 이메일 형식 권장
        user_password: "bb1",
        user_name: "John Doe",
        user_number: "010-1234-5678",  // 숫자 형식이 기대된다면 수정
        user_nickname: "asd",
        user_age: 25,  // 숫자값
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
          <styleD.InputDefault type='text' />
        </styleD.InputWarpper>
        <styleD.InputWarpper>
          <div>이름</div>
          <styleD.InputDefault type='text' />
        </styleD.InputWarpper>

        <p style={{ margin: '0' }}>생년월일</p>
        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <styleD.SelectBox>
            <option disabled selected>출생 연도</option>
            {
              Array(100).fill(0).map((_, idx) => {
                return (
                  <option>{idx + 1925}</option>
                )
              })
            }
          </styleD.SelectBox>
          <styleD.SelectBox>
            <option disabled selected>월</option>
            {
              Array(12).fill(0).map((_, idx) => {
                return (
                  <option>{idx + 1}</option>
                )
              })
            }
          </styleD.SelectBox>
          <styleD.SelectBox>
            <option disabled selected>일</option>
            {
              Array(31).fill(0).map((_, idx) => {
                return (
                  <option>{idx + 1}</option>
                )
              })
            }
          </styleD.SelectBox>
        </div>

        <styleD.InputWarpper>
          <div>전화번호</div>
          <styleD.InputDefault type='number' />
        </styleD.InputWarpper>
        <button type='submit' onClick={{postResiter}}>
          <Link to='/Login'>제출하기</Link>
        </button>
      </styleD.Wrapper>
    </div>
  )
}
