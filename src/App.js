import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.js';
import MainPage from './pages/MainPage.js';
import RegisterPage from './pages/RegisterPage.js'
import MypageStoragePage from './pages/MypageStoragePage.js';
import MypageInfoPage from './pages/MypageInfoPage.js'
import CommunityMainPage from './pages/CommunityMainPage.js'
import CommunityWritePage from './pages/CommunityWritePage.js'
import CommunityPostPage from './pages/CommunityPostPage.js'
import ScrollToTop from './components/ScrollToTop.js';
import TodaysNewsPage from './pages/TodaysNewsPage.js';
<<<<<<< HEAD
import FindMyId from './components/FindMyId.js';
import FindMyPassword from './components/FindMyPassword.js';

=======
import FindMyIdPage from './pages/FindMyIdPage.js';
import FindMyPasswordPage from './pages/FindMyPasswordPage.js';
import NewsView from './components/NewsView.js';
import MypageDetailPage from './pages/MypageDetailPage.js'
>>>>>>> 89236e53306fdfc452304bef2d4bbcf562bc1468

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/MypageStoragePage" element={<MypageStoragePage/>}></Route>
        <Route path="/MypageInfoPage" element={<MypageInfoPage/>}></Route>
        <Route path="/LoginPage" element={<LoginPage/>}></Route>
        <Route path="/RegisterPage" element={<RegisterPage/>}></Route>
        <Route path="/CommunityMainPage" element={<CommunityMainPage/>}></Route>
        <Route path="/CommunityWritePage" element={<CommunityWritePage/>}></Route>
        <Route path="/CommunityPostPage" element={<CommunityPostPage/>}></Route>
        <Route path="/TodaysNewsPage" element={<TodaysNewsPage/>}></Route>
<<<<<<< HEAD
        <Route path="/FindMyId" element={<FindMyId/>}></Route>
        <Route path="/FindMyPassword" element={<FindMyPassword />}></Route>
=======
        <Route path="/FindMyIdPage" element={<FindMyIdPage/>}></Route>
        <Route path="/FindMyPasswordPage" element={<FindMyPasswordPage/>}></Route>
        <Route path="/NewsView" element={<NewsView/>}></Route>
        <Route path="/MypageDetailPage" element={<MypageDetailPage/>}></Route>
>>>>>>> 89236e53306fdfc452304bef2d4bbcf562bc1468
      </Routes>
    </Router>
  );
}

export default App;
