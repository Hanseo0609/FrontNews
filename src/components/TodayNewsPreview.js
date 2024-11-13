import { Link } from 'react-router-dom';
import * as styleD from '../styles/NewsPreview';
import Popup from './PopNews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import parse from 'html-react-parser'

export default function TodayNewsPreview() {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  
  const { news_id } = useParams();
  const [newsId, setNewsId] = useState(16);
  const [newArray, setNewArray] = useState([]);

  const [popup, setPopup] = useState([false, false, false]);
  const [newsData, setNewsData] = useState({
    article_title: '기사 제목',
    article_createat: '2024-05-01',
    article_content: '기사 본문',
    article_id: 20,
    article_image: 'image.png'
  });

  const togglePopup = (index) => {
    const newPopup = [...popup].map((value, i) => (i === index ? !value : false));
    setPopup(newPopup);
  };

  const todaysnewsPreviewLoad = async (id) => {
    try {
      const response = await axios.get(`${serverURL}/news/getNews/${id}`);
      if (response.data.status === 200) {
        const newArticle = response.data.data["news"];
        setNewsData(newArticle);
        setNewArray((prevArray) => {
          if (!prevArray.some(article => article.article_id === newArticle.article_id)) {
            return [...prevArray, newArticle];
          }
          return prevArray;
        });
        console.log(news_id);
      } else {
        alert("뉴스 데이터 로딩 실패");
      }
    } catch (error) {
      console.error(error);
      alert("서버 오류임");
    }
  };

  const loadArrayNews = async () => {
    for (let i = 0; i < 3; i++) {
      const newId = newsId + i;
      await todaysnewsPreviewLoad(newId);
    }
  }

  useEffect(() => {
    loadArrayNews();
  }, []);

  return (
    <div>
      <Link to='/TodaysNewsPage' style={{ textDecoration: 'none', color: 'black' }}>
        <styleD.MainContentText>오늘의 뉴스</styleD.MainContentText>
      </Link>
      <styleD.MainContentBox style={{ height: '680px' }}>
        {
          newArray.map((newsData, index) => (
              <styleD.TodayNewsContainer style={{ marginTop: 50 + 200 * index + 'px' }} key={index + 2}>
                <styleD.NewsImg src={newsData.article_image} />

                <div style={{ margin: '0px 0px 60px 30px', position: 'relative' }}>
                  <p style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '500px' }}>
                    {parse(newsData.article_title)}
                  </p>
                  <p style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '1000px' }}>
                    {newsData.article_content}
                  </p>
                  <styleD.SeeMoreBtn onClick={() => togglePopup(index)}>자세히</styleD.SeeMoreBtn>
                  <Popup currData={newsData} isOpen={popup[index]} onClose={() => togglePopup(index)} />
                </div>

              </styleD.TodayNewsContainer>
            )
          )
        }

        {/* <styleD.TodayNewsContainer style={{ marginTop: '50px' }}>
          <styleD.NewsImg />
          <div style={{ margin: '0px 0px 60px 30px' }}>
            <p style={{ fontWeight: 'bold' }}>제목</p>
            <p className='todayNewsContent'>내용</p>
            <styleD.SeeMoreBtn>자세히</styleD.SeeMoreBtn>
          </div>
        </styleD.TodayNewsContainer>
        */}
      </styleD.MainContentBox>
      <hr style={{ margin: "100px 0px 0px 0px", width: "auto" }}></hr>
    </div>
  )
}


