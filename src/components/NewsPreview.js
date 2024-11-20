import { useEffect, useState } from 'react';
import axios from 'axios';
import parse from 'html-react-parser'
import * as styleD from '../styles/NewsPreview';
import '../styles/btn.css';

export default function NewsPreview() {

  const serverURL = process.env.REACT_APP_SERVER_URL;

  const data = ['정치', '경제', '사회', '과학', '연예', '스포츠'];
  const [btnActive, setBtnActive] = useState("");
  const [clickData, setClickData] = useState("");

  const onChangeClickData = (event) => {
    setClickData(event.target.value);
  }

  const toggleActive = (e) => {
    setClickData(e.target.value);
    console.log(data[clickData]);
    setBtnActive((prev) => {
      return e.target.value;
    });
  };

  const [newsId, setNewsId] = useState(22);
  const [newsData, setNewsData] = useState({
    article_title: '기사 제목',
    article_createat: '2024-05-01',
    article_content: '기사 본문',
    article_id: 0,
    article_image: 'image.png'
  });

  const newsPreviewLoad = async () => {
    try {
      const response = await axios.get(`${serverURL}/news/recommned/${data[clickData]}`,{});
      console.log(response)
      if (response.data.status === 200) {
        setNewsData(response.data.data["news"]);
        // console.log(response.data.data["news"]);
      } else {
        alert("뉴스 데이터 로딩 실패");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const prevBtn = () => {
    console.log("이전버튼");
    if(newsId == 0) {
      alert("가장 최신 뉴스입니다.");
    }
    if(newsId > 1) {
      const newId = newsId - 1;
      setNewsId(newId);
      newsPreviewLoad(newId);
    }
  }

  const nextBtn = () => {
    console.log("다음버튼");
    const newId = newsId + 1;
    setNewsId(newId);
    newsPreviewLoad(newId);
  }

  useEffect(() => {
    newsPreviewLoad(newsId);
  }, [newsId]);


  return (
    <styleD.MainContentWrap>
      <styleD.MainContentText>뉴스 요약</styleD.MainContentText>
      <styleD.MainContentBox style={{ height: '500px' }}>
        <div>
          <p style={{ fontWeight: 'bold', fontSize: '24px', margin: '10px 0px 0px 0px', padding: '15px 0px 10px 15px' }}>키워드</p>
          <div style={{ display: 'flex', paddingLeft: '15px' }}>
            {data.map((item, index) => {
              return (
                <div>
                  <button
                    value={index}
                    className={"btn" + (index == btnActive ? " active" : "")}
                    onClick={toggleActive} >
                    {item}
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        <div style={{ display: 'flex', marginTop: '30px', marginLeft:'120px'}}>

          <button onClick={prevBtn} className='prevBtn'>◀️</button>
          <styleD.NewsImg src={newsData.article_image} style={{ width: '420px', height: '320px', borderRadius:'15px', marginRight:'20px', marginLeft: '40px'}} />
          {/* {news.map((item, index) => (
            <div key={index} style={{ marginLeft: '30px' }}>
              <p>{item.title}으악</p>
              <p>{item.content}내용</p>
            </div>
          ))} */}
          <div>
          <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', width: '500px', fontWeight:'bold', fontSize:'30px', width:'800px' }}>
            {parse(newsData.article_title)}
          </p>
          <p style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '800px' }}>
            {newsData.article_content}
          </p>
          </div>
          <button onClick={nextBtn} className='nextBtn'>▶️</button>
        </div>

      </styleD.MainContentBox>
      <hr style={{ margin: "100px 0px 0px 0px" }}></hr>
    </styleD.MainContentWrap>
  )
}


