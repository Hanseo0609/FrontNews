import * as styleD from '../styles/Navbar';
import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <styleD.Navbar>
      <Link to="/">
        <styleD.LogoImg src='./source/Logo.png' />
      </Link>
      
      <p>로그인</p>
      <p>회원가입</p>
    </styleD.Navbar>
  )
}