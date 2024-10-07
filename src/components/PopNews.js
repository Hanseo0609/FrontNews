import * as styled from '../styles/PopNews';
import { Link } from 'react-router-dom';

const Popup = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <styled.PopBox style={{ position: 'absolute', top: '-10px', left: '-280px', zIndex: '1000' }}>
          <styled.InnerBox>
            <styled.Img src="logo192.png" />
            <styled.TextBox>
              <styled.Title>조회한 뉴스 제목</styled.Title>
              <styled.Content>뉴스 요약 본문</styled.Content>
              <Link to="/NewsView">원문 보기</Link>
              <br />
              <styled.ExitBtn onClick={onClose}>닫기</styled.ExitBtn>
            </styled.TextBox>
          </styled.InnerBox>
        </styled.PopBox>
      )}
    </>
  );
};

export default Popup;