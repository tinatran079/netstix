import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import GamesPage from "./GamesPage";
import DetailsPage from "./DetailsPage";


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/games/:id" element={<DetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
