import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login.js';
import MainPage from './pages/MainPage.js';
import Register from './components/Register.js'
import MypageStorage from './components/MypageStorage.js';
import MypageInfo from './components/MypageInfo.js'
import CommunityMain from './components/CommunityMain.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/MypageStorage" element={<MypageStorage/>}></Route>
        <Route path="/MypageInfo" element={<MypageInfo/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
        <Route path="/CommunityMain" element={<CommunityMain/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
