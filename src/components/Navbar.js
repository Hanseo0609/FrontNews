import * as styleD from '../styles/Navbar';
import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <styleD.Navbar>
      <Link to="/">
        <styleD.LogoImg src='./source/Logo.png' />
      </Link>
      <styleD.Profile>
        <Link to="/MypageStorage"><styleD.ProfileImg src='./source/Shape.png' /></Link>
        <div style={{ marginLeft: '15px' }}>
          <p>COIN님</p>
          <p>asd@coin.com</p>
        </div>
        <styleD.LogoutImg src='./source/Logout.png' />
      </styleD.Profile>
    </styleD.Navbar>
  )
}