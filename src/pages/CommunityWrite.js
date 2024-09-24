import * as styleD from '../styles/Community';
import Navbar from '../components/Navbar';
import Line from '../components/Line';
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

export default function CommunityWrite() {

  const markdownText = `
  # 안녕하세요!
  저는 현재 리액트에서 \`react-markdown\`를 이용하여 **마크다운**을 랜더링하고 있습니다.
  `;

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
          <div style={{ textAlign: 'center', fontSize: '25px', paddingTop: '40px' }}>글쓰기</div>
          <div style={{ paddingLeft: '50px', paddingRight: '50px' }}>
            <styleD.WriteHeader style={{ marginTop: '50px' }}>
              <h3>카테고리</h3>
              <styleD.SelectCategoryBox>
                <option>정치</option>
                <option>경제</option>
                <option>사회</option>
                <option>기술</option>
                <option>연예</option>
                <option>스포츠</option>
              </styleD.SelectCategoryBox>
            </styleD.WriteHeader>
          </div>
        </styleD.CommunityContainer>
      </div>
    </div>
  );
}

