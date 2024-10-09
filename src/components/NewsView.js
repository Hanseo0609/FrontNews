import * as styled from '../styles/NewsView';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function NewsView() {

  const serverURL = process.env.REACT_APP_SERVER_URL;
  
  const [newsData, setNewsData] = useState({
    article_title: '기사 제목',
    article_createat: '2024-05-01',
    article_content: '기사 본문',
    article_id: 20,
    article_image: 'image.png',
    article_url: 'http'
  });

  useEffect(() => {
    getNewsData();
  }, []);

  async function getNewsData(props) {
    try {
      const response = await axios.get(`${serverURL}/news/getNews/${props}`);
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
  }

  return (
    <div>
      <Navbar />
      <styled.liner />
      <Header />
      <styled.liner />
      <div>
        <styled.Title>{newsData.article_title}</styled.Title>
        <styled.Date>{newsData.article_createat}</styled.Date>
      </div>
      <styled.Headliner />
      <div style={{textAlign:'center'}}>
        <img src={newsData.article_image} style={{width:'1350px', height:'800px'}} />
        <p>출처 : {newsData.article_url}</p>
        <styled.Content style={{textAlign:'left', lineHeight:'50px'}}>{newsData.article_content}</styled.Content>
      </div>
    </div>
  );
}
