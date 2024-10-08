import * as styled from '../styles/PopNews';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import axios from 'axios';


const Popup = ({ isOpen, onClose }) => {

  const serverURL = process.env.REACT_APP_SERVER_URL;

  const [popup, setPopup] = useState([false, false, false]);
  const [news, setNews] = useState([]);

  const { news_id } = useParams();
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

  const todaysnewsPreviewLoad = async () => {
    try {
      const response = await axios.get(`${serverURL}/news/getNews/30`);
      if (response.data.status === 200) {
        setNewsData(response.data.data["news"]);
        console.log(response.data.data["news"]);
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
  }, [news_id]);

  
  return (
    <>
      {isOpen && (
        <styled.PopBox style={{ position: 'absolute', top: '-10px', left: '-280px', zIndex: '1000' }}>
          <styled.InnerBox>
            <styled.Img src={newsData.article_image} />
            <styled.TextBox>
              <styled.Title><p style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '1000px' }}>
                    {newsData.article_title}
                  </p></styled.Title>
              <styled.Content><p style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '1000px' }}>
                    {newsData.article_content}
                  </p></styled.Content>
              <Link to="/NewsView" style={{textDecoration:"none", marginLeft:"100px", fontSize:"25px", border:"1px solid black", borderRadius:"5px", backgroundColor:"skyblue"}}>원문 보기</Link>
              <br />
              <styled.ExitBtn onClick={onClose}>닫기</styled.ExitBtn>
            </styled.TextBox>
          </styled.InnerBox>
        </styled.PopBox>
      )}
    </>
  );
};

export default Popup;