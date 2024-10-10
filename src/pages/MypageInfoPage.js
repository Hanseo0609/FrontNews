import * as styleD from '../styles/Mypage';
import Navbar from '../components/Navbar';
import Line from '../components/Line';
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function MypageSInfo() {

  const [nickname, setNickname] = useState(localStorage.getItem("nickname"));
  const userEmail = localStorage.getItem("userEmail");
  const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem("phoneNumber"));
  const [EditingNickname, setEditingNickname] = useState(false);
  const [EditingPhoneNumber, setEditingPhoneNumber] = useState(false);

  const handleNicknameEdit = () => {
    setEditingNickname(true);
  };

  const handlePhoneNumberEdit = () => {
    setEditingPhoneNumber(true);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleNicknameSave = () => {
    localStorage.setItem("nickname", nickname);
    setEditingNickname(false);
  };

  const handlePhoneNumberSave = () => {
    localStorage.setItem("phoneNumber", phoneNumber);
    setEditingPhoneNumber(false);
  };

  return (
    <div>
      <Navbar />
      <Line />

      <styleD.MypageContainer>
        <styleD.MypageHeader>
          <styleD.MypageHeaderBtn
            style={{ fontSize: '40px', margin: '0px', marginRight: '20px', color: 'black' }}>
            마이페이지
          </styleD.MypageHeaderBtn>
          <styleD.MypageHeaderBtn>
          <Link to='/MypageStoragePage'style={{textDecoration: 'none', color: '#b3b3b3'}}>보관함</Link>
          </styleD.MypageHeaderBtn>
          <styleD.MypageHeaderBtn style={{color: 'black'}}>계정 정보</styleD.MypageHeaderBtn>
        </styleD.MypageHeader>

        <styleD.MypageStatus>
          <p>{nickname}님, 반가워요!</p>
        </styleD.MypageStatus>

        <div style={{marginTop: '30px'}}>
            <styleD.ActStorageText>계정 정보</styleD.ActStorageText>

            <styleD.UserInfoContainer>
                <p style={{color: '#666666', width: '100px'}}>아이디(메일)</p>
                <styleD.UserInfo>{userEmail}</styleD.UserInfo>
            </styleD.UserInfoContainer>
            <hr style={{ color: '#666666', marginTop: '5px' }} />

            <styleD.UserInfoContainer>
                <p style={{color: '#666666', width: '100px'}}>닉네임</p>
                {EditingNickname ? (
                  <>
                    <styleD.EditMyInfoInput type="text" value={nickname} onChange={handleNicknameChange}  />
                    <styleD.EditMyNickSubmit onClick={handleNicknameSave}>저장</styleD.EditMyNickSubmit>
                  </>
                ) : (
                  <>
                    <styleD.UserInfo>{nickname}</styleD.UserInfo>
                    <styleD.UserInfoUpdate onClick={handleNicknameEdit}>수정</styleD.UserInfoUpdate>
                  </>
                )}
            </styleD.UserInfoContainer>
            <hr style={{ color: '#666666', marginTop: '5px' }} />

            <styleD.UserInfoContainer>
                <p style={{color: '#666666', width: '100px'}}>전화번호</p>
                {EditingPhoneNumber ? (
                  <>
                    <styleD.EditMyInfoInput type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
                    <styleD.EditMyNickSubmit onClick={handlePhoneNumberSave}>저장</styleD.EditMyNickSubmit>
                  </>
                ) : (
                  <>
                    <styleD.UserInfo>{phoneNumber}</styleD.UserInfo>
                    <styleD.UserInfoUpdate onClick={handlePhoneNumberEdit}>수정</styleD.UserInfoUpdate>
                  </>
                )}
            </styleD.UserInfoContainer>
            <hr style={{ color: '#666666', marginTop: '5px' }} />
            
            <styleD.UserInfoContainer>
                <p style={{color: '#666666', width: '100px'}}>비밀번호</p>
                <Link to="/FindMyPasswordPage">
                <styleD.PasswordUpdateBtn>변경하기</styleD.PasswordUpdateBtn>
                </Link>
            </styleD.UserInfoContainer>
            <hr style={{ color: '#666666', marginTop: '5px' }} />
        </div>

        {/* <hr style={{height: '5px', backgroundColor: '#D2AC10', marginTop: '60px' }} />
        
        <div>
          <styleD.ActStorageText>뉴스레터 약관</styleD.ActStorageText>
          <div style={{display: 'flex'}}>
            <styleD.Newsletter>뉴스레터 수신 동의</styleD.Newsletter>
            <styleD.MypageKeywordCheckbox type="checkbox" style={{marginTop: '17px'}}/>
          </div>
          
          <div style={{display: 'flex'}}>
            <styleD.Newsletter>프로모션 수신 동의</styleD.Newsletter>
            <styleD.MypageKeywordCheckbox type="checkbox" style={{marginTop: '17px'}}/>
          </div>

          <div style={{display: 'flex'}}>
            <styleD.Newsletter>개인정보 3자 제공</styleD.Newsletter>
            <styleD.MypageKeywordCheckbox type="checkbox" style={{marginTop: '17px'}}/>
          </div>
        </div> */}
        
      </styleD.MypageContainer>
    </div>
  );
}

