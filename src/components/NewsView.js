import * as styled from '../styles/NewsView';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

export default function NewsView() {

  const serverURL = process.env.REACT_APP_SERVER_URL;

  const [newsData, setNewsData] = useState({
    article_title: '기사 제목',
    article_createat: '2024-05-01',
    article_content: '기사 본문',
    article_id: 20,
    article_image: 'image.png',
    article_url: 'http',
    article_views: 0,
    article_like: 0,
    article_scrap: 0
  });
  const [comment, setComment] = useState("");
  const [newsComment, setNewsComment] = useState([]);
  const [editingComment, setEditingComment] = useState(false);
  const [editComment, setEditComment] = useState("");

  const handleOnChangeComment = (event) => {
    setEditComment(event.target.value);
  };

  function onChangeComment(event) {
    setComment(event.target.value);
  }

  function onClickEdit(index) {
    if (!editingComment) {
      setEditComment(newsComment[index].comment_content);
    } else {
      setEditComment("");
    }
    setEditingComment(!editingComment);
  }

  // 댓글 작성
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

  // 토큰 갱신 함수
  async function handleTokenReissuePostComment() {
    try {
      const refresh_token = localStorage.getItem('refreshToken');

      if (!refresh_token) {
        throw new Error('리프레쉬 토큰 없음');
      }

      const response = await axios.post(`${serverURL}/users/reissue`, {}, {
        headers: { Authorization: `Bearer ${refresh_token}` }
      });
      if (response['data']['status'] === 201) {
        localStorage.setItem('accessToken', response.data['access_token']);
        await postComment();
      }
    } catch (error) {
      console.log(error);
      alert('토큰 갱신 실패로 댓글 작성 실패');
    }
  }

  // 좋아요/스크랩 상태 변경
  async function toggleLike() {
    await toggleNewsData('like');
  }

  async function toggleScrap() {
    await toggleNewsData('scrap');
  }

  async function toggleNewsData(type) {
    try {
        const access_token = localStorage.getItem('accessToken');
        const article_id = newsData.article_id;

        // API 요청
        const response = await axios.post(`${serverURL}/news/${type}`, {
            article_id: article_id,
        }, {
            headers: { Authorization: `Bearer ${access_token}` }
        });

        if (response.data['status'] === 201) {
            alert(response.data['message']);
            // 서버에서 최신 데이터를 갱신
            await refreshNewsData();
        }
    } catch (error) {
        if (error.response && error.response.status === 401) {
            console.log('액세스 토큰 만료');
            await handleTokenReissueToggleNewsData(type);
        } else {
            console.log(error);
            alert(`${type === 'like' ? '좋아요' : '스크랩'} 실패`);
        }
    }
}


  async function handleTokenReissueToggleNewsData(type) {
    try {
      const refresh_token = localStorage.getItem('refreshToken');

      if (!refresh_token) {
        throw new Error('리프레쉬 토큰 없음');
      }

      const response = await axios.post(`${serverURL}/users/reissue`, {}, {
        headers: { Authorization: `Bearer ${refresh_token}` }
      });
      if (response['data']['status'] === 201) {
        localStorage.setItem('accessToken', response.data['access_token']);
        await toggleNewsData(type);
      }
    } catch (error) {
      console.log(error);
      alert('토큰 갱신 실패로 작업 실패');
    }
  }

  // 서버에서 최신 뉴스 데이터 가져오기
  async function refreshNewsData() {
    try {
      const article_id = newsData.article_id;
      const response = await axios.get(`${serverURL}/news/getNews/${article_id}`);
      if (response.data.status === 200) {
        setNewsData(response.data.data.news);
      } else {
        alert("데이터 갱신 실패");
      }
    } catch (error) {
      console.error(error);
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
        setNewsData(response.data.data.news);
        setNewsComment(response.data.data.comments);
      } else {
        alert("뉴스 데이터 로딩 실패");
      }
    } catch (error) {
      console.error(error);
      // alert("서버 오류임");
    }
  }

  return (
    <div>
      <Navbar />
      <styled.liner />
      <Header />
      <styled.liner />
      <div>
        <styled.Title>{parse(newsData.article_title)}</styled.Title>
        <div style={{ display: 'flex' }}>
          <styled.Date>{newsData.article_createat}</styled.Date>
          <styled.Date style={{ marginLeft: '1040px' }}>조회수 : {newsData.article_views}</styled.Date>
        </div>
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
      <div style={{ display: 'flex' }}>
        <h3 style={{ marginLeft: '280px' }}>댓글</h3>
        <button onClick={toggleLike} style={{ border: 'none', background: 'none', fontSize: '25px', marginLeft: '50px' }}>
          ❤️좋아요 ({newsData.article_like})
        </button>
        <button onClick={toggleScrap} style={{ border: 'none', background: 'none', fontSize: '25px', marginLeft: '20px' }}>
          📌스크랩 ({newsData.article_scrap})
        </button>
      </div>
    </div>
  );
}
