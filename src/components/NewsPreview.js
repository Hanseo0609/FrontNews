import * as styleD from '../styles/NewsPreview';

export default function NewsPreview() {
  return (
    <styleD.MainContentWrap>
      <styleD.MainContentText>뉴스 요약</styleD.MainContentText>
      <styleD.MainContentBox style={{ height: '540px', display: 'flex'}}>
        <div>
          <p style={{ fontWeight: 'bold', fontSize: '24px', margin: '10px 0px 0px 0px', padding: '15px 0px 10px 15px' }}>키워드</p>
          <div style={{ display: 'flex', paddingLeft: '15px' }}>
            <styleD.KeywordBtn>IT</styleD.KeywordBtn>
            <styleD.KeywordBtn>정치</styleD.KeywordBtn>
            <styleD.KeywordBtn>스포츠</styleD.KeywordBtn>
            <styleD.KeywordBtn>경제</styleD.KeywordBtn>
          </div>
        </div>

        <div style={{display: 'flex', marginTop: '110px'}}>
          <styleD.NewsImg style={{ width: '420px', height: '320px' }} />
          <div style={{marginLeft: '30px'}}>
            <p className='todayNewsTitle'>으악</p>
            <p className='todayNewsContent'>안녕하세요</p>
          </div>
        </div>
      </styleD.MainContentBox>
      <hr style={{ margin: "100px 0px 0px 0px" }}></hr>
    </styleD.MainContentWrap>
  )
}


