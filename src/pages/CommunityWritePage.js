import * as styleD from '../styles/Community';
import Navbar from '../components/Navbar';
import Line from '../components/Line';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useRef } from 'react';


export default function CommunityWrite() {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const editorRef = useRef();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const saveTitle = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const saveContent = (e) => {
    const editorInstance = editorRef.current.getInstance();
    setContent(editorInstance.getMarkdown());
    console.log(content);
  };

  async function writePost() {
    try {
      const access_token = localStorage.getItem('accessToken');
      const response = await axios.post(`${serverURL}/news/createComment`, {
        title: title,
        content: content,
      }, {
        headers: { Authorization: `Bearer ${access_token}` }
      });
      if (response.data["status"] === 201) {
        console.log("글쓰기 성공")
      }
    } catch (error) {
      console.log(error);
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
              <styleD.WriteTitle onChange={saveTitle} />
            </styleD.WriteHeader>

            <styleD.WriteContent>
              <Editor
                ref={editorRef}
                initialValue="글을 입력하세요"
                previewStyle="vertical"
                height="600px"
                initialEditType="wysiwyg"
                useCommandShortcut={false}
                onChange={saveContent}
              />
            </styleD.WriteContent>
            <div style={{ textAlign: 'right' }}>
              <styleD.WriteSubmitBtn onClick={writePost}>작성하기</styleD.WriteSubmitBtn>
            </div>

          </div>
        </styleD.CommunityContainer>
      </div>
    </div>
  );
}

