import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from 'react';
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import { AuthProvider, useToken } from "./auth";
import MainPage from "./MainPage";
import './App.css';
import SearchResults from "./SearchResults";
import Nav from "./Nav";
import SideNavBar from "./SideNavBar";
import Logout from "./Logout";
import GamesPage from "./GamesPage";
import DetailsPage from "./DetailsPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [games, setGames] = useState([]);

  async function handleSearch(query) {
    const response = await fetch(`http://localhost:8000/api/games?search=${query}`
    );
    const data = await response.json();
    setGames(data.results);
  }
  return (

    <BrowserRouter>
      <AuthProvider>
        <Nav onSearch={handleSearch} />
        {/* <div className="background-color"> */}
        {/* <div className="container"> */}
          <Routes>
            <Route path="/" element={<SideNavBar />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/sidebar" element={<SideNavBar />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/games/:id" element={<DetailsPage />} />
            <Route path="/search/:query" element={<SearchResults games={games} />} />
          </Routes>
        {/* </div> */}
        {/* </div> */}
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
