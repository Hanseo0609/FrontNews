import * as styled from '../styles/NewsView';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function NewsView() {

  const serverURL = process.env.REACT_APP_SERVER_URL;
  const { news_id } = useParams();
  const [newsData, setNewsData] = useState({
    title: '기사 제목',
    date: '2024-05-01',
    content: '기사 본문'
  });

  useEffect(() => {
    getNewsData();
  }, [news_id]);

  async function getNewsData() {
    try {
      const response = await axios.get(`${serverURL}/news/getNews/20`);
      if (response.data.status === 200) {
        setNewsData(response.data.data);
        console.log(response.data);
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
        <styled.Title>{newsData.title}</styled.Title>
        <styled.Date>{newsData.date}</styled.Date>
      </div>
      <styled.Headliner />
      <div>
        <styled.Content>{newsData.content}</styled.Content>
      </div>
    </div>
  );
}
