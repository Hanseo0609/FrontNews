import * as styleD from '../styles/Navbar';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Navbar(props) {

  //닉네임 가져오기
  const nickname = localStorage.getItem("nickname");
  //아이디 가져오기
  const userEmail = localStorage.getItem("userEmail");
  //리프레쉬 토큰 가져오기
  const refreshToken = localStorage.getItem("refreshToken");

  // console.log(props.status);
  const [status, setStatus] = useState(props.status ? props.status : "200");

  useEffect(() => {
    if (refreshToken) {
      setStatus("200");
    } else {
      setStatus("400");
    }
  }, [refreshToken]);

  function IsLogin({ status, setStatus }) {
    return (
      <div>
         {status === "200" ? <YesLogin setStatus={setStatus} /> : <NoLogin />}
      </div>
    )
  }

  function NoLogin() {
    return (
      <div style={{ marginLeft: '1520px', marginTop: '50px' }}>
        <Link to='/LoginPage'>로그인 </Link>
        <Link to='/RegisterPage'>회원가입</Link>
      </div>
    )
  }
  
  function YesLogin({ setStatus }) {
    const handleLogout = () => {
      // localStorage.removeItem('accessToken');
      // localStorage.removeItem('nickname');
      // localStorage.removeItem('userEmail');
      // localStorage.removeItem('phoneNumber');
      alert("로그아웃 되었습니다.");
      localStorage.clear();
      setStatus("400");
      window.location.href = '/';
    };
    return (
      <styleD.Profile>
        <Link style={{ width: '45px', marginRight: '1450px' }} to="/MypageStoragePage"><styleD.ProfileImg src='/source/Shape.png' /></Link>
        <div style={{ marginLeft: '15px' }}>
          <p>{nickname}님</p>
          <p>{userEmail}</p>
        </div>
        <styleD.LogoutImg src='/source/Logout.png' onClick={handleLogout} />
      </styleD.Profile>
    )
  }

  return (
    <styleD.Navbar>
      <Link to="/">
        <styleD.LogoImg src='/source/Logo.png' />
      </Link>
      <IsLogin status={status} setStatus={setStatus} />
    </styleD.Navbar>
  )
}


