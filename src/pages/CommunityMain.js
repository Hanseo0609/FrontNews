import * as styleD from '../styles/Communuty';
import Navbar from '../components/Navbar';
import Line from '../components/Line';
import { Link } from "react-router-dom";

export default function CommunityMain() {
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
    
      <div style={{backgroundColor: '#D9D9D9', width: '1920px', height: '1080px'}}>
        <styleD.CommunityContainer>
            <styleD.CommunityCotentComent>
                <styleD.CommunityCotentComentFont style={{width: '150px'}}>번호</styleD.CommunityCotentComentFont>
                <styleD.CommunityCotentComentFont style={{width: '950px'}}>제목</styleD.CommunityCotentComentFont>
                <styleD.CommunityCotentComentFont style={{width: '300px'}}>작성자</styleD.CommunityCotentComentFont>
                <styleD.CommunityCotentComentFont style={{width: '250px'}}>날짜</styleD.CommunityCotentComentFont>
                <styleD.CommunityCotentComentFont style={{width: '100px'}}>조회수</styleD.CommunityCotentComentFont>
            </styleD.CommunityCotentComent>
            <hr style={{color: 'black'}}></hr>
        </styleD.CommunityContainer>
      </div>
    


    </div>
  );
}
