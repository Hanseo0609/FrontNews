import { Link } from 'react-router-dom';
import Line from '../components/Line';
import Navbar from '../components/Navbar';
import * as styleD from '../styles/Mypage';

export default function TodaysNewsPage() {

    //닉네임 가져오기
  const nickname = localStorage.getItem("nickname");
  //아이디 가져오기
  const userEmail = localStorage.getItem("userEmail");
  //전화번호 가져오기
  const phoneNumber = localStorage.getItem("phoneNumber");

    return (
        <div>
          <Navbar />
          <Line />

        <styleD.MypageContainer>
        <styleD.MypageHeader>
          <styleD.MypageHeaderBtn
            style={{ fontSize: '40px', margin: '0px', marginRight: '20px', color: 'black' }}>
            나의 활동 보관함
          </styleD.MypageHeaderBtn>
        </styleD.MypageHeader>

        <styleD.MypageStatus>
          <p>{nickname}님, 반가워요!</p>
        </styleD.MypageStatus>
        <hr style={{height: '5px', backgroundColor: '#D2AC10', marginTop: '20px'}} />
        <styleD.DetailMenus>
            <styleD.DetailSideBar>
               <styleD.SideBarOption>
                    <styleD.SideBarText>사이드메뉴1</styleD.SideBarText>
                </styleD.SideBarOption> 
                <styleD.SideBarOption>
                    <styleD.SideBarText>사이드메뉴1</styleD.SideBarText>
                </styleD.SideBarOption> 
                <styleD.SideBarOption>
                    <styleD.SideBarText>사이드메뉴1</styleD.SideBarText>
                </styleD.SideBarOption> 
                <styleD.SideBarOptionfinal>
                    <styleD.SideBarText>사이드메뉴1</styleD.SideBarText>
                </styleD.SideBarOptionfinal> 
            </styleD.DetailSideBar>
            <styleD.DetailWrapper>
                <styleD.DetailOption>
                    <styleD.DetailOptionHeader>
                        <styleD.DetailOptionHeaderText>메뉴1</styleD.DetailOptionHeaderText>
                    </styleD.DetailOptionHeader>
                </styleD.DetailOption>
                <styleD.DetailOption>
                    <styleD.DetailOptionHeader>
                        <styleD.DetailOptionHeaderText>메뉴1</styleD.DetailOptionHeaderText>
                    </styleD.DetailOptionHeader>
                </styleD.DetailOption>
            </styleD.DetailWrapper>
        </styleD.DetailMenus>
      </styleD.MypageContainer>
        </div>
      );
}