import * as styleD from '../styles/Navbar';
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Navbar() {
  const [status, setStatus] = useState("200");

  return (
    <styleD.Navbar>
      <Link to="/">
        <styleD.LogoImg src='./source/Logo.png' />
      </Link>
      <IsLogin status={status} setStatus={setStatus} />
    </styleD.Navbar>
  )
}

function IsLogin({ status, setStatus }) {
  return (
    <div>
      {status === "200" ? (<YesLogin setStatus={setStatus} />) : (<NoLogin />)}
    </div>
  )
}

function YesLogin({ setStatus }) {
  const handleLogout = () => {
    setStatus("400");
  };

  return (
    <styleD.Profile>
      <Link to="/MypageStorage"><styleD.ProfileImg src='./source/Shape.png' /></Link>
      <div style={{ marginLeft: '15px' }}>
        <p>COIN님</p>
        <p>asd@coin.com</p>
      </div>
      <styleD.LogoutImg src='./source/Logout.png' onClick={handleLogout} />
    </styleD.Profile>
  )
}

function NoLogin() {
  return (
    <div style={{ marginLeft: '1520px', marginTop: '50px' }}>
      <Link to='/Login'>로그인 </Link>
      <Link to='/Register'>회원가입</Link>
    </div>
  )
}
