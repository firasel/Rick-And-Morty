import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Cast from "./pages/Cast/Cast";
import CastDetails from "./pages/CastDetails/CastDetails";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cast" element={<Cast />} />
        <Route path="/cast/:id" element={<CastDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
