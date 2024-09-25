import * as styled from '../styles/PopNews';

const Popup = (props) => {
  const { onClose } = props;

  return (
    <styled.PopBox>
      <styled.InnerBox>
        <styled.Img src="logo192.png" />
        <styled.TextBox>
          <styled.Title>조회한 뉴스 제목</styled.Title>
          <styled.Content>뉴스 요약 본문</styled.Content>
          <styled.Link href="/">원문 보기</styled.Link>
        </styled.TextBox>
      </styled.InnerBox>
      <button onClick={() => { onClose(false) }}>닫기</button>
    </styled.PopBox>
  )
}

// function PopNews() {
//   // 뉴스를 클릭하면, 글 번호를 받아와서 뉴스 정보를 불러오는 함수 필요
//   // ex) datas 
//   return (
//     <styled.PopBox>
//       <styled.InnerBox>
//       <styled.Img src="logo192.png"/>
//       <styled.TextBox>
//       <styled.Title>조회한 뉴스 제목</styled.Title>
//       <styled.Content>뉴스 요약 본문</styled.Content>
//       <styled.Link href="/">원문 보기</styled.Link>
//       </styled.TextBox>
//       </styled.InnerBox>
//       <button onClick={() => { onClose(false) }}>닫기</button>
//     </styled.PopBox>
//   );
// }

export default Popup;