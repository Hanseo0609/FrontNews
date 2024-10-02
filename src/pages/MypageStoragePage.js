import * as styleD from '../styles/Mypage';
import Navbar from '../components/Navbar';
import Line from '../components/Line';
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
          <styleD.MypageHeaderBtn style={{color: 'black'}}>보관함</styleD.MypageHeaderBtn>
          <styleD.MypageHeaderBtn>
            <Link to='/MypageInfoPage'style={{textDecoration: 'none', color: '#b3b3b3'}}>계정 정보</Link>
          </styleD.MypageHeaderBtn>
        </styleD.MypageHeader>

        <styleD.MypageStatus>
          <p>프론트황제 김한서님, 반가워요!</p>
          <p style={{ textDecoration: 'underline' }}>로그아웃</p>
        </styleD.MypageStatus>

        <styleD.RecommendContainer>
          <styleD.RecommendFirstBox>
            <p style={{ color: '#666666', fontSize: '20px', marginTop: '10px'}}>
              AI가 추천해주는 오늘의 기사를 만나보세요.</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '25px'}}>
              <p style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '0px'}}>
                오늘 나에게 맞춰 추천된 기사  150건</p>
              <styleD.PreferenceBtn>선호도 설정하러 가기</styleD.PreferenceBtn>
            </div>
          </styleD.RecommendFirstBox>
          <styleD.RecommendSecondBox>

          </styleD.RecommendSecondBox>
        </styleD.RecommendContainer>

        <styleD.MypageActivityContainer>
          <styleD.MypageActStorage>
            <hr style={{ marginTop: '50px', height: '5px', backgroundColor: '#D2AC10' }} />
            <styleD.ActStorageText>나의 활동 보관함</styleD.ActStorageText>
            <Line style={{color: '#666666'}}></Line>

            <styleD.MypageActStorageDetail>
              <styleD.MypageActStorageDetails>
                <p style={{width: '120px'}}>최근 본 기사</p>
                <styleD.MypageActDetailsBtn style={{ backgroundColor: '#BBBBBB', borderRadius: '30px', width: '100px', height: '30px', color: 'white', border: 'none', marginLeft: '230px', fontSize: '20px' }}>0</styleD.MypageActDetailsBtn>
              </styleD.MypageActStorageDetails>

              <styleD.MypageActStorageDetails style={{marginLeft: '45px'}}>
                <p style={{width: '120px'}}>구독한 언론사</p>
                <styleD.MypageActDetailsBtn>0</styleD.MypageActDetailsBtn>
              </styleD.MypageActStorageDetails>
            </styleD.MypageActStorageDetail>

            <hr style={{ color: '#666666', marginTop: '15px' }} />

            <styleD.MypageActStorageDetail>
              <styleD.MypageActStorageDetails>
                <p style={{width: '120px'}}>댓글단 기사</p>
                <styleD.MypageActDetailsBtn>0</styleD.MypageActDetailsBtn>
              </styleD.MypageActStorageDetails>

              <styleD.MypageActStorageDetails style={{marginLeft: '45px'}}>
                <p style={{width: '120px'}}>스크랩한 기사</p>
                <styleD.MypageActDetailsBtn>0</styleD.MypageActDetailsBtn>
              </styleD.MypageActStorageDetails>
            </styleD.MypageActStorageDetail>

            <hr style={{ color: '#666666', marginTop: '15px' }} />
          </styleD.MypageActStorage>

          <styleD.MypageActComment>
            <hr style={{ marginTop: '50px', height: '5px', backgroundColor: '#D2AC10' }} />
            <styleD.ActStorageText>최근 단 댓글</styleD.ActStorageText>
          </styleD.MypageActComment>
        </styleD.MypageActivityContainer>

        <hr style={{height: '5px', backgroundColor: '#D2AC10' }} />
        
        <div>
          <styleD.ActStorageText>키워드 관리</styleD.ActStorageText>

          <styleD.MypageKeywordContainer>
            정치 <styleD.MypageKeywordCheckbox type="checkbox"/>
            경제 <styleD.MypageKeywordCheckbox type="checkbox"/>
            사회 <styleD.MypageKeywordCheckbox type="checkbox"/>
            과학 <styleD.MypageKeywordCheckbox type="checkbox"/>
            연예 <styleD.MypageKeywordCheckbox type="checkbox"/>
            스포츠 <styleD.MypageKeywordCheckbox type="checkbox"/>
          </styleD.MypageKeywordContainer>

        </div>
      </styleD.MypageContainer>
    </div>
  );
}

