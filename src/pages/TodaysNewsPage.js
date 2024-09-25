import { Link } from 'react-router-dom';
import Line from '../components/Line';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import * as styleD from '../styles/TodaysNewsPage';

export default function TodaysNewsPage() {
  return (
    <div>
      <Navbar />
      <Line/>
      <Header />
      <Line />
      <styleD.NewsContainer>
        <styleD.TodaysNewsContainer>
            <p className='selected'>오늘의 뉴스</p>
            <p>주간 뉴스</p>
            <p>월간 뉴스</p>
        </styleD.TodaysNewsContainer>
        <styleD.NewsCategoryContainer>
            <p className='selected'>과학</p>
            <p>경제</p>
            <p>사회</p>
            <p>생활</p>
            <p>세계</p>
            <p>스포츠</p>
            <p>문화</p>
            <p>IT</p>
            <p>연예</p>
            <p>정치</p>
        </styleD.NewsCategoryContainer>
        <styleD.NewsBoxContainer>
            {
                Array(10).fill(0).map((_, index) => (
                    <styleD.NewsBox key={index}>
											<styleD.NewsImg>
                      	<img src='https://picsum.photos/100/100' alt=''/>
											</styleD.NewsImg>
                      <div>
                        <styleD.NewsTitle>제목</styleD.NewsTitle>
                        <styleD.NewsContent>본문</styleD.NewsContent>
                      </div>
                    </styleD.NewsBox>
                ))
            }
        </styleD.NewsBoxContainer>
      </styleD.NewsContainer>
    </div>
  );
}
