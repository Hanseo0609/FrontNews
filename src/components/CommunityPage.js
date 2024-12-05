import Navbar from '../components/Navbar';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Line from './Line';
import * as styleD from '../styles/Community';

export default function CommunityPage() {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const [post, setPost] = useState(null);
  const { id } = useParams(); // URL에서 ID 추출
  const [loginId, setLoginId] = useState("");

  useEffect(() => {
    const storedNickname = localStorage.getItem('nickname');
    setLoginId(storedNickname);
  }, []); // 로그인 정보를 로컬스토리지에서 가져오기

  useEffect(() => {
    getPostData();
  }, [id]); // 게시글 데이터 가져오기

  async function getPostData() {
    try {
      const response = await axios.post(`${serverURL}/board/CommunitypostRead`, {
        community_id: String(id),
      });

      if (response.status === 200) {
        console.log(response.data.data[0].community_search);

        setPost(response.data.data[0]); // 게시글 데이터 설정
      } else {
        alert('게시글 데이터를 불러오지 못했습니다.');
      }
    } catch (error) {
      console.error(error);
      alert('서버 오류 발생');
    }
  }

  const handleEdit = () => {
    alert('게시글 수정 기능 구현');
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
    if (confirmDelete) {
      try {
        const response = await axios.post(`${serverURL}/board/CommunitypostDelete`, {
          community_id: String(id),
        });

        if (response.status === 200) {
          alert('게시글이 삭제되었습니다.');
          // 게시글 삭제 후 페이지 이동
          window.location.href = '/CommunityMainPage';
        } else {
          alert('게시글 삭제에 실패했습니다.');
        }
      } catch (error) {
        console.error(error);
        alert('서버 오류로 삭제 실패');
      }
    }
  };

  return (
    <div>
      <Navbar />
      <Line />
      <Header />
      <Line />
      <div>
        {post ? (
          <styleD.PostWrapper>
            <styleD.PostTitleBox>
              <styleD.PostTitle>{post.community_title}</styleD.PostTitle>
              <styleD.PostHeaderBox>
                <styleD.PostDate>작성일 {post.community_createat}</styleD.PostDate>
                <styleD.PostSearch>조회수 {post.community_search}</styleD.PostSearch>
              </styleD.PostHeaderBox>
            </styleD.PostTitleBox>
            <hr style={{ width: '1440px' }} />
            <styleD.PostContentBox>
              <styleD.PostContent>{post.community_content}</styleD.PostContent>
            </styleD.PostContentBox>

            {loginId === post.community_writer && ( // 조건부 렌더링으로 수정/삭제 버튼 표시
              <div>
                <button onClick={handleEdit}>수정</button>
                <button onClick={handleDelete}>삭제</button>
              </div>
            )}
          </styleD.PostWrapper>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
