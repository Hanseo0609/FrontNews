import * as styleD from './styles/Navbar';

export default function Navbar() {
  return (
    <styleD.Navbar>
    <styleD.LogoImg src='./source/Logo.png' />
    <styleD.Profile>
      <styleD.ProfileImg src='./source/Shape.png' />
      <div style={{marginLeft: '15px'}}>
        <p>COIN님</p>
        <p>asd@coin.com</p>
      </div>
      <styleD.LogoutImg src='./source/Logout.png' />
    </styleD.Profile>
  </styleD.Navbar>
  )
}