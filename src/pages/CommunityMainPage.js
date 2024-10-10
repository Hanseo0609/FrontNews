import * as styleD from '../styles/Community';
import Navbar from '../components/Navbar';
import Line from '../components/Line';
import { Link } from "react-router-dom";
import { useState } from 'react';
import Pagination from './PaginationPage';

export default function CommunityMain() {
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

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
          <hr style={{ color: 'black' }}></hr>

          {/* <main>
            {datas.slice(offset, offset + limit).map((data}) => ())}
          </main> */}
          <Pagination
            total={datas.length}
            limit={10}
            page={page}
            setPage={setPage}
          />
          

          {/* <Link to='/CommunityPostPage' style={{textDecoration: 'none', color: 'black'}}>
            <div style={{ display: 'flex', border: '1px solid #b3b3b3', borderRadius: '5px' }}>
              <p style={{ width: '150px', marginLeft: '60px' }}>1</p>
              <p style={{ width: '920px', marginLeft: '300px' }}>와 음바페 미쳤는데???</p>
              <p style={{ width: '380px' }}>메시메시</p>
              <p style={{ width: '280px' }}>2024/09/25</p>
              <p style={{ width: '80px' }}>5</p>
            </div>
          </Link> */}



          <Link to='/CommunityWritePage'>
            <styleD.WriteBtn>글쓰기</styleD.WriteBtn>
          </Link>
        </styleD.CommunityContainer>
      </div>
    </div>
  );
}

