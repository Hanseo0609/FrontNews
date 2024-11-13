import * as styleD from '../styles/Community';
import Navbar from '../components/Navbar';
import Line from '../components/Line';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import Posts from './Posts';

export default function CommunityMain() {
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    loadPost();
  }, []);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => posts.slice(indexOfFirst, indexOfLast);

  async function loadPost() {
    setLoading(true);
    try {
      const response = await axios.post(`${serverURL}/board/CommunitypostUpload`, {
        page: 1,
        itemCount: 10,
      });
      if (response.status === 200) {
        const communityPosts = response.data.data;
        setPosts(communityPosts.map(post => ({
          communityId: post.community_id,
          communityTitle: post.community_title,
          communityCreateat: post.community_createat
        })));
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <div>
      <Navbar />
      <Line />
      <styleD.CommunityHeaderContainer>
        <styleD.CommunitySelectBox>
          <option>제목</option>
          <option>내용</option>
          <option>작성자</option>
        </styleD.CommunitySelectBox>
        <styleD.CommunitySearch className='search-input' placeholder='키워드를 입력해 주세요' />
        <styleD.HeaderSearchBtn><img className='search-btn' src='./source/Icon.png' /></styleD.HeaderSearchBtn>
      </styleD.CommunityHeaderContainer>

      <Line />

      <div style={{ backgroundColor: '#D9D9D9', width: '1920px', height: '1080px' }}>
        <styleD.CommunityContainer>
          <styleD.CommunityCotentComent>
            <styleD.CommunityCotentComentFont style={{ width: '150px' }}>번호</styleD.CommunityCotentComentFont>
            <styleD.CommunityCotentComentFont style={{ width: '950px' }}>제목</styleD.CommunityCotentComentFont>
            <styleD.CommunityCotentComentFont style={{ width: '300px' }}>작성자</styleD.CommunityCotentComentFont>
            <styleD.CommunityCotentComentFont style={{ width: '250px' }}>날짜</styleD.CommunityCotentComentFont>
            <styleD.CommunityCotentComentFont style={{ width: '100px' }}>조회수</styleD.CommunityCotentComentFont>
          </styleD.CommunityCotentComent>
          <hr style={{ color: 'black' }}/>


          {posts.map((post, index) => (
            <styleD.CommunityCotentComent key={post.communityId || index}>
              <styleD.CommunityCotentComentFont style={{ width: '150px' }}>{post.communityId}</styleD.CommunityCotentComentFont>
              <styleD.CommunityCotentComentFont style={{ width: '950px' }}>{post.communityTitle}</styleD.CommunityCotentComentFont>
              <styleD.CommunityCotentComentFont style={{ width: '300px' }}>작성자</styleD.CommunityCotentComentFont>
              <styleD.CommunityCotentComentFont style={{ width: '250px' }}>{post.communityCreateat}</styleD.CommunityCotentComentFont>
              <styleD.CommunityCotentComentFont style={{ width: '100px' }}>0</styleD.CommunityCotentComentFont>
            </styleD.CommunityCotentComent>
          ))}


          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={setCurrentPage}
            currentPage={currentPage}
          />

          <Link to='/CommunityWritePage'>
            <styleD.WriteBtn>글쓰기</styleD.WriteBtn>
          </Link>
        </styleD.CommunityContainer>
      </div>
    </div>
  );
}
