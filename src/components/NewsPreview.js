import { useEffect, useState } from 'react';
import axios from 'axios';
import * as styleD from '../styles/NewsPreview';

export default function NewsPreview() {

  const serverURL = process.env.REACT_APP_SERVER_URL;
  const [news, setNews] = useState([]);

  const newsPreviewLoad = async () => {
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

  const prevBtn = () => {

  }

  const nextBtn = () => {
    
  }

  useEffect(() => {
    newsPreviewLoad();
  }, []);   


  return (
    <styleD.MainContentWrap>
      <styleD.MainContentText>뉴스 요약</styleD.MainContentText>
      <styleD.MainContentBox style={{ height: '540px', display: 'flex'}}>
        <div>
          <p style={{ fontWeight: 'bold', fontSize: '24px', margin: '10px 0px 0px 0px', padding: '15px 0px 10px 15px' }}>키워드</p>
          <div style={{ display: 'flex', paddingLeft: '15px' }}>
            <styleD.KeywordBtn>IT</styleD.KeywordBtn>
            <styleD.KeywordBtn>정치</styleD.KeywordBtn>
            <styleD.KeywordBtn>스포츠</styleD.KeywordBtn>
            <styleD.KeywordBtn>경제</styleD.KeywordBtn>
          </div>
          <button>이전</button>
          <button>다음</button>
        </div>

        <div style={{display: 'flex', marginTop: '110px'}}>
          <styleD.NewsImg style={{ width: '420px', height: '320px' }} />
            {news.map((item, index) => (
              <div key={index} style={{marginLeft: '30px'}}>
                <p>{item.title}으악</p>
                <p>{item.content}내용</p>
              </div>
            ))}
            <p>내용</p>
        </div>
        
      </styleD.MainContentBox>
      <hr style={{ margin: "100px 0px 0px 0px" }}></hr>
    </styleD.MainContentWrap>
  )
}


