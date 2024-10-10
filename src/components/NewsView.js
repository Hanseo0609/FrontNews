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
  const [comment, setComment] = useState("");
  const [newsComment, setNewsComment] = useState([]);

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
        comment_content: comment,
      }, {
        headers: { Authorization: `Bearer ${access_token}` }
      });

      if (response.data["status"] === 201) {
        alert('댓글 작성 성공');
        setComment("");
        await getNewsData();
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log('액세스 토큰 만료');
        await handleTokenReissuePostComment();
      } else {
        console.log(error);
        alert('댓글 작성 실패');
      }
    }
  }

  async function handleTokenReissuePostComment() {
    try {
      const refresh_token = localStorage.getItem('refreshToken');

      if (!refresh_token) {
        throw new Error('리프레쉬 토큰 없음');
      }

      const response = await axios.post(`${serverURL}/users/reissue`, {}, {
        headers: { Authorization: `Bearer ${refresh_token}` }
      });
      console.log(response);
      if (response['data']['status'] === 201) {
        localStorage.setItem('accessToken', response.data['access_token']);
        console.log('액세스 토큰 발급 성공');
        await postComment(); // 토큰 갱신 후 댓글 다시 작성 시도
      }
    } catch (error) {
      console.log(error);
      alert('토큰 갱신 실패로 댓글 작성 실패');
    }
  }

  //댓글 삭제
  const deleteComment = async (commentId) => {
    try {
      const access_token = localStorage.getItem('accessToken');

      const response = await axios.delete(`${serverURL}/news/deleteComment`, {
        data: { comment_id: commentId },
        headers: { Authorization: `Bearer ${access_token}` }
      })

      if (response.data['status'] === 200) {
        alert('댓글 삭제 성공');
        await getNewsData();
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log('액세스 토큰 만료');
        await handleTokenReissueDeleteComment();
      } else {
        console.log(error);
        alert('댓글 삭제 실패');
      }
    }
  }

  async function handleTokenReissueDeleteComment(commentId) {
    try {
      const refresh_token = localStorage.getItem('refreshToken');

      if (!refresh_token) {
        throw new Error('리프레쉬 토큰 없음');
      }

      const response = await axios.post(`${serverURL}/users/reissue`, {}, {
        headers: { Authorization: `Bearer ${refresh_token}` }
      });
      console.log(response);
      if (response['data']['status'] === 201) {
        localStorage.setItem('accessToken', response.data['access_token']);
        console.log('액세스 토큰 발급 성공');
        await deleteComment(commentId);
      }
    } catch (error) {
      console.log(error);
      alert('토큰 갱신 실패로 댓글 삭제 실패');
    }
  }

  useEffect(() => {
    getNewsData();
  }, []);

  async function getNewsData() {
    try {
      const url = new URL(window.location.href);
      const searchParams = new URLSearchParams(url.search);
      const newsId = searchParams.get('id');

      const response = await axios.get(`${serverURL}/news/getNews/${newsId}`);
      if (response.data.status === 200) {
        setNewsData(response.data.data["news"]);
        setNewsComment(response.data.data['comments']);
        console.log(response.data.data['comments']);
      } else {
        alert("뉴스 데이터 로딩 실패");
      }
    } catch (error) {
      console.error(error);
      alert("서버 오류임");
    }
  }

  //뉴스 좋아요
  async function postNewsLike() {
    try {
      const access_token = localStorage.getItem('accessToken');

      const url = new URL(window.location.href);
      const searchParams = new URLSearchParams(url.search);
      const newsId = searchParams.get('id');

      const reponse = await axios.post(`${serverURL}/news/like`,{
        article_id: newsId,
      }, {
        headers: { Authorization: `Bearer ${access_token}` }
      });
      if(reponse.data['status'] === 201){
        alert(`${reponse.data['message']}`);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log('액세스 토큰 만료');
        await handleTokenReissuePostNewsLike();
      } else {
        console.log(error);
        alert('좋아요 실패');
      }
    }
  }

  async function handleTokenReissuePostNewsLike() {
    try {
      const refresh_token = localStorage.getItem('refreshToken');

      if (!refresh_token) {
        throw new Error('리프레쉬 토큰 없음');
      }

      const response = await axios.post(`${serverURL}/users/reissue`, {}, {
        headers: { Authorization: `Bearer ${refresh_token}` }
      });
      console.log(response);
      if (response['data']['status'] === 201) {
        localStorage.setItem('accessToken', response.data['access_token']);
        console.log('액세스 토큰 발급 성공');
        await postNewsLike(); // 토큰 갱신 후 댓글 다시 작성 시도
      }
    } catch (error) {
      console.log(error);
      alert('토큰 갱신 실패로 좋아요 실패');
    }
  }

  //뉴스 스크랩
  async function postNewsScrap() {
    try {
      const access_token = localStorage.getItem('accessToken');

      const url = new URL(window.location.href);
      const searchParams = new URLSearchParams(url.search);
      const newsId = searchParams.get('id');

      const reponse = await axios.post(`${serverURL}/news/scrap`,{
        article_id: newsId,
      }, {
        headers: { Authorization: `Bearer ${access_token}` }
      });
      if(reponse.data['status'] === 201){
        alert(`${reponse.data['message']}`);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log('액세스 토큰 만료');
        await handleTokenReissuePostNewsScrap();
      } else {
        console.log(error);
        alert('스크랩 실패');
      }
    }
  }

  async function handleTokenReissuePostNewsScrap() {
    try {
      const refresh_token = localStorage.getItem('refreshToken');

      if (!refresh_token) {
        throw new Error('리프레쉬 토큰 없음');
      }

      const response = await axios.post(`${serverURL}/users/reissue`, {}, {
        headers: { Authorization: `Bearer ${refresh_token}` }
      });
      console.log(response);
      if (response['data']['status'] === 201) {
        localStorage.setItem('accessToken', response.data['access_token']);
        console.log('액세스 토큰 발급 성공');
        await postNewsScrap(); // 토큰 갱신 후 댓글 다시 작성 시도
      }
    } catch (error) {
      console.log(error);
      alert('토큰 갱신 실패로 스크랩 실패');
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
        <textarea
          onChange={onChangeComment}
          value={comment}
          style={{ width: '1200px', height: '100px', marginRight: '20px', resize: 'none' }} />

        <button onClick={postComment} style={{ width: '130px', height: '100px' }}>작성하기</button>
      </div>
      <div style={{display: 'flex'}}>
        <h3 style={{ marginLeft: '280px' }}>댓글</h3>
        <button onClick={postNewsLike} style={{border: 'none', background: 'none', fontSize: '25px', marginLeft: '50px'}}>❤️좋아요</button>
        <button onClick={postNewsScrap} style={{border: 'none', background: 'none', fontSize: '25px'}}>📄스크랩</button>
      </div>

      <hr style={{ width: '1350px' }} />

      <div style={{ marginLeft: '280px', width: '1350px' }}>
        {newsComment.length > 0 ? (
          newsComment.map((comment, index) => (
            <div key={index}>
              <p>{comment.comment_content}<br />작성자 : {comment.user_nickname} | 작성일자 : {comment.comment_createat}</p>
              <button onClick={() => { deleteComment(comment.comment_id) }}>삭제</button>
              <button>수정</button>
              <hr />
            </div>
          ))
        ) : (
          <p>댓글이 없습니다.</p>
        )}
      </div>
    </div >
  );
}
