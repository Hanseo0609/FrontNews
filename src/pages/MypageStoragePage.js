import * as styleD from '../styles/Mypage';
import Navbar from '../components/Navbar';
import Line from '../components/Line';
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import parse from 'html-react-parser'

export default function MypageStorage() {

  const serverURL = process.env.REACT_APP_SERVER_URL;
  const [articleLikeTitles, setArticleLikeTitles] = useState([]);
  const [articleScrapNum, setArticleScraapNum] = useState(0);

  // 닉네임 가져오기
  const nickname = localStorage.getItem("nickname");
  const thumbnailInput = useRef();

  const handleClick = () => {
    thumbnailInput.current.click();
  };

  const saveFileImage = async e => {
    try {
      const access_token = localStorage.getItem('accessToken');
      const formData = new FormData();
      formData.append('image', e.target.files[0]);

      const response = await axios.post(`${serverURL}/users/profileImageChange`, formData, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'multipart/form-data',
        }
      });

      console.log(response);

    } catch (error) {
      console.log(error);
    }
  };

  // 좋아요한 기사
  async function articleLove() {
    try {
      const access_token = localStorage.getItem('accessToken');

      const response = await axios.get(`${serverURL}/news/likeNewsLists`, {
        headers: { Authorization: `Bearer ${access_token}` }
      });

      if (response.data["status"] === 200) {
        console.log(response);
        // 제목만 추출해서 최대 3개 저장
        const titles = response.data.data['news']
          .slice(0, 3) // 최대 3개만
          .map(article => article.article_title);
        setArticleLikeTitles(titles);
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        console.log('액세스 토큰 만료');
        await handleTokenReissueArticleLove();
      } else {
        console.log(error);
      }
    }
  }

  // 좋아요한 기사 토큰 재발급
  async function handleTokenReissueArticleLove() {
    try {
      const refresh_token = localStorage.getItem('refreshToken');

      if (!refresh_token) {
        throw new Error('리프레쉬 토큰 없음');
      }

      const response = await axios.post(`${serverURL}/users/reissue`, {}, {
        headers: { Authorization: `Bearer ${refresh_token}` }
      });

      if (response['data']['status'] === 201) {
        localStorage.setItem('accessToken', response.data['access_token']);
        console.log('액세스 토큰 발급 성공');
        await articleLove();
      }
    } catch (error) {
      console.log(error);
    }
  }

  // 스크랩한 기사
  async function articleScrap() {
    try {
      const access_token = localStorage.getItem('accessToken');

      const response = await axios.get(`${serverURL}/news/scrapNewsLists`, {
        headers: { Authorization: `Bearer ${access_token}` }
      });

      if (response.data["status"] === 200) {
        console.log("scrap")
        console.log(response.data.data['news'].length)
        console.log(response);

        setArticleScraapNum(response.data.data['news'].length);
         
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        console.log('액세스 토큰 만료');
        await handleTokenReissueArticleScrap();
      } else {
        console.log(error);
      }
    }
  }

  // 스크랩한 기사 토큰 재발급
  async function handleTokenReissueArticleScrap() {
    try {
      const refresh_token = localStorage.getItem('refreshToken');

      if (!refresh_token) {
        throw new Error('리프레쉬 토큰 없음');
      }

      const response = await axios.post(`${serverURL}/users/reissue`, {}, {
        headers: { Authorization: `Bearer ${refresh_token}` }
      });

      if (response['data']['status'] === 201) {
        localStorage.setItem('accessToken', response.data['access_token']);
        console.log('액세스 토큰 발급 성공');
        await articleScrap();
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    articleLove();
    articleScrap();
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
            <styleD.ProfileSetterTitle>프로필 사진 변경</styleD.ProfileSetterTitle>
            <styleD.ProfileImageSetter>
              <styleD.ProfileImage>
                <input type='radio' name='profileRadio' />
                <styleD.DefaultProfile src='./source/profile.png' alt='DefaultProfileImg' />
                <p style={{ marginLeft: '10px', marginTop: '10px' }}>기본 프로필 사진</p>
              </styleD.ProfileImage>
              <styleD.ProfileImage>
                <input type='radio' name='profileRadio' />
                <styleD.DefaultProfile src='./source/shape.png' style={{ borderRadius: '50px' }} alt='DefaultProfileImg' />
                <p style={{ marginLeft: '23px', marginTop: '10px' }}>나의 이미지</p>
              </styleD.ProfileImage>

              <button onClick={handleClick} style={{ height: '50px', marginTop: '50px' }}>
                이미지 업로드
                <input type='file' accept='image/jpg, image/jpeg, image/png' multiple ref={thumbnailInput} onChange={saveFileImage} style={{ display: 'none' }} />
              </button>
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
                <styleD.MypageActDetailsBtn>{articleScrapNum}</styleD.MypageActDetailsBtn>
              </styleD.MypageActStorageDetails>
            </styleD.MypageActStorageDetail>

            <hr style={{ color: '#666666', marginTop: '15px' }} />
          </styleD.MypageActStorage>

          <styleD.MypageActComment>
            <hr style={{ marginTop: '50px', height: '5px', backgroundColor: '#D2AC10' }} />
            <styleD.ActStorageText>좋아요한 기사</styleD.ActStorageText>
            <hr style={{ color: '#666666', marginTop: '15px' }} />
            {articleLikeTitles.length > 0 ? (
              articleLikeTitles.map((title, index) => (
                <div key={index}>
                  <p style={{ marginBottom: '10px' }}>
                    {parse(title)}
                  </p>
                  {index < articleLikeTitles.length - 1 && (
                    <hr style={{ color: '#666666', marginTop: '15px' }} />
                  )}
                </div>
              ))
            ) : (
              <p>좋아요한 기사가 없습니다.</p>
            )}
          </styleD.MypageActComment>
        </styleD.MypageActivityContainer>
      </styleD.MypageContainer>
    </div>
  );
}
