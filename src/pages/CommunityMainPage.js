import * as styleD from '../styles/Community';
import Navbar from '../components/Navbar';
import Line from '../components/Line';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

export default function CommunityMain() {
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [totalPosts, setTotalPosts] = useState(0); // 전체 게시물 수 상태 추가
  const postsPerPage = 10; // 한 페이지당 표시할 게시물 수

  useEffect(() => {
    loadPost(currentPage); // 페이지 번호에 따라 데이터 로드
  }, [currentPage]);

  async function loadPost(pageNumber) {

    setLoading(true);
    try {
      const response = await axios.post(`${serverURL}/board/CommunitypostUpload`, {
        page: pageNumber,
        itemCount: postsPerPage,
      });

      if (response.status === 200) {
        console.log(response);
        const communityPosts = response.data.data;
        const totalDataCount = response.data.data.length; // 서버에서 총 데이터 수를 받아온다고 가정
        console.log(totalDataCount);
        setTotalPosts(totalDataCount); // 총 게시물 수 상태 업데이트

        // 최신순 정렬
        const sortedPosts = communityPosts.sort((a, b) => b.community_id - a.community_id);

        setPosts(
          sortedPosts.map(post => ({
            communityId: post.community_id,
            communityTitle: post.community_title,
            communityCreateat: post.community_createat,
          }))
        );
      }
    } catch (error) {
      console.error(error);
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
          <hr style={{ color: 'black' }} />

          {posts.map((post, index) => (
            <Link to={`/CommunityPage/${post.communityId}`} style={{textDecorationLine: 'none'}}>
              <styleD.CommunityCotentComent key={post.communityId || index}>
                <styleD.CommunityCotentComentFont style={{ width: '150px' }}>{post.communityId}</styleD.CommunityCotentComentFont>
                <styleD.CommunityCotentComentFont style={{ width: '950px' }}>{post.communityTitle}</styleD.CommunityCotentComentFont>
                <styleD.CommunityCotentComentFont style={{ width: '300px' }}>작성자</styleD.CommunityCotentComentFont>
                <styleD.CommunityCotentComentFont style={{ width: '250px' }}>{post.communityCreateat}</styleD.CommunityCotentComentFont>
                <styleD.CommunityCotentComentFont style={{ width: '100px' }}>0</styleD.CommunityCotentComentFont>
              </styleD.CommunityCotentComent>
            </Link>
          ))}

          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={totalPosts} // 서버에서 받아온 총 게시물 수 전달
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

