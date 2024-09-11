import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Gallerypage from './pages/Gallerypage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/gallery" element={<Gallerypage/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
