import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.js';
import MainPage from './pages/MainPage.js';
import Register from './pages/Register.js'
import MypageStorage from './pages/MypageStorage.js';
import MypageInfo from './pages/MypageInfo.js'
import CommunityMain from './pages/CommunityMain.js'
import ScrollToTop from './components/ScrollToTop.js';
import TodaysNewsPage from './pages/TodaysNewsPage.js';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/MypageStorage" element={<MypageStorage/>}></Route>
        <Route path="/MypageInfo" element={<MypageInfo/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
        <Route path="/CommunityMain" element={<CommunityMain/>}></Route>
        <Route path="/TodaysNewsPage" element={<TodaysNewsPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
