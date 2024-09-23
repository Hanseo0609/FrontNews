import * as styled from '../styles/NewsView';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

export default function NewsView() {
  return (
    <div>
      <Navbar />
      <styled.liner />
      <Header />
      <styled.liner />
      <div>
        <styled.Title>기사 제목</styled.Title>
        <styled.Date>2024-05-01</styled.Date>
      </div>
      <styled.Headliner />
      <div>
        <styled.Content>기사 본문</styled.Content>
      </div>
    </div>
  );
}
