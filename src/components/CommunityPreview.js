import * as styleD from '../styles/CommunityPreview';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CommunityPreview() {
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const [posts, setPosts] = useState([]); // 게시글 데이터를 저장할 상태

  async function loadPost() {
    try {
      const response = await axios.post(`${serverURL}/board/CommunitypostUpload`, {
        page: 1,
        itemCount: 3,
      });

      if (response.status === 200 && response.data.data) {
        setPosts(response.data.data); // 게시글 데이터 상태 업데이트
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadPost();
  }, []);

  return (
    <div style={{ height: '600px' }}>
      <styleD.MainContentText>
        <Link to='/CommunityMainPage' style={{ textDecoration: 'none', color: 'black' }}>게시판</Link>
      </styleD.MainContentText>
      <Link to='/CommunityMainPage' style={{ textDecoration: 'none', color: 'black' }}>
        <styleD.MainContentBox>
          {posts.map((post, index) => (
            <styleD.CommunityBox key={post.community_id || index}>
              <p>{post.community_title}</p> {/* 제목 출력 */}
              <p>{post.community_createat}</p> {/* 작성일 출력 */}
            </styleD.CommunityBox>
          ))}
        </styleD.MainContentBox>
      </Link>
    </div >

  );
}
