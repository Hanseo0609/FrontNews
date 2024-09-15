import Navbar from '../components/Navbar.js';
import Headers from '../components/Header.js';
import Line from '../components/Line.js';
import NewsPreview from '../components/NewsPreview.js'
import TodayNewsPreview from '../components/TodayNewsPreview.js'
import Community from '../components/CommunityPreview.js'

function MainPage() {
  return (
    <div>
      <Navbar />
      <Line />
      <Headers />
      <Line />
      <NewsPreview />
      <TodayNewsPreview />
      <Community />
    </div>
  )
}

export default MainPage;