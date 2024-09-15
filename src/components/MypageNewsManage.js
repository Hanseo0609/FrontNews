import * as styleD from '../styles/Mypage';
import Navbar from './Navbar';
import Line from './Line';

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
          <styleD.MypageHeaderBtn>보관함</styleD.MypageHeaderBtn>
          <styleD.MypageHeaderBtn>계정 정보</styleD.MypageHeaderBtn>
          <styleD.MypageHeaderBtn style={{color: 'black'}}>선호 뉴스 관리</styleD.MypageHeaderBtn>
        </styleD.MypageHeader>

        <styleD.MypageStatus>
          <p>프론트황제 김한서님, 반가워요!</p>
          <p style={{ textDecoration: 'underline' }}>로그아웃</p>
        </styleD.MypageStatus>

        <div style={{marginTop: '30px'}}>
            <styleD.ActStorageText>내가 구독한 언론사</styleD.ActStorageText>

        </div>
        
      </styleD.MypageContainer>
    </div>
  );
}

