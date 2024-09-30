import * as styleD from '../styles/Community';
import Navbar from '../components/Navbar';
import Line from '../components/Line';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Link } from "react-router-dom";
import axios from 'axios';


export default function CommunityWrite() {
  async function postData() {
    try {
      const response = await axios.post('http://210.181.138.119/users/register', {
        user_email: "aa1@example.com",  // 이메일 형식 권장
        user_password: "bb1",
        user_name: "John Doe",
        user_number: "010-1234-5678",  // 숫자 형식이 기대된다면 수정
        user_nickname: "asd",
        user_age: 25,  // 숫자값
      });
      console.log(response.data);  // response.data로 출력
    } catch (error) {
      console.error(error);  // 에러 메시지 출력
    }
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
              <styleD.WriteSubmitBtn onClick={postData}>작성하기</styleD.WriteSubmitBtn>
            </div>

          </div>
        </styleD.CommunityContainer>
      </div>
    </div>
  );
}

