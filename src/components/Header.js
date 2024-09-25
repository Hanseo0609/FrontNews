import { Link } from 'react-router-dom';
import * as styleD from '../styles/Header';

export default function Header() {
  return (
      <styleD.Header>
        <styleD.HeaderNews>
          <Link to='/TodaysNewsPage' style={{textDecoration: 'none', color: 'black'}}>뉴스보기</Link>
        </styleD.HeaderNews>
        <styleD.HeaderCommunity>
          <Link to='/CommunityMain' style={{textDecoration: 'none', color: 'black'}}>게시판</Link>
        </styleD.HeaderCommunity>
        <styleD.HeaderSearchWrapper>
          <styleD.HeaderSearch className='search-input' placeholder='키워드를 입력해 주세요' />
          <styleD.HeaderSearchBtn><img className='search-btn' src='./source/Icon.png' /></styleD.HeaderSearchBtn>
        </styleD.HeaderSearchWrapper>
        <styleD.HeaderRealTimeSearch>
          <p>1. 비트코인 상장 폐지</p>
          <img style={{marginLeft: '80px', marginRight: '10px'}} src='./source/up.png'/>
          <p>99</p>
        </styleD.HeaderRealTimeSearch>
      </styleD.Header>
  )
}