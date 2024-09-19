import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login.js';
import MainPage from './pages/MainPage.js';
import Register from './components/Register.js'
import MypageStorage from './components/MypageStorage.js';
import MypageInfo from './components/MypageInfo.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="MypageStorage" element={<MypageStorage />}></Route>
      </Routes>
      {/* <Register></Register> */}
      {/* <MypageStorage></MypageStorage> */}
      {/* <MypageInfo></MypageInfo> */}
    </BrowserRouter>
  );
}

export default App;
