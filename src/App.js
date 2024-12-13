import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Gallerypage from './pages/Gallerypage';
import VideoPage from './pages/Videopage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/gallery" element={<Gallerypage/>} />
          <Route path="/video" element={<VideoPage/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
