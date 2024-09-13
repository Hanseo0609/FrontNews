import * as styleD from '../styles/NewsPreview';

export default function NewsPreview() {
  return (
    <styleD.MainContentWrap>
      <styleD.MainContentText>뉴스 요약</styleD.MainContentText>
      <styleD.MainContentBox style={{ height: '500px' }}>
        <p className='keyword'>키워드</p>
        <div className='keyword-container'>
          <styleD.KeywordBtn>IT</styleD.KeywordBtn>
          <styleD.KeywordBtn>정치</styleD.KeywordBtn>
          <styleD.KeywordBtn>스포츠</styleD.KeywordBtn>
          <styleD.KeywordBtn>경제</styleD.KeywordBtn>
        </div>
        <div className='todayNewsContainer'>
          <styleD.NewsImg style={{ width: '420px', height: '320px' }} />
          <div>
            <p className='todayNewsTitle'>으악</p>
            <p className='todayNewsContent'>안녕하세요</p>
          </div>
        </div>
      </styleD.MainContentBox>
      <hr style={{ margin: "100px 0px 0px 0px" }}></hr>
    </styleD.MainContentWrap>
  )
}


