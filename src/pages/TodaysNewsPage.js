import { Link } from 'react-router-dom';
import Line from '../components/Line';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import * as styleD from '../styles/TodaysNewsPage';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

export default function TodaysNewsPage() {

  const serverURL = process.env.REACT_APP_SERVER_URL;
  const [news, setNews] = useState([]);

  const { news_id } = useParams();
  const [newsData, setNewsData] = useState({
    article_title: '',
    article_createat: '',
    article_content: '',
    article_id: NaN,
    article_image: ''
  });

  async function todaysnewsPreviewLoad  () {
    try {
      const response = await axios.get(`${serverURL}/news/getNews/21`);
      if (response.data.status === 200) {
        setNewsData(response.data['data']['news']);
        console.log(response.data['data']["news"]);
      } else {
        alert("뉴스 데이터 로딩 실패");
      }
    } catch (error) {
      console.error(error);
      alert("서버 오류임");
    }
  };

  useEffect(() => {
    todaysnewsPreviewLoad();
  }, []);

  return (
    <div>
      <Navbar />
      <Line/>
      <Header />
      <Line />
      <styleD.NewsContainer>
        <styleD.TodaysNewsContainer>
            <p className='selected'>오늘의 뉴스</p>
        </styleD.TodaysNewsContainer>
        <styleD.NewsCategoryContainer>
            <p className='selected'>전체</p>
            <p>정치</p>
            <p>경제</p>
						<p>사회</p>
						<p>과학</p>
						<p>연예</p>
						<p>스포츠</p>
        </styleD.NewsCategoryContainer>
        <Link to="/NewsView" style={{textDecoration: 'none', color: 'black'}}>
        <styleD.NewsBoxContainer>
            {
                Array(10).fill(0).map((_, index) => (
                    <styleD.NewsBox key={index}>
											<styleD.NewsImg>
                      	<img src={newsData.article_image} alt=''/>
											</styleD.NewsImg>
                      <div>
                        <styleD.ArticleTitle ><p style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', textDecoration:'none'}}>{newsData.article_title}</p></styleD.ArticleTitle>
                        <styleD.ArticalContent><p style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow:'ellipsis', height:'200px'}}>{newsData.article_content}</p></styleD.ArticalContent>
                      </div>
                    </styleD.NewsBox>
                ))
            }
        </styleD.NewsBoxContainer>
        </Link>
      </styleD.NewsContainer>
    </div>
  );
}
