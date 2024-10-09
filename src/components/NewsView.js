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
    article_title: '기사 제목',
    article_createat: '2024-05-01',
    article_content: '기사 본문',
    article_id: 20,
    article_image: 'image.png',
    article_url: 'http'
  });
  const [comment, setComment] = useState("");

  function onChangeComment(event) {
    setComment(event.target.value);
  }

  //댓글 작성
  async function postComment() {
    try {
      const article_id = newsData['article_id'];
      const access_token = localStorage.getItem('accessToken');
  
      const response = await axios.post(`${serverURL}/news/createComment`, {
        article_id: article_id,
        comment_content: comment, // comment는 함수 인자로 받아야 함
      }, {
        headers: { Authorization: `Bearer ${access_token}` }
      });
  
      if (response.data["status"] === 201) {
        alert('댓글 작성 성공');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log('액세스 토큰 만료');
        await handleTokenReissue();
      } else {
        console.log(error);
        alert('댓글 작성 실패');
      }
    }
  }
  
  async function handleTokenReissue() {
    try {
      const refresh_token = localStorage.getItem('refreshToken');
      console.log(refresh_token);
      if (!refresh_token) {
        throw new Error('리프레시 토큰 없음');
      }
  
      const response = await axios.post(`${serverURL}/users/reissue`, {
        refresh_token: refresh_token
      });
      console.log(response);
      if (response['status'] === 201) {
        localStorage.setItem('accessToken', response.data['access_token']);
        console.log('액세스 토큰 발급 성공');
        await postComment(); // 토큰 갱신 후 댓글 다시 작성 시도
      }
    } catch (error) {
      console.log(error);
      alert('토큰 갱신 실패로 댓글 작성 실패');
    }
  }

  useEffect(() => {
    getNewsData();
  }, [news_id]);

  async function getNewsData() {
    try {
      const response = await axios.get(`${serverURL}/news/getNews/30`);
      if (response.data.status === 200) {
        setNewsData(response.data.data["news"]);
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
        <styled.Title>{newsData.article_title}</styled.Title>
        <styled.Date>{newsData.article_createat}</styled.Date>
      </div>
      <styled.Headliner />
      <div style={{ textAlign: 'center' }}>
        <img src={newsData.article_image} style={{ width: '1350px', height: '800px' }} />
        <p>출처 : {newsData.article_url}</p>
        <styled.Content style={{ textAlign: 'left', lineHeight: '50px' }}>{newsData.article_content}</styled.Content>
      </div>


      <div style={{ display: 'flex', marginLeft: '280px' }}>
        <textarea onChange={onChangeComment} style={{ width: '1200px', height: '100px', marginRight: '20px' }}></textarea>
        <button onClick={postComment} style={{ width: '130px', height: '100px' }}>작성하기</button>
      </div>

      <h3 style={{ marginLeft: '280px' }}>댓글</h3>
      <div style={{ marginLeft: '280px' }}>
        <p>zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz</p>
      </div>
      <hr style={{ width: '1350px' }} />

    </div >
  );
}
