import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import { AuthProvider, useToken } from "./auth";
import MainPage from "./MainPage";
import Nav from "./Nav";
import Logout from "./Logout";
import GamesPage from "./GamesPage";
import DetailsPage from "./DetailsPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/games/:id" element={<DetailsPage />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
