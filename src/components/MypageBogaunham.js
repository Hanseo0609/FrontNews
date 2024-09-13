import * as sd from './styles/MypageStyled.js';


function mypageBogaungam() {
  return (
    <div>

      <div>
        <sd.Logo>
          <sd.LogoSize src='image\logo.png'/>
        </sd.Logo>
      </div>

      <hr/>

      <sd.Content>
        <sd.TopContent>
          <h1>마이페이지</h1>
          <sd.TopText>보관함</sd.TopText>
          <sd.TopText>계정 정보</sd.TopText>
          <sd.TopText>선호 뉴스 관리</sd.TopText>
        </sd.TopContent>

        <sd.Box>
          <p style={{color: '#ffffff', paddingLeft: '15px'}}>프론트황제 김한서님, 반가워요!!</p>
          <div style={{color: '#ffffff', paddingRight: '15px'}}>로그아웃</div>
        </sd.Box>

        <div style={{display: 'flex'}}>

          <div style={{border: '1px solid',  marginTop: '20px', height: '150px', width: '700px', borderRight: 'none', justifyContent: 'space-between'}}>
            <p style={{paddingLeft: '15px', color: '#666666'}}>AI가 추천해주는 오늘의 기사를 만나보세요.</p>
            <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: '35px'}}>
              <p style={{paddingLeft: '15px', fontWeight:'bold'}}>오늘 나에게 맞춰 추천된 기사  150건</p>
              <sd.preferenceBtn>선호도 설정하러 가기</sd.preferenceBtn>
            </div>
          </div>

          <div style={{border: '1px solid', marginTop: '20px',height: '150px', width: '500px'}}>

          </div>
        </div>

        <hr style={{marginTop: '50px'}}/>
       
      </sd.Content>

    </div>
  );
}

