import * as styleD from '../styles/Mypage';
import Navbar from '../components/Navbar';
import Line from '../components/Line';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MypageStorage() {

  const serverURL = process.env.REACT_APP_SERVER_URL;

  //닉네임 가져오기
  const nickname = localStorage.getItem("nickname");

  const [politicsKeyword, setPoliticsKeyword] = useState(false);
  const [economyKeyword, setEconomyKeyword] = useState(false);
  const [societyKeyword, setSocietyKeyword] = useState(false);
  const [scienceKeyword, setScienceKeyword] = useState(false);
  const [loveKeyword, setLoveKeyword] = useState(false);
  const [sportKeyword, setSportKeyword] = useState(false);

  async function postKeyword() {
    if (politicsKeyword) {
      console.log(localStorage.getItem('accessToken'));
      try {
        const response = await axios.post(`${serverURL}/users/keywordAdd`,
          {
            keyword: "정치",
          },
          {
            headers: { access_token: localStorage.getItem('accessToken') },
          });

        console.log(response.data);

      } catch (error) {
        console.error(error);  // 에러 메시지 출력
      }
    }else{
      try {
        const response = await axios.delete(`${serverURL}/users/keywordDelete`,
          {
            keyword: "정치",
          },
          {
            headers: { access_token: localStorage.getItem('accessToken') },
          });

        console.log(response.data);

      } catch (error) {
        console.error(error);  // 에러 메시지 출력
      }
    }

    if (economyKeyword) {
      try {
        const response = await axios.post(`${serverURL}/users/keywordAdd`, {
          keyword: "경제",
        },
          {
            headers: { access_token: localStorage.getItem('accessToken'), },
          });

        console.log(response.data);

      } catch (error) {
        console.error(error);  // 에러 메시지 출력
      }
    }else{
      try {
        const response = await axios.delete(`${serverURL}/users/keywordDelete`,
          {
            keyword: "경제",
          },
          {
            headers: { access_token: localStorage.getItem('accessToken') },
          });

        console.log(response.data);

      } catch (error) {
        console.error(error);  // 에러 메시지 출력
      }
    }

    if (societyKeyword) {
      try {
        const response = await axios.post(`${serverURL}/users/keywordAdd`, {
          keyword: "사회",
        },
          {
            headers: { access_token: localStorage.getItem('accessToken'), },
          });

        console.log(response.data);

      } catch (error) {
        console.error(error);  // 에러 메시지 출력
      }
    }else{
      try {
        const response = await axios.delete(`${serverURL}/users/keywordDelete`,
          {
            keyword: "사회",
          },
          {
            headers: { access_token: localStorage.getItem('accessToken') },
          });

        console.log(response.data);

      } catch (error) {
        console.error(error);  // 에러 메시지 출력
      }
    }

    if (scienceKeyword) {
      try {
        const response = await axios.post(`${serverURL}/users/keywordAdd`, {
          keyword: "과학",
        },
          {
            headers: { access_token: localStorage.getItem('accessToken'), },
          });

        console.log(response.data);

      } catch (error) {
        console.error(error);  // 에러 메시지 출력
      }
    }else{
      try {
        const response = await axios.delete(`${serverURL}/users/keywordDelete`,
          {
            keyword: "과학",
          },
          {
            headers: { access_token: localStorage.getItem('accessToken') },
          });

        console.log(response.data);

      } catch (error) {
        console.error(error);  // 에러 메시지 출력
      }
    }

    if (loveKeyword) {
      try {
        const response = await axios.post(`${serverURL}/users/keywordAdd`, {
          keyword: "연예",
        },
          {
            headers: { access_token: localStorage.getItem('accessToken'), },
          });

        console.log(response.data);

      } catch (error) {
        console.error(error);  // 에러 메시지 출력
      }
    }else{
      try {
        const response = await axios.delete(`${serverURL}/users/keywordDelete`,
          {
            keyword: "연예",
          },
          {
            headers: { access_token: localStorage.getItem('accessToken') },
          });

        console.log(response.data);

      } catch (error) {
        console.error(error);  // 에러 메시지 출력
      }
    }

    if (sportKeyword) {
      try {
        const response = await axios.post(`${serverURL}/users/keywordAdd`, {
          keyword: "스포츠",
        },
          {
            headers: { access_token: localStorage.getItem('accessToken'), },
          });

        console.log(response.data);

      } catch (error) {
        console.error(error);  // 에러 메시지 출력
      }
    }else{
      try {
        const response = await axios.delete(`${serverURL}/users/keywordDelete`,
          {
            keyword: "스포츠",
          },
          {
            headers: { access_token: localStorage.getItem('accessToken') },
          });

        console.log(response.data);

      } catch (error) {
        console.error(error);  // 에러 메시지 출력
      }
    }
  }

  async function getKeyword() {
    try {
      const response = await axios.get(`${serverURL}/users/keyword`, {
        headers: { access_token: localStorage.getItem('accessToken') },
      });

      console.log(response.data)

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getKeyword();
  }, []);

  return (
    <div>
      <Navbar />
      <Line />

      <styleD.MypageContainer>
        <styleD.MypageHeader>
          <styleD.MypageHeaderBtn
            style={{ fontSize: '40px', margin: '0px', marginRight: '20px', color: 'black' }}>
            마이페이지
          </styleD.MypageHeaderBtn>
          <styleD.MypageHeaderBtn style={{ color: 'black' }}>보관함</styleD.MypageHeaderBtn>
          <styleD.MypageHeaderBtn>
            <Link to='/MypageInfoPage' style={{ textDecoration: 'none', color: '#b3b3b3' }}>계정 정보</Link>
          </styleD.MypageHeaderBtn>
        </styleD.MypageHeader>

        <styleD.MypageStatus>
          <p>{nickname}님, 반가워요!</p>
        </styleD.MypageStatus>

        <styleD.RecommendContainer>
          <styleD.RecommendFirstBox>
            <p style={{ color: '#666666', fontSize: '20px', marginTop: '10px' }}>
              AI가 추천해주는 오늘의 기사를 만나보세요.</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '25px' }}>
              <p style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '0px' }}>
                오늘 나에게 맞춰 추천된 기사  150건</p>
            </div>
          </styleD.RecommendFirstBox>
          <styleD.RecommendSecondBox>
          <styleD.ProfileImageSetter>
            <styleD.ProfileSetterTitle>프로필 사진 변경</styleD.ProfileSetterTitle>
            <styleD.ProfileImage>
              <input type='checkbox' />
              <styleD.DefaultProfile src='./source/profile.png' alt='DefaultProfileImg' />
              <p style={{marginLeft:'10px', marginTop:'10px'}}>기본 프로필 사진</p>
            </styleD.ProfileImage>
            <styleD.ProfileImage>
              <input type='checkbox' />
              <styleD.DefaultProfile src='./source/shape.png' style={{borderRadius:'50px'}} alt='DefaultProfileImg' />
              <p style={{marginLeft:'23px', marginTop:'10px'}}>이미지 선택</p>
            </styleD.ProfileImage>
          </styleD.ProfileImageSetter>
          </styleD.RecommendSecondBox>
        </styleD.RecommendContainer>

        <styleD.MypageActivityContainer>
          <styleD.MypageActStorage>
            <hr style={{ marginTop: '50px', height: '5px', backgroundColor: '#D2AC10' }} />
            <styleD.ActStorageText>나의 활동 보관함</styleD.ActStorageText>
            <Line style={{ color: '#666666' }}></Line>

            <styleD.MypageActStorageDetail>
              <styleD.MypageActStorageDetails>
                <p style={{ width: '120px' }}>최근 본 기사</p>
                <styleD.MypageActDetailsBtn style={{ backgroundColor: '#BBBBBB', borderRadius: '30px', width: '100px', height: '30px', color: 'white', border: 'none', marginLeft: '230px', fontSize: '20px' }}>0</styleD.MypageActDetailsBtn>
              </styleD.MypageActStorageDetails>

              <styleD.MypageActStorageDetails style={{ marginLeft: '45px' }}>
                <p style={{ width: '120px' }}>구독한 언론사</p>
                <styleD.MypageActDetailsBtn>0</styleD.MypageActDetailsBtn>
              </styleD.MypageActStorageDetails>
            </styleD.MypageActStorageDetail>

            <hr style={{ color: '#666666', marginTop: '15px' }} />

            <styleD.MypageActStorageDetail>
              <styleD.MypageActStorageDetails>
                <p style={{ width: '120px' }}>댓글단 기사</p>
                <styleD.MypageActDetailsBtn>0</styleD.MypageActDetailsBtn>
              </styleD.MypageActStorageDetails>

              <styleD.MypageActStorageDetails style={{ marginLeft: '45px' }}>
                <p style={{ width: '120px' }}>스크랩한 기사</p>
                <styleD.MypageActDetailsBtn>0</styleD.MypageActDetailsBtn>
              </styleD.MypageActStorageDetails>
            </styleD.MypageActStorageDetail>

            <hr style={{ color: '#666666', marginTop: '15px' }} />
          </styleD.MypageActStorage>

          <styleD.MypageActComment>
            <hr style={{ marginTop: '50px', height: '5px', backgroundColor: '#D2AC10' }} />
            <styleD.ActStorageText>최근 단 댓글</styleD.ActStorageText>
          </styleD.MypageActComment>
        </styleD.MypageActivityContainer>

        <hr style={{ height: '5px', backgroundColor: '#D2AC10' }} />

        <div>
          <styleD.ActStorageText>키워드 관리</styleD.ActStorageText>

          <styleD.MypageKeywordContainer>
            정치 <styleD.MypageKeywordCheckbox type="checkbox" onChange={setPoliticsKeyword} />
            경제 <styleD.MypageKeywordCheckbox type="checkbox" onChange={setEconomyKeyword} />
            사회 <styleD.MypageKeywordCheckbox type="checkbox" onChange={setSocietyKeyword} />
            과학 <styleD.MypageKeywordCheckbox type="checkbox" onChange={setScienceKeyword} />
            연예 <styleD.MypageKeywordCheckbox type="checkbox" onChange={setLoveKeyword} />
            스포츠 <styleD.MypageKeywordCheckbox type="checkbox" onChange={setSportKeyword} />

            <styleD.KeywordUpdateBtn onClick={postKeyword}>키워드 저장</styleD.KeywordUpdateBtn>
          </styleD.MypageKeywordContainer>

        </div>
      </styleD.MypageContainer>
    </div>
  );
}

