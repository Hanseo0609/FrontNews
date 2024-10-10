import * as styleD from '../styles/Mypage';
import Navbar from '../components/Navbar';
import Line from '../components/Line';
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

export default function MypageSInfo() {

  const serverURL = process.env.REACT_APP_SERVER_URL;

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

  // 닉네임 변경
  const handleNicknameSave = async () => {
    try {
      const access_token = localStorage.getItem('accessToken');

      const response = await axios.put(`${serverURL}/users/changeinfo`, {
        status: 100,
        data: nickname
      }, {
        headers: { Authorization: `Bearer ${access_token}` }
      });
      if (response.data['status'] === 200) {
        alert("닉네임 변경 성공");
        localStorage.setItem("nickname", nickname);
        setEditingNickname(false);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log('액세스 토큰 만료');
        await handleTokenReissueNicknameSave();
      } else {
        console.log(error);
        alert('닉네임 변경 실패');
        setEditingNickname(false);
      }
    }
  };

  async function handleTokenReissueNicknameSave() {
    try {
      const refresh_token = localStorage.getItem('refreshToken');

      if (!refresh_token) {
        throw new Error('리프레쉬 토큰 없음');
      }

      const response = await axios.post(`${serverURL}/users/reissue`, {}, {
        headers: { Authorization: `Bearer ${refresh_token}` }
      });
      console.log(response);
      if (response['data']['status'] === 201) {
        localStorage.setItem('accessToken', response.data['access_token']);
        console.log('액세스 토큰 발급 성공');
        await handleNicknameSave(); // 토큰 갱신 후 댓글 다시 작성 시도
      }
    } catch (error) {
      console.log(error);
      alert('토큰 갱신 실패로 댓글 작성 실패');
    }
  }

  const handlePhoneNumberSave = async () => {
    try {
      const access_token = localStorage.getItem('accessToken');

      const response = await axios.put(`${serverURL}/users/changeinfo`, {
        status: 200,
        data: phoneNumber
      }, {
        headers: { Authorization: `Bearer ${access_token}` }
      });
      if (response.data['status'] === 200) {
        alert("전화번호 변경 성공");
        localStorage.setItem("phoneNumber", phoneNumber);
        setEditingPhoneNumber(false);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log('액세스 토큰 만료');
        await handleTokenReissuePhoneNumberSave();
      } else {
        console.log(error);
        alert('전화번호 변경 실패');
        setEditingPhoneNumber(false);
      }
    }
  };

  async function handleTokenReissuePhoneNumberSave() {
    try {
      const refresh_token = localStorage.getItem('refreshToken');
  
      if (!refresh_token) {
        throw new Error('리프레쉬 토큰 없음');
      }
  
      const response = await axios.post(`${serverURL}/users/reissue`, {}, {
        headers: { Authorization: `Bearer ${refresh_token}` }
      });
      console.log(response);
      if (response['data']['status'] === 201) {
        localStorage.setItem('accessToken', response.data['access_token']);
        console.log('액세스 토큰 발급 성공');
        await handlePhoneNumberSave(); // 토큰 갱신 후 댓글 다시 작성 시도
      }
    } catch (error) {
      console.log(error);
      alert('토큰 갱신 실패로 댓글 작성 실패');
    }
  }
  
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
            <Link to='/MypageStoragePage' style={{ textDecoration: 'none', color: '#b3b3b3' }}>보관함</Link>
          </styleD.MypageHeaderBtn>
          <styleD.MypageHeaderBtn style={{ color: 'black' }}>계정 정보</styleD.MypageHeaderBtn>
        </styleD.MypageHeader>
  
        <styleD.MypageStatus>
          <p>{localStorage.getItem('nickname')}님, 반가워요!</p>
        </styleD.MypageStatus>
  
        <div style={{ marginTop: '30px' }}>
          <styleD.ActStorageText>계정 정보</styleD.ActStorageText>
  
          <styleD.UserInfoContainer>
            <p style={{ color: '#666666', width: '100px' }}>아이디(메일)</p>
            <styleD.UserInfo>{userEmail}</styleD.UserInfo>
          </styleD.UserInfoContainer>
          <hr style={{ color: '#666666', marginTop: '5px' }} />
  
          <styleD.UserInfoContainer>
            <p style={{ color: '#666666', width: '100px' }}>닉네임</p>
            {EditingNickname ? (
              <>
                <styleD.EditMyInfoInput type="text" value={nickname} onChange={handleNicknameChange} />
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
            <p style={{ color: '#666666', width: '100px' }}>전화번호</p>
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
            <p style={{ color: '#666666', width: '100px' }}>비밀번호</p>
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
};

