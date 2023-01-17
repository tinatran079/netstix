import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import GamesPage from "./GamesPage";


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/games" element={<GamesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
