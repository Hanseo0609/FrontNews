import { Link } from 'react-router-dom';
import Line from '../components/Line';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import * as styleD from '../styles/TodaysNewsPage';

export default function TodaysNewsPage() {

  const serverURL = process.env.REACT_APP_SERVER_URL;
  const { news_id } = useParams();
  const [newsData, setNewsData] = useState({
    keyword: '키워드',
    itemCount: '1',
  });

  useEffect(() => {
    getNewsData();
  }, [news_id]);

  async function getNewsData() {
    try {
      const response = await axios.get(`${serverURL}/news/getNewsList/{keyword}/{itemCount}`);
      if (response.data.status === 200) {
        setNewsData(response.data.data);
        console.log(response.data);
        alert("뉴스 조회 성공")
      } else if (response.data.status === 404) {
        alert("뉴스 조회 실패");
      } else {
        alert("뉴스 조회 실패")
      }
    } catch (error) {
      console.error(error);
      alert("서버 오류임");
    }
  }



  return (
    <div>
      <Navbar />
      <Line/>
      <Header />
      <Line />
      <styleD.NewsContainer>
        <styleD.TodaysNewsContainer>
            <p className='selected'>오늘의 뉴스</p>
            <p>주간 뉴스</p>
            <p>월간 뉴스</p>
        </styleD.TodaysNewsContainer>
        <styleD.NewsCategoryContainer>
            <p className='selected'>정치</p>
            <p>경제</p>
						<p>사회</p>
						<p>과학</p>
						<p>연예</p>
						<p>스포츠</p>
        </styleD.NewsCategoryContainer>
        <styleD.NewsBoxContainer>
            {
                Array(10).fill(0).map((_, index) => (
                    <styleD.NewsBox key={index}>
											<styleD.NewsImg>
                      	<img src='https://picsum.photos/100/100' alt=''/>
											</styleD.NewsImg>
                      <div>
                        <styleD.NewsTitle>제목</styleD.NewsTitle>
                        <styleD.NewsContent>본문</styleD.NewsContent>
                      </div>
                    </styleD.NewsBox>
                ))
            }
        </styleD.NewsBoxContainer>
      </styleD.NewsContainer>
    </div>
  );
}
