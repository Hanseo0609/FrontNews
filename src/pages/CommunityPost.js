import * as styleD from '../styles/Community';
import Navbar from '../components/Navbar';
import Line from '../components/Line';
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

export default function CommunityPost() {

  const markdownText = `
  # 안녕하세요!
  저는 현재 리액트에서 \`react-markdown\`를 이용하여 **마크다운**을 랜더링하고 있습니다.
  
  ## 프론트 황제 김한서에 대해
  김한서님은 프론트엔드의 황제라고 불리우는 분입니다. 발로란트 레디언트.
  
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
          <styleD.PostHeader>
            <h2>제목입니다.</h2>
            <h4>프론트황제 김한서</h4>
          </styleD.PostHeader>

          <Line />

          <div style={{ width: "100%", display: "flex" }}>
            <div style={{ maxWidth: "768px", width: "100%" }}>
              <ReactMarkdown>
                {markdownText}
              </ReactMarkdown>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to='/CommunityMain'>
              <styleD.WriteSubmitBtn>목록으로</styleD.WriteSubmitBtn>
            </Link>
          </div>
        </styleD.CommunityContainer>
      </div>
    </div>
  );
}

