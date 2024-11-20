import { Link } from 'react-router-dom';
import * as styleD from '../styles/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';
import parse from 'html-react-parser'

export default function Header() {
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const [hotArticle, setHotArticle] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  async function currentArticle() {
    try {
      const response = await axios.get(`${serverURL}/news/highestViews`);
      if (response.data['status'] === 200) {
        console.log(response.data);

        const articles = response.data.data;
        setHotArticle(articles.map(article => {
          let title = article['article_title'];
          if (title.length >= 16) {
            title = title.slice(0, 16) + "...";
          }
          return title;
        }));
        console.log(hotArticle)
      }
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    currentArticle();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % hotArticle.length);
    }, 5000); // 10초마다 업데이트

    return () => clearInterval(interval);
  }, [hotArticle]);


  return (
    <styleD.Header>
      <styleD.HeaderNews>
        <Link to='/TodaysNewsPage' style={{ textDecoration: 'none', color: 'black' }}>뉴스보기</Link>
      </styleD.HeaderNews>
      <styleD.HeaderCommunity>
        <Link to='/CommunityMainPage' style={{ textDecoration: 'none', color: 'black' }}>게시판</Link>
      </styleD.HeaderCommunity>
      <styleD.HeaderSearchWrapper>
        <styleD.HeaderSearch className='search-input' placeholder='키워드를 입력해 주세요' />
        <styleD.HeaderSearchBtn><img className='search-btn' src='./source/Icon.png' /></styleD.HeaderSearchBtn>
      </styleD.HeaderSearchWrapper>
      <styleD.HeaderRealTimeSearch>
        <p>
          {currentIndex + 1}.
          {hotArticle.length > 0 && hotArticle[currentIndex]
            ? parse(hotArticle[currentIndex])
            : 'Loading...'}
        </p>
      </styleD.HeaderRealTimeSearch>
    </styleD.Header>
  )
}