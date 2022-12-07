import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h2 className="text-5xl text-emerald-500 font-semibold text-center mt-40">
                React App
              </h2>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
