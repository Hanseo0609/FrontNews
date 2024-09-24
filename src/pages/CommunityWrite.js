import * as styleD from '../styles/Community';
import Navbar from '../components/Navbar';
import Line from '../components/Line';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Link } from "react-router-dom";

export default function CommunityWrite() {
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
          <div style={{ textAlign: 'center', fontSize: '25px', paddingTop: '40px', fontWeight: 'bold' }}>글쓰기</div>
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
            <styleD.WriteHeader>
              <h3>제목</h3>
              <styleD.WriteTitle />
            </styleD.WriteHeader>

            <styleD.WriteContent>
              <Editor
                initialValue="글을 입력하세요"
                previewStyle="vertical"
                height="600px"
                initialEditType="wysiwyg"
                useCommandShortcut={false}
              />
            </styleD.WriteContent>
            <div style={{ textAlign: 'right' }}>
              <styleD.WriteSubmitBtn>작성하기</styleD.WriteSubmitBtn>
            </div>

          </div>
        </styleD.CommunityContainer>
      </div>
    </div>
  );
}

