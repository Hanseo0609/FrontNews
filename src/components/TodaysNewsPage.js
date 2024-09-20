import { Container, Options, Theme1, Theme2, Top, Search, SearchBox, Main, News, NewsHr, Title, Content, Keyword, Frame, Unnamed } from '../styles/TodaysNewsPage';
import Navbar from '../components/Navbar';

export default function TodaysNewsPage() {
  return (
    <Container>
      <Navbar />
      <Options>
        <Theme1>
          <p>오늘의 뉴스 |&nbsp; </p>
          <p>주간뉴스 |&nbsp; </p>
          <p>월간 뉴스</p>
        </Theme1>
        <Top>
          <Theme2>
            <p style={{ fontWeight: 800, color: 'black' }}>정치 |&nbsp; </p>
            <p>과학 |&nbsp; </p>
            <p>스포츠 |&nbsp; </p>
            <p>사회 |&nbsp; </p>
            <p>시사 |&nbsp; </p>
            <p>경제 |&nbsp; </p>
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
