import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login.js';
import MainPage from './pages/MainPage.js';
import Register from './pages/Register.js'
import MypageStorage from './pages/MypageStorage.js';
import MypageInfo from './pages/MypageInfo.js'
import CommunityMain from './pages/CommunityMain.js'
import CommunityWrite from "./pages/CommunityWrite.js";
import CommunityPost from "./pages/CommunityPost.js";
import TodaysNewsPage from "./pages/TodaysNewsPage.js";
import ScrollToTop from "./components/ScrollToTop.js";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/MypageStorage" element={<MypageStorage/>}></Route>
        <Route path="/MypageInfo" element={<MypageInfo/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
        <Route path="/CommunityMain" element={<CommunityMain/>}></Route>
        <Route path="/CommunityWrite" element={<CommunityWrite/>}></Route>
        <Route path="/CommunityPost" element={<CommunityPost/>}></Route>
        <Route path="/TodayNewsPage" element={<TodaysNewsPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
