import { Container, Options, Theme1, Theme2, Top, Search, SearchBox, Main, News, NewsHr, Title, Content, Keyword, Frame, Unnamed } from '../styles/TodaysNewsPage';
<<<<<<< HEAD
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
=======
import Line from '../components/Line';
import Navbar from '../components/Navbar';

>>>>>>> 950242d67684dce06dc52fc33dac593aac0d20ff
export default function TodaysNewsPage() {
  return (
    <Container>
      <Navbar />
<<<<<<< HEAD
      <Options>
        <Theme1>
          <p>오늘의 뉴스 |&nbsp; </p>
=======
      <Line/>
      <Options>
        <Theme1>
<<<<<<<< HEAD:src/components/TodaysNewsPage.js
          <p>오늘의 뉴스11 |&nbsp; </p>
========
          <p>오늘의 뉴스!! |&nbsp; </p>
>>>>>>>> 950242d67684dce06dc52fc33dac593aac0d20ff:src/pages/TodaysNewsPage.js
>>>>>>> 950242d67684dce06dc52fc33dac593aac0d20ff
          <p>주간뉴스 |&nbsp; </p>
          <p>월간 뉴스</p>
        </Theme1>
        <Top>
          <Theme2>
<<<<<<< HEAD
            <p style={{ fontWeight: 800, color: 'black' }}>정치</p>
            <p>과학</p>
            <p>스포츠</p>
            <p>사회</p>
            <p>시사</p>
            <p>경제</p>
=======
            <p style={{ fontWeight: 800, color: 'black' }}>정치 |&nbsp; </p>
            <p>과학 |&nbsp; </p>
            <p>스포츠 |&nbsp; </p>
            <p>사회 |&nbsp; </p>
            <p>시사 |&nbsp; </p>
            <p>경제 |&nbsp; </p>
>>>>>>> 950242d67684dce06dc52fc33dac593aac0d20ff
            <p>생활</p>
          </Theme2>
          <Search>
            <SearchBox />
          </Search>
        </Top>
      </Options>
      <Main>
        <div style={{display: 'block'}}>
            <div style={{display: 'flex'}}>
                <News>
                    <img src="sample.png" alt="news" />
                    <div>
                    <Title>제목</Title>
                    <Content>본문</Content>
                    </div>
                </News>
                <News>
                    <img src="sample.png" alt="news" />
                    <div>
                    <Title>제목</Title>
                    <Content>본문</Content>
                    </div>
                </News>
            </div>
            <div style={{display: 'flex'}}>
                <News>
                    <img src="sample.png" alt="news" />
                    <div>
                    <Title>제목</Title>
                    <Content>본문</Content>
                    </div>
                </News>
                <News>
                    <img src="sample.png" alt="news" />
                    <div>
                    <Title>제목</Title>
                    <Content>본문</Content>
                    </div>
                </News>
            </div>
            <div style={{display: 'flex'}}>
                <News>
                    <img src="sample.png" alt="news" />
                    <div>
                    <Title>제목</Title>
                    <Content>본문</Content>
                    </div>
                </News>
                <News>
                    <img src="sample.png" alt="news" />
                    <div>
                    <Title>제목</Title>
                    <Content>본문</Content>
                    </div>
                </News>
            </div>
            <div style={{display: 'flex'}}>
                <News>
                    <img src="sample.png" alt="news" />
                    <div>
                    <Title>제목</Title>
                    <Content>본문</Content>
                    </div>
                </News>
                <News>
                    <img src="sample.png" alt="news" />
                    <div>
                    <Title>제목</Title>
                    <Content>본문</Content>
                    </div>
                </News>
            </div>
            <div style={{display: 'flex'}}>
                <News>
                    <img src="sample.png" alt="news" />
                    <div>
                    <Title>제목</Title>
                    <Content>본문</Content>
                    </div>
                </News>
                <News>
                    <img src="sample.png" alt="news" />
                    <div>
                    <Title>제목</Title>
                    <Content>본문</Content>
                    </div>
                </News>
            </div>
            <div style={{display: 'flex'}}>
                <News>
                    <img src="sample.png" alt="news" />
                    <div>
                    <Title>제목</Title>
                    <Content>본문</Content>
                    </div>
                </News>
                <News>
                    <img src="sample.png" alt="news" />
                    <div>
                    <Title>제목</Title>
                    <Content>본문</Content>
                    </div>
                </News>
            </div>
            <div style={{display: 'flex'}}>
                <News>
                    <img src="sample.png" alt="news" />
                    <div>
                    <Title>제목</Title>
                    <Content>본문</Content>
                    </div>
                </News>
                <News>
                    <img src="sample.png" alt="news" />
                    <div>
                    <Title>제목</Title>
                    <Content>본문</Content>
                    </div>
                </News>
            </div>
            <div style={{display: 'flex'}}>
                <News>
                    <img src="sample.png" alt="news" />
                    <div>
                    <Title>제목</Title>
                    <Content>본문</Content>
                    </div>
                </News>
                <News>
                    <img src="sample.png" alt="news" />
                    <div>
                    <Title>제목</Title>
                    <Content>본문</Content>
                    </div>
                </News>
            </div>
         
        </div>
        <Keyword>
          <Frame>
            <Unnamed>오늘의 키워드(가제)</Unnamed>
          </Frame>
        </Keyword>
      </Main>
    </Container>
  );
}
