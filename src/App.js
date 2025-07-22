import "./App.css";
import AranyakaHomepage from "././pages/AranyakaHomepage";
import "bootstrap/dist/css/bootstrap.min.css";
import YogaPage from "././pages/YogaPage";
import Navbar from "././pages/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FoodPage from "./pages/FoodPage";
import StayPage from "./pages/StayPage";
import GalleryPage from "./pages/GalleryPage";
import Retreat from "./pages/Retreat";
import YogaRetreatPage from "./pages/retreatPage/YogaRetreatPage";
import DetoxRetreatPage from "./pages/retreatPage/DetoxRetreatPage";
import WeightLossRetreatPage from "./pages/retreatPage/WeightLossRetreatPage";
import NaturopathyRetreatPage from "./pages/retreatPage/NaturopathyRetreatPage";
import PanchakarmaRetreatPage from "./pages/retreatPage/PanchakarmaRetreatPage";
import PainManagementRetreatPage from "./pages/retreatPage/PainManagementRetreatPage";
import WomenRetreatPage from "./pages/retreatPage/WomenRetreatPage";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AranyakaHomepage />} />
        <Route path="/yoga" element={<YogaPage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/stay" element={<StayPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/retreat" element={<Retreat />} />
        <Route path="/retreats/yoga-meditation" element={<YogaRetreatPage />} />
        <Route path="/retreats/detoxification" element={<DetoxRetreatPage />} />
        <Route
          path="/retreats/weight-loss"
          element={<WeightLossRetreatPage />}
        />
        <Route
          path="/retreats/naturopathy"
          element={<NaturopathyRetreatPage />}
        />
        <Route
          path="/retreats/panchakarma"
          element={<PanchakarmaRetreatPage />}
        />
        <Route
          path="/retreats/stress-management"
          element={<PainManagementRetreatPage />}
        />
        <Route path="/retreats/women" element={<WomenRetreatPage />} />
      </Routes>
    </Router>
  );
}

export default App;
