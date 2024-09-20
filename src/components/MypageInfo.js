import * as styleD from '../styles/Mypage';
import Navbar from './Navbar';
import Line from './Line';
import { Link } from "react-router-dom";

export default function MypageStorage() {
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
          <Link to='/MypageStorage'style={{textDecoration: 'none', color: '#b3b3b3'}}>보관함</Link>
          </styleD.MypageHeaderBtn>
          <styleD.MypageHeaderBtn style={{color: 'black'}}>계정 정보</styleD.MypageHeaderBtn>
        </styleD.MypageHeader>

        <styleD.MypageStatus>
          <p>프론트황제 김한서님, 반가워요!</p>
          <p style={{ textDecoration: 'underline' }}>로그아웃</p>
        </styleD.MypageStatus>

        <div style={{marginTop: '30px'}}>
            <styleD.ActStorageText>계정 정보</styleD.ActStorageText>

            <styleD.UserInfoContainer>
                <p style={{color: '#666666', width: '100px'}}>아이디(메일)</p>
                <styleD.UserInfo>kim_han_seo@legendKingSuper.AlphaMail</styleD.UserInfo>
            </styleD.UserInfoContainer>
            <hr style={{ color: '#666666', marginTop: '5px' }} />

            <styleD.UserInfoContainer>
                <p style={{color: '#666666', width: '100px'}}>닉네임</p>
                <styleD.UserInfo>발로란트의신그건바로나김한서!!</styleD.UserInfo>
                <styleD.UserInfoUpdate>수정</styleD.UserInfoUpdate>
            </styleD.UserInfoContainer>
            <hr style={{ color: '#666666', marginTop: '5px' }} />

            <styleD.UserInfoContainer>
                <p style={{color: '#666666', width: '100px'}}>전화번호</p>
                <styleD.UserInfo>+82 10 1234 5678</styleD.UserInfo>
                <styleD.UserInfoUpdate>수정</styleD.UserInfoUpdate>
            </styleD.UserInfoContainer>
            <hr style={{ color: '#666666', marginTop: '5px' }} />

            <styleD.UserInfoContainer>
                <p style={{color: '#666666', width: '100px'}}>비밀번호</p>
                <styleD.PasswordUpdateBtn>변경하기</styleD.PasswordUpdateBtn>
            </styleD.UserInfoContainer>
            <hr style={{ color: '#666666', marginTop: '5px' }} />
        </div>

        <hr style={{height: '5px', backgroundColor: '#D2AC10', marginTop: '60px' }} />
        
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
        </div>
        
      </styleD.MypageContainer>
    </div>
  );
}

