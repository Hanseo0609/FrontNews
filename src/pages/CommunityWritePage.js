import * as styleD from '../styles/Community';
import Navbar from '../components/Navbar';
import Line from '../components/Line';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import React, { useRef } from "react";


export default function CommunityWrite() {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const editorRef = useRef();
  const [title, setTitle] = useState("");

  const saveTitle = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  async function writePost() {
    try {
      const access_token = localStorage.getItem('accessToken');
      console.log(editorRef.current.getInstance().getMarkdown());
      console.log(editorRef.current.getInstance().getHTML());

      const response = await axios.post(`${serverURL}/board/CommunityPostWrite`, {
        community_title: title,
        community_content: editorRef.current.getInstance().getHTML(),
      }, {
        headers: { Authorization: `Bearer ${access_token}` }
      });
      if (response.data["status"] === 201) {
        console.log(response);
        console.log("글쓰기 성공")
        alert("글쓰기 성공")
        document.location.href = '/CommunityMainPage'
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        console.log('액세스 토큰 만료');
        await handleTokenReissueWritePost();
      } else {
        console.log(error);
        alert('글작성 작성 실패');
      }
    }
  }

  async function handleTokenReissueWritePost() {
    try {
      const refresh_token = localStorage.getItem('refreshToken');

      if (!refresh_token) {
        throw new Error('리프레쉬 토큰 없음');
      }

      const response = await axios.post(`${serverURL}/users/reissue`, {}, {
        headers: { Authorization: `Bearer ${refresh_token}` }
      });
      console.log(response);
      if (response['data']['status'] === 201) {
        localStorage.setItem('accessToken', response.data['access_token']);
        console.log('액세스 토큰 발급 성공');
        await writePost(); // 토큰 갱신 후 댓글 다시 작성 시도
      }
    } catch (error) {
      console.log(error);
      alert('토큰 갱신 실패로 댓글 작성 실패');
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
                placeholder="글을 입력하세요"
                previewStyle="vertical"
                height="600px"
                initialEditType="wysiwyg"
                useCommandShortcut={false}
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

