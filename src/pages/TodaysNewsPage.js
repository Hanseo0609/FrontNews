import { Link } from 'react-router-dom';
import Line from '../components/Line';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import * as styleD from '../styles/TodaysNewsPage';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import parse from 'html-react-parser'
export default function TodaysNewsPage() {

  const serverURL = process.env.REACT_APP_SERVER_URL;

  const [loading, setLoading] = useState(true); // 데이터 로딩 상태


  const [newsId, setNewsId] = useState(53);
  const [newArray, setNewArray] = useState([]);
  const [newsData, setNewsData] = useState({
    article_title: '기사 제목',
    article_createat: '2024-05-01',
    article_content: '기사 본문',
    article_id: 16,
    article_image: 'image.png'
  });

  const todaysnewsPreviewLoad = async () => {
    try {
      const res1 = await axios.get(`${serverURL}/news/getNewsList/normal/1/10`);
      if (res1.data.status === 200) {
        console.log(res1.data.data.news);
        const newArticles = res1.data.data.news;
  
        // 배열 전체를 상태에 추가
        setNewArray((prevArray) => {
          const uniqueArticles = newArticles.filter(newArticle =>
            !prevArray.some(article => article.article_id === newArticle.article_id)
          );
          return [...prevArray, ...uniqueArticles];
        });
        
        // 첫 번째 뉴스 데이터 설정
        setNewsData(newArticles[0] || newsData);  // 첫 번째 기사나 기본 데이터를 설정
        
      } else {
        alert("뉴스 데이터 로딩 실패");
      }
    } catch (error) {
      console.error(error);
      alert("서버 오류임");
    }
  };

  // const loadArrayNews = async () => {
  //   for (let i = 0; i < 10; i++) {
  //     const newId = newsId + i;
  //     await todaysnewsPreviewLoad(newId);
  //   }
  //   setLoading(false);
  // }

  const loadArrayNews = async () => {
    await todaysnewsPreviewLoad();
    setLoading(false);
  }

  useEffect(() => {
    loadArrayNews();
  }, []);

  return (
    <div>
      <Navbar />
      <Line />
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

        {loading ? (
          <p>데이터를 불러오는 중입니다...</p>
        ) : (
          <styleD.NewsBoxContainer>
          {
            newArray.map((newsData, index) => (
              <Link to={`/NewsView?id=${newsData.article_id}`} key={index} style={{ textDecoration: 'none', color: 'black' }}>
                <styleD.NewsBox>
                  <styleD.NewsImg>
                    <img src={newsData.article_image} alt='' />
                  </styleD.NewsImg>
                  <div>
                    <styleD.ArticleTitle>
                      <p style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', textDecoration: 'none' }}>
                        {parse(newsData.article_title)}
                      </p>
                    </styleD.ArticleTitle>
                    <styleD.ArticalContent>
                      <p style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', height: '200px' }}>
                        {newsData.article_content}
                      </p>
                    </styleD.ArticalContent>
                  </div>
                </styleD.NewsBox>
              </Link>
            ))
          }
        </styleD.NewsBoxContainer>
          
        )}

      </styleD.NewsContainer>
    </div>
  );
}