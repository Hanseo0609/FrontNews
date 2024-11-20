import { Link } from 'react-router-dom';
import * as styleD from '../styles/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';
import parse from 'html-react-parser'
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../redux/actions';

export default function Header() {
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.searchQuery); // Redux 상태 가져오기

  const [hotArticle, setHotArticle] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const searchNews = async () => {
    try {
      if (!inputValue.trim()) {
        alert("검색어를 입력하세요.");
        return;
      }
  
      console.log("검색어:", inputValue); // 디버깅용
  
      // URL에서 한글 그대로 사용
      const response = await axios.get(`${serverURL}/search/${inputValue}`);
      console.log("검색 결과:", response.data);
      if (response.data.status === 200) {
        console.log("통신 완료!");
      } else {
        console.warn("결과 없음:", response.data);
      }
    } catch (error) {
      console.error("검색 실패:", error.response || error.message);
    }
  };
  
  const handleChange = (event) => {
    setInputValue(event.target.value); // value 업데이트
  };

  async function currentArticle() {
    try {
      const response = await axios.get(`${serverURL}/news/highestViews`);
      if (response.data['status'] === 200) {
        // console.log(response.data);

        const articles = response.data.data;
        setHotArticle(articles.map(article => {
          let title = article['article_title'];
          if (title.length >= 16) {
            title = title.slice(0, 16) + "...";
          }
          return title;
        }));
        // console.log(hotArticle)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    currentArticle();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % hotArticle.length);
    }, 5000); // 10초마다 업데이트

    return () => clearInterval(interval);
  }, [hotArticle]);


  return (
    <styleD.Header>
      <styleD.HeaderNews>
        <Link to='/TodaysNewsPage' style={{ textDecoration: 'none', color: 'black' }}>뉴스보기</Link>
      </styleD.HeaderNews>
      <styleD.HeaderCommunity>
        <Link to='/CommunityMainPage' style={{ textDecoration: 'none', color: 'black' }}>게시판</Link>
      </styleD.HeaderCommunity>
      <styleD.HeaderSearchWrapper>
        <styleD.HeaderSearch type='text' onChange={handleChange} className='search-input' placeholder='키워드를 입력해 주세요' />
        <styleD.HeaderSearchBtn onClick={searchNews}><img className='search-btn' src='/source/Icon.png' /></styleD.HeaderSearchBtn>
      </styleD.HeaderSearchWrapper>
      <styleD.HeaderRealTimeSearch>
        <p>
          {currentIndex + 1}.
          {hotArticle.length > 0 && hotArticle[currentIndex]
            ? parse(hotArticle[currentIndex])
            : 'Loading...'}
        </p>
      </styleD.HeaderRealTimeSearch>
    </styleD.Header>
  )
}