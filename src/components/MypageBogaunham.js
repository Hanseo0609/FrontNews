import * as styleD from '../styles/MypageStyled';

export default function MypageBogaungam() {
  return (
    <div>

      <div>
        <styleD.Logo>
          <styleD.LogoSize src='image\logo.png'/>
        </styleD.Logo>
      </div>

      <hr/>

      <styleD.Content>
        <styleD.TopContent>
          <h1>마이페이지</h1>
          <styleD.TopText>보관함</styleD.TopText>
          <styleD.TopText>계정 정보</styleD.TopText>
          <styleD.TopText>선호 뉴스 관리</styleD.TopText>
        </styleD.TopContent>

        <styleD.Box>
          <p style={{color: '#ffffff', paddingLeft: '15px'}}>프론트황제 김한서님, 반가워요!!</p>
          <div style={{color: '#ffffff', paddingRight: '15px'}}>로그아웃</div>
        </styleD.Box>

        <div style={{display: 'flex'}}>

          <div style={{border: '1px solid',  marginTop: '20px', height: '150px', width: '900px', borderRight: 'none', justifyContent: 'space-between'}}>
            <p style={{paddingLeft: '15px', color: '#666666'}}>AI가 추천해주는 오늘의 기사를 만나보세요.</p>
            <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: '35px'}}>
              <p style={{paddingLeft: '15px', fontWeight:'bold'}}>오늘 나에게 맞춰 추천된 기사  150건</p>
              <styleD.preferenceBtn>선호도 설정하러 가기</styleD.preferenceBtn>
            </div>
          </div>

          <div style={{border: '1px solid', marginTop: '20px',height: '150px', width: '700px'}}>

          </div>
        </div>

        <div style={{display: 'flex'}}>
            <div style={{width: '850px', height: '300px'}}>
                <hr style={{marginTop: '50px', height: '5px', backgroundColor: '#D2AC10'}}/>
                <h3 style={{color: '#D2AC10'}}>나의 활동 보관함</h3>
                <hr style={{color: '#666666'}}/>

                <div style={{display: 'flex'}}>
                    <div style={{width: '450px', height: '40px', marginTop: '15px', marginRight: '10px', color: '#666666', borderRight: '1px solid', alignItems: 'center'}}>
                        최근 본 기사
                        <button style={{backgroundColor: '#BBBBBB', borderRadius: '30px', width: '100px', height: '30px', color: 'white', border: 'none', marginLeft: '300px', fontSize: '20px'}}>0</button>
                    </div>

                    <div style={{width: '450px', height: '25px', marginTop: '15px', marginRight: '10px', color: '#666666'}}>
                        구독한 언론사
                        <button style={{backgroundColor: '#BBBBBB', borderRadius: '30px', width: '100px', height: '30px', color: 'white', border: 'none', marginLeft: '230px', fontSize: '20px'}}>0</button>
                    </div>
                </div>

                <hr style={{color: '#666666', marginTop: '15px'}}/>

                <div style={{display: 'flex'}}>
                    <div style={{width: '450px', height: '40px', marginTop: '15px', marginRight: '10px', color: '#666666', borderRight: '1px solid', alignItems: 'center'}}>
                        댓글단 기사
                        <button style={{backgroundColor: '#BBBBBB', borderRadius: '30px', width: '100px', height: '30px', color: 'white', border: 'none', marginLeft: '230px', fontSize: '20px'}}>0</button>
                    </div>

                    <div style={{width: '450px', height: '25px', marginTop: '15px', marginRight: '10px', color: '#666666'}}>
                        스크랩한 기사
                        <button style={{backgroundColor: '#BBBBBB', borderRadius: '30px', width: '100px', height: '30px', color: 'white', border: 'none', marginLeft: '230px', fontSize: '20px'}}>0</button>
                    </div>
                </div>

                <hr style={{color: '#666666', marginTop: '15px'}}/>

            </div>
            <div style={{width: '700px', height: '300px', marginLeft: '20px'}}>
                <hr style={{marginTop: '50px', height: '5px', backgroundColor: '#D2AC10'}}/>
                <h3 style={{color: '#D2AC10'}}>최근 단 댓글</h3>

            </div>
        </div>
       
      </styleD.Content>

    </div>
  );
}

