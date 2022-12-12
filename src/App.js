import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import PageLoading from "./components/LoadingUi/PageLoading";

const CastDetails = lazy(() => import("./pages/CastDetails/CastDetails"));
const Cast = lazy(() => import("./pages/Cast/Cast"));
const Home = lazy(() => import("./pages/Home/Home"));

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cast" element={<Cast />} />
          <Route path="/cast/:id" element={<CastDetails />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
