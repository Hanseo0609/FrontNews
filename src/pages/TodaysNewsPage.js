import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Line from '../components/Line';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import * as styleD from '../styles/TodaysNewsPage';
import { useEffect} from 'react';
import axios from 'axios';
import parse from 'html-react-parser';

export default function TodaysNewsPage() {
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const [loading, setLoading] = useState(true); // 데이터 로딩 상태
  const [newArray, setNewArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const newsPerPage = 10; // 한 페이지에 표시할 뉴스 개수

  const todaysnewsPreviewLoad = async () => {
    try {
      const res1 = await axios.get(`${serverURL}/news/getNewsList/normal/1/30`);
      if (res1.data.status === 200) {
        const newArticles = res1.data.data.news;
        console.log(res1.data.data.total);
        // 중복 제거 후 배열 상태에 추가
        setNewArray((prevArray) => {
          const uniqueArticles = newArticles.filter(newArticle =>
            !prevArray.some(article => article.article_id === newArticle.article_id)
          );
          return [...prevArray, ...uniqueArticles];
        });
      } else {
        alert("뉴스 데이터 로딩 실패");
      }
    } catch (error) {
      console.error(error);
      alert("서버 오류임");
    }
  };

  const loadArrayNews = async () => {
    await todaysnewsPreviewLoad();
    setLoading(false);
  };

  useEffect(() => {
    loadArrayNews();
  }, []);

  // 현재 페이지에 표시할 데이터 계산
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = newArray.slice(indexOfFirstNews, indexOfLastNews);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(newArray.length / newsPerPage);

  // 페이지 변경 함수
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // 페이지 변경 시 스크롤을 맨 위로
  };

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
          <>
            <styleD.NewsBoxContainer>
              {currentNews.map((newsData, index) => (
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
              ))}
            </styleD.NewsBoxContainer>

            {/* 페이지네이션 */}
            <styleD.Pagination>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={index + 1 === currentPage ? 'active' : ''}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </styleD.Pagination>
          </>
        )}
      </styleD.NewsContainer>
    </div>
  );
}
