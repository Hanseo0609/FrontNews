import Navbar from "../src/components/Navbar"
import CommunityPreview from "./components/CommunityPreview";
import Header from "./components/Header";
import Line from "./components/Line";
import Login from "./components/Login";
import NewsPreview from "./components/NewsPreview";
import TodayNewsPreview from "./components/TodayNewsPreview";

function App() {
  return (
    <div className="App">   
      <Navbar />
      <Line />
      <Header />
      <Line />
      <NewsPreview></NewsPreview>
      <TodayNewsPreview></TodayNewsPreview>
      <CommunityPreview></CommunityPreview>
    </div>
  );
}

export default App;
