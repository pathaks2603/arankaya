import './App.css';
import AranyakaHomepage from '././pages/AranyakaHomepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import YogaPage from '././pages/YogaPage';
import Navbar from '././pages/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FoodPage from './pages/FoodPage';
import StayPage from './pages/StayPage';
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
       <Router>
         <Navbar />
      <Routes>
        <Route path="/" element={<AranyakaHomepage />} />
        <Route path="/yoga" element={<YogaPage />} />
        <Route path='/food' element={<FoodPage />} />
        <Route path='/stay' element={<StayPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
