import { Link } from 'react-router-dom';
import * as styleD from '../styles/NewsPreview';
import Popup from './PopNews';
import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';


export default function TodayNewsPreview() {
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const [popup, setPopup] = useState([false, false, false]);
  const [news, setNews] = useState([]);

  const togglePopup = (index) => {
    const newPopup = [...popup].map((value, i) => (i === index ? !value : false));
    setPopup(newPopup);
  };

  const todaysnewsPreviewLoad = async () => {
    try {
			const response = await axios.get(`${serverURL}/users/newsPreview`);
      if (response.data["status"] === 201) {
        console.log(response.data);
        setNews(response.data["data"]);
      }
    } catch(error) {
      console.log(error);
    }
  };

  useEffect(() => {
    todaysnewsPreviewLoad();
  }, []);  

  return (
    <div>
      <Link to='/TodaysNewsPage' style={{textDecoration: 'none', color: 'black'}}>
        <styleD.MainContentText>오늘의 뉴스</styleD.MainContentText>
      </Link>
      <styleD.MainContentBox style={{ height: '680px' }}>
        {
          [0, 1, 2].map((_, index) => {
            return (
              <styleD.TodayNewsContainer style={{ marginTop: 50 + 200 * index + 'px' }} key={index + 2}>
                <styleD.NewsImg />

                <div style={{ margin: '0px 0px 60px 30px', position: 'relative' }}>
                  <p style={{ fontWeight: 'bold' }}>제목</p>
                  <p className='todayNewsContent'>내용</p>
                  <styleD.SeeMoreBtn onClick={() => togglePopup(index)}>자세히</styleD.SeeMoreBtn>
                  <Popup isOpen={popup[index]} onClose={() => togglePopup(index)} />
                </div>
                
              </styleD.TodayNewsContainer>
            )
          })
        }
       
        {/* <styleD.TodayNewsContainer style={{ marginTop: '50px' }}>
          <styleD.NewsImg />
          <div style={{ margin: '0px 0px 60px 30px' }}>
            <p style={{ fontWeight: 'bold' }}>제목</p>
            <p className='todayNewsContent'>내용</p>
            <styleD.SeeMoreBtn>자세히</styleD.SeeMoreBtn>
          </div>
        </styleD.TodayNewsContainer>
        */}
      </styleD.MainContentBox>
      <hr style={{ margin: "100px 0px 0px 0px", width: "auto" }}></hr>
    </div>
  )
}


