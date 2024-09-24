import { Link } from 'react-router-dom';
import * as styleD from '../styles/NewsPreview';

export default function TodayNewsPreview() {
  return (
    <div>
      <Link to='/TodayNewsPage' style={{textDecoration: 'none', color: 'black'}}>
        <styleD.MainContentText>오늘의 뉴스</styleD.MainContentText>
      </Link>
      <styleD.MainContentBox style={{ height: '680px' }}>
        <styleD.TodayNewsContainer style={{ marginTop: '50px' }}>
          <styleD.NewsImg />
          <div style={{ margin: '0px 0px 60px 30px' }}>
            <p style={{ fontWeight: 'bold' }}>제목</p>
            <p className='todayNewsContent'>내용</p>
            <styleD.SeeMoreBtn>자세히</styleD.SeeMoreBtn>
          </div>
        </styleD.TodayNewsContainer>
        <styleD.TodayNewsContainer style={{ marginTop: '250px' }}>
          <styleD.NewsImg />
          <div style={{ margin: '0px 0px 60px 30px' }}>
            <p style={{ fontWeight: 'bold' }}>제목</p>
            <p className='todayNewsContent'>내용</p>
            <styleD.SeeMoreBtn>자세히</styleD.SeeMoreBtn>
          </div>
        </styleD.TodayNewsContainer>
        <styleD.TodayNewsContainer style={{ marginTop: '450px' }}>
          <styleD.NewsImg />
          <div style={{ margin: '0px 0px 60px 30px' }}>
            <p style={{ fontWeight: 'bold' }}>제목</p>
            <p className='todayNewsContent'>내용</p>
            <styleD.SeeMoreBtn>자세히</styleD.SeeMoreBtn>
          </div>
        </styleD.TodayNewsContainer>
      </styleD.MainContentBox>
      <hr style={{ margin: "100px 0px 0px 0px", width: "auto" }}></hr>
    </div>
  )
}


